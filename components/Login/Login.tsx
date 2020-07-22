import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text, Dimensions} from 'react-native';
import {Input, Button} from 'react-native-elements';

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

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
            <Input containerStyle={styles.input} value={username} onChangeText={(text)=>{setUsername(text)}} placeholder='username' />
            <Input containerStyle={styles.input} value={password} onChangeText={(text)=>{setPassword(text)}} placeholder='password' />
            <Button style={styles.button} title={selected} onPress={submit}></Button>
            <Text style={styles.text} onPress={toggle}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        width: width,
        position: 'absolute',
        top: height/2,
        height: height/2,
        alignItems: 'center'
    },
    input: {
        width: width/2
    },
    button: {},
    text: {
        textAlign: 'center',
        marginTop: '6%'
    }
})

export default Login;