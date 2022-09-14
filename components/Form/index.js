import React, {useState, useTate} from 'react'
import {Text, View, TextInput, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import styles from './style';

const Form = (progs) => {
    const [task, setTask] = useState('')
    function handleAddTask () { 
        if (task.length === 0) { 
            alert ("Please input your task!");
            return false;
        }
        progs.onAddTask(task);
        setTask('');
        Keyboard.dismiss();
    }
    return (
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
       keyboardVerticalOffset = {13}
       style = {styles.addTask}> 
        <TextInput 
        value = {task}
            onChangeText={text => setTask(text)}
            placeholder = "Input your task" 
            style = {styles.input}
        />
        <TouchableOpacity onPress = {handleAddTask} >
            <View style = {styles.iconButton}> 
                <Text style = {styles.icon}>+</Text>
            </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
}

export default Form;