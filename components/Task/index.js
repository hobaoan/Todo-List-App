import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style';

const Task = (progs) => {
  const { number } = progs
  var numberText = number
  if (number < 10) {
    numberText = `0${number}`;
  } else {
    numberText = number;
  }
  return (
    <TouchableOpacity onPress={progs.onDeleteTask}>
      <View style={styles.item}>
        <View style={styles.square}>
          <Text style={styles.number}>{numberText}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.textContent}>{progs.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
//HoKhung tutorial a++ 
export default Task;
