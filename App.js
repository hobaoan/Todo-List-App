import React, {useState, useTate} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TouchableOpacity, ScrollView, processColor } from 'react-native';
import Task from './components/Task';
import styles from './App.components.styles'
import Form from './components/Form';

export default function App() {
  const [taskList, setTaskList] = useState([])
  function handleAddTask (task) { 
    setTaskList([...taskList, task]);
  }
  function handleDeleteTask (index) { 
    Alert.alert(
      "Notice",
      "Do you want to delete your task?",
      [
        {
          text: "Delete",
          onPress: () => {
            let temp = [...taskList];
            temp.splice(index,1);
            setTaskList(temp);
          }
        },
        { text: "Cancle", onPress: () => {}}
      ]
    );
  }
  return (
    <View style = {styles.container}>
      <View style = {styles.body}>
        <Text style = {styles.header}> Todo List </Text>
        <ScrollView>
          {
            taskList.map((item, index) => { 
              return <Task key = {index} title = {item} number = {index+1} 
              onDeleteTask = {() => handleDeleteTask(index)}/>
            })
          }
        </ScrollView>
      </View>
        <Form onAddTask = {handleAddTask}/>
    </View>
  );
}

