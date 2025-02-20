import { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import GoalItem from './GoalItem'
import GoalInput from './GoalInput'
import { goalCollections, ICourseGoals } from './goals.model'
import { getDocs } from 'firebase/firestore'

const GoalRenderer = () => {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false)
  const [courseGoals, setCourseGoals] = useState<ICourseGoals[]>([])

  useEffect(() => {
    const getGoalList = async () => {
      //Fetch goal List
      try {
        const goalData = await getDocs(goalCollections)
        const goalDataObj: ICourseGoals[] = goalData.docs.map((doc) => ({
          id: doc.data().id,
          goals: doc.data().goals,
        }))
        //set data to courseGoal state
        setCourseGoals(goalDataObj)
      } catch (error) {
        console.error(error)
      }
    }
    getGoalList()
  }, [])

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function closeGoalHandler() {
    setModalIsVisible(false)
  }
  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { goals: enteredGoalText, id: new Date().getTime() }])
    closeGoalHandler()
  }

  function deleteGoalHandler(id: number) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler} />
        <GoalInput isVisible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={closeGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem title={itemData.item.goals} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />
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
