import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { IGoalItem } from './goals.model'
import { Ionicons } from '@expo/vector-icons' // Make sure to install this: expo install @expo/vector-icons

const GoalItem = ({ id, title, onDeleteItem, OnEditItem }: IGoalItem) => {
  return (
    <View style={styles.goalListStyle}>
      <Text style={styles.goalTitleStyle}>{title}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={OnEditItem} style={styles.button}>
          <Ionicons name="create-outline" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDeleteItem(id)} style={styles.button}>
          <Ionicons name="trash-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalListStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#5e0acc',
  },
  goalTitleStyle: {
    color: '#cbabf5',
    fontWeight: '600',
    fontStyle: 'italic',
    flex: 1, // Allow text to take available space
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 10,
    padding: 6,
  },
})
