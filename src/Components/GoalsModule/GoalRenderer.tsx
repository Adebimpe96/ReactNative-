import { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { db } from '../../Config/firebase'
import GoalItem from './GoalItem'
import GoalInput from './GoalInput'
import { goalCollections, ICourseGoals } from './goals.model'
import { getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore'
import GoalEditInput from './GoalEdit'

const GoalRenderer = () => {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false)
  const [editModalIsVisible, setEditModalIsVisible] = useState<boolean>(false)
  const [courseGoals, setCourseGoals] = useState<ICourseGoals[]>([])
  const [selectedGoal, setSelectedGoal] = useState<ICourseGoals | null>(null)

  useEffect(() => {
    const getGoalList = async () => {
      try {
        const goalData = await getDocs(goalCollections)
        const goalDataObj: ICourseGoals[] = goalData.docs.map((doc) => ({
          id: doc.data().id,
          goals: doc.data().goals,
        }))
        setCourseGoals(goalDataObj)
      } catch (error) {
        console.error(error)
      }
    }
    getGoalList()
  }, [])

  const deleteGoal = async (id: string) => {
    try {
      const goalDoc = doc(db, 'todos', id)
      await deleteDoc(goalDoc)
    } catch (error) {
      console.error(error)
      console.log('delete')
    }
  }

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

    function openEditGoalHandler(goal: ICourseGoals) {
      setEditModalIsVisible(true)
      setSelectedGoal(goal)
      console.log(goal);
    }

  function closeGoalHandler() {
    setModalIsVisible(false)
  }

  function closeEditGoalHandler() {
    setEditModalIsVisible(false)
  }
  // function addGoalHandler(enteredGoalText: string) {
  //   setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { goals: enteredGoalText, id: new Date().getTime() }])
  //   closeGoalHandler()
  // }

  // function deleteGoalHandler(id: number) {
  //   setCourseGoals((currentCourseGoals) => {
  //     return currentCourseGoals.filter((goal) => goal.id !== id)
  //   })
  // }
// function editGoalHandler(id: number, newGoalText: string) {
//   setCourseGoals((currentCourseGoals) => currentCourseGoals.map((goal) => (goal.id === id ? { ...goal, goals: newGoalText } : goal)))
// }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler} />
        <GoalInput isVisible={modalIsVisible} onCancel={closeGoalHandler} />
        <GoalEditInput isVisible={editModalIsVisible} onCancel={closeEditGoalHandler} goal={selectedGoal} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  title={itemData.item.goals}
                  id={itemData.item.id}
                  onDeleteItem={() => deleteGoal(String(itemData.item.id))}
                  OnEditItem={() => openEditGoalHandler(itemData.item)}
                />
              )
            }}
            keyExtractor={(item) => String(item.id.toString())}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  )
}
export default GoalRenderer

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#e4d0ff',
  },
  goalsContainer: {
    flex: 1,
  },
})
