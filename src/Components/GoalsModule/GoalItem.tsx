import { StyleSheet, View, Text, Pressable } from 'react-native'
import { IGoalItem } from './goals.model'

const GoalItem = ({ id, title, onDeleteItem }: IGoalItem) => {
  return (
    <View style={styles.goalListStyle}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={() => onDeleteItem(id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalTitleStyle}>{title}</Text>
      </Pressable>
      {/* <Button title="EditGoal" color="#5e0acc" onPress={() => console.log('Edit')} />
      <Button title="Delete Goal" color="#5e0acc" onPress={() => console.log('delete')} /> */}
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalListStyle: {
    margin: 8,
    borderRadius: 6,
    padding: 4,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalTitleStyle: {
    color: '#cbabf5',
    padding: 8,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  goalTextStyle: {
    color: 'white',
    padding: 8,
  },
})
