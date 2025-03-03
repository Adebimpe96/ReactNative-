import { doc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'
import { db } from '../../Config/firebase'
import { ICourseGoals } from './goals.model'

interface GoalProps {
  isVisible: boolean
  goal: ICourseGoals| null
  onCancel: () => void
  onFinishEditing: (id: string, newGoal: string) => void
  refreshGoals: () => void
}
const GoalEditInput = ({ isVisible, goal, onCancel, onFinishEditing, refreshGoals }: GoalProps) => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('')

   useEffect(() => {
     if (goal) {
       setEnteredGoalText(goal.goals)
     }
   }, [goal])
  
  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText)
  }
  const editGoal = async (id: string) => {
    if (!goal) return
    try {
      onFinishEditing(id, enteredGoalText)
      onCancel()

      const goalDoc = doc(db, 'todos', id)
      await updateDoc(goalDoc, { description: enteredGoalText })
      setEnteredGoalText('')

      refreshGoals()
    } catch (error) {
      console.error(error)
    }
  }

  function editGoalHandler(id: string) {
    editGoal(id)
    setEnteredGoalText('')
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../../assets/images/goal.png')} />
        <TextInput style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Edit Goal" onPress={() => editGoalHandler(String(goal?.id))} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalEditInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
})
