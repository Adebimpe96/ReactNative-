import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="My course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color='#b180f0' />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color='#f31282' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

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
    color:'#120438',
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
    marginHorizontal: 8
  }
});

// import { View, Modal, TextInput, Button, StyleSheet } from 'react-native';

// function GoalInput({ goalInputHandler, addGoalHandler, enteredText, isVisible, closeModal }) {
//   return (
//     <Modal visible={isVisible} animationType="slide">
//       <View style={styles.inputContainer}>
//       <TextInput 
//       style={styles.textInputStyle}
//       placeholder='My Course Goals!' 
//       onChangeText={goalInputHandler} 
//       value={enteredText}
//       />
//       <View style={styles.buttonContainer}>
//         <View style={styles.button}>
//           <Button title='Add Goals' onPress={addGoalHandler} />
//         </View>
//         <View>
//           <Button title='Close' onPress={closeModal} />
//         </View>
//       </View>
//       </View>
//     </Modal>
//   )
// }
// export default GoalInput;

// const styles = StyleSheet.create({
//   inputContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 24,
//     padding: 16,
//     borderBottomWidth: 2,
//     borderBottomColor: '#cccccc',
//     flex: 1,
//   },
//   textInputStyle : {
//     borderWidth: 1,
//     borderColor: '#cccccc',
//     width: '100%',
//     padding: 8,
//   },
//   buttonContainer : {
//     flexDirection: "row",
//     marginTop: 16,
//   },
//   button : {
//     width: 100,
//     marginHorizontal: 8,
//   }
// });
