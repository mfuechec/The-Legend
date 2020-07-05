import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native';

const Login = () => {

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [selected, setSelected] = useState('Login');
    let [text, setText] = useState(`Don't have an account? Sign up`);

    const submit = () => {
        if (selected === 'Login') {
            props.login({username: username, password:password});
        } else {
            props.signup({username: username, password:password});
        }
    }

    const toggle = () => {
        if (selected === 'Login') {
            setSelected('Sign up');
            setText(`Already have an account? Login`)
        } else {
            setSelected('Login');
            setText(`Don't have an account? Sign up`);
        }
    }

    return (
        <View style={styles.login}>
            <TextInput style={styles.username} onChangeText={(text)=>{setUsername(text)}} placeholder='username' placeholderTextColor='black' />
            <TextInput style={styles.password} onChangeText={(text)=>{setPassword(text)}} placeholder='password' placeholderTextColor='black' />
            <TouchableOpacity style={styles.button} onPress={submit}><Text style={styles.text}>{selected}</Text></TouchableOpacity>
            <Text style={styles.text} onPress={toggle}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        height: '30%',
        width: '80%',
        marginTop: '20%'
    },
    username: {
        backgroundColor: '#c4c4c4',
        height: '25%',
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 25,
        paddingLeft: '5%'
    },
    password: {
        marginTop: '5%',
        backgroundColor: '#c4c4c4',
        height: '22.5%',
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 25,
        paddingLeft: '5%'
    },
    button: {
        backgroundColor: 'grey',
        width: '40%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '5%',
        height: '20%',
        borderRadius: 25
    }, 
    text: {
        textAlign: 'center',
        marginTop: '6%'
    }
})

export default Login;