import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    padding: 4,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});

// import { View, Text, StyleSheet, Pressable } from "react-native";

// function GoalItem({text, onDeleteItem, id}) {
//   return (
//         <Pressable 
//           onPress={onDeleteItem.bind(this, id)} 
//           android_ripple={{color: '#5e0acc'}} 
//           style={({pressed}) => pressed && styles.pressedItem}>
//             <View style={styles.goalListStyle}>
//               <Text style={styles.goalTextStyle}>{text}</Text>
//             </View>
//         </Pressable>
//   )
// }
// export default GoalItem;

// const styles = StyleSheet.create({
//   goalListStyle : {
//     margin: 8,
//     backgroundColor: '#5e0acc',
//     color: '#cccccc',
//     borderRadius: 6,
//   },
//   pressedItem : {
//     opacity: 0.5,
//     backgroundColor: '#cccccc'
//   },

//   goalTextStyle : {
//     color: '#cccccc',
//   },
// });