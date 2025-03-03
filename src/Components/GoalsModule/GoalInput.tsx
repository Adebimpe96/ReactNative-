import { addDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'
import { goalCollections } from './goals.model'

interface GoalProps {
  isVisible: boolean
  onCancel: () => void
}
const GoalInput = ({ isVisible, onCancel }: GoalProps) => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('')

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText)
  }
  const addGoals = async () => {
    try {
      await addDoc(goalCollections, {
        goals: enteredGoalText,
        id: String(new Date().getTime()),
      })
    } catch (error) {
      console.error(error)
    }
  }
  function addGoalHandler() {
    addGoals()
    setEnteredGoalText('')
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../../assets/images/goal.png')} />
        <TextInput style={styles.textInput} placeholder="My course goal!" onChangeText={goalInputHandler} value={enteredGoalText} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

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
