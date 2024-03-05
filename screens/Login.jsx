import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useState } from 'react';
import Svg, { Path } from 'react-native-svg';

const Login = () => {
  // states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAlert = () => {
    console.log(email, password);
  };

  return (
    <View style={styles.login_page}>
      <View style={styles.img_sec}>
        <Image source={require('../assets/login.png')} />
      </View>
      <View style={styles.main}>
        <Text style={styles.main_txt}>Welcome Back !</Text>
        <View style={styles.form_container}>
          <View style={styles.input_container}>
            <TextInput
              style={styles.input}
              placeholder='Email'
              value={email}
              onChangeText={setEmail}
            />
            <Svg
              width={32}
              height={32}
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <Path
                d='M6.4 6.667h19.2c1.32 0 2.4 1.05 2.4 2.333v14c0 1.283-1.08 2.333-2.4 2.333H6.4C5.08 25.333 4 24.283 4 23V9c0-1.283 1.08-2.333 2.4-2.333z'
                stroke='#353A48'
                strokeWidth={1.5}
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <Path
                d='M28 9.067l-12 8.4-12-8.4'
                stroke='#353A48'
                strokeWidth={1.5}
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </Svg>
          </View>

          <View style={styles.input_container}>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder='Password'
              value={password}
              onChangeText={setPassword}
            />
            <Svg
              width={32}
              height={32}
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <Path
                d='M25.333 14.667H6.667A2.667 2.667 0 004 17.333v9.334a2.667 2.667 0 002.667 2.666h18.666A2.667 2.667 0 0028 26.667v-9.334a2.667 2.667 0 00-2.667-2.666zM9.333 14.667V9.333a6.666 6.666 0 1113.334 0v5.334'
                stroke='#353A48'
                strokeWidth={1.5}
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </Svg>
          </View>
        </View>

        <TouchableOpacity onPress={handleAlert} style={styles.btn}>
          <Text style={styles.btn_txt}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login_page: {
    paddingTop: 100,
  },
  main: {
    padding: 40,
  },
  main_txt: {
    fontSize: 50,
    fontWeight: '500',
  },
  form_container: {
    width: '100%',
    paddingRight: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  active: {
    borderBottomWidth: 2,
    borderBottomColor: '#353A48',
  },
  input: {
    padding: 10,
    paddingLeft: 0,
    height: 60,
    fontSize: 18,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 10,
    marginTop: 40,
  },
  btn_txt: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Login;
