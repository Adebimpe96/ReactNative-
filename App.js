import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function closeGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    closeGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
  <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler} />
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={closeGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler} />
            );
          } }
          keyExtractor={(item, index) => {
            return item.id;
          } }
          alwaysBounceVertical={false} />
      </View>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:'#e4d0ff',
  },
  goalsContainer: {
    flex: 5,
  },
});

// import { useState } from 'react';
// import { Button, StyleSheet, View } from 'react-native';
// import GoalsList from './Components/GoalRender';

// export default function App() {
//   const [enteredText, setEnteredText] = useState('');
//   const [courseGoals, setCourseGoals] = useState([]);
//   const [openGoalsModal, setOpenGoalsModal] = useState(false);

//   function openGoalModalHandler() {
//     setOpenGoalsModal(true);
//   }

//   function closeGoalModalHandler() {
//     setOpenGoalsModal(false);
//   }
//   function goalInputHandler(text) {
//     setEnteredText(text);
//   }

//   function addGoalHandler() {
//     setCourseGoals((prevGoals) => [...prevGoals, {text: enteredText, id: Math.random().toString()}]);
//     setEnteredText('');
//     closeGoalModalHandler();
//   }
//   function onDeleteItem(id) {
//     setCourseGoals((currentGoals) => {
//       return currentGoals.filter((goals) => goals.id !== id)
//     })
//   }
//   return (
//     <View style={styles.appContainer}>
//       <Button title='Add New Goals!' color="#5e0acc" onPress={openGoalModalHandler} />
//         { openGoalsModal && 
//           <GoalsList 
//             goalInputHandler={goalInputHandler}
//             addGoalHandler={addGoalHandler}
//             courseGoals={courseGoals} 
//             enteredText={enteredText} 
//             onDeleteItem={onDeleteItem}
//             visible={openGoalModalHandler}
//             closeModal={closeGoalModalHandler}
//           />}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 16,
//   }
// });
