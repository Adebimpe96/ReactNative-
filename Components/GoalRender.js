import { View, StyleSheet, FlatList, Text } from "react-native";
import GoalItem from "./GoalItem";
import GoalInput from "./GoalInput";

export default function GoalsList ({goalInputHandler, closeModal, addGoalHandler, courseGoals, enteredText, onDeleteItem, visible}) {

      return (
        <>
          <GoalInput 
            goalInputHandler={goalInputHandler}
            visible={visible}
            addGoalHandler={addGoalHandler}
            closeModal={closeModal}
            enteredText={enteredText} />
          <View style={styles.goalContainer}>
            {/* <Text style={styles.textStyle}>My goals...</Text> */}
            <FlatList 
              data={courseGoals}
              alwaysBounceVertical={false}
              renderItem={(itemsDetails) => {
                return <GoalItem text={itemsDetails.item.text} onDeleteItem={onDeleteItem} id={itemsDetails.item.id}/>
              }}
               keyExtractor={(item, index) => {
                return (
                  item.id
                )
               }}
              />
          </View>
        </>
      );
}

const styles = StyleSheet.create({
  goalContainer : {
    flex: 5,
  },
  textStyle: {
    textAlign: 'center',
    fontStyle: 'italic',
  }
});