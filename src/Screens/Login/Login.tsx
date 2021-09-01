import React, {FC, useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {useAuth} from '../../hook/authHook';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
type loginDataType = Record<string, string | null>;

const LoginScreen: FC = () => {
  const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);
  const [loginData, setLoginData] = useState<loginDataType>({
    userName: ' ',
    password: null,
  });
  const [counterInput, setCounterInput] = useState(3);
  const {login} = useAuth();

  const inputHandler = (text: string, name: string) => {
    setLoginData({...loginData, [name]: text});
  };

  const loginHandler = async (
    userName: string | null,
    password: string | null,
  ) => {
    let userToken = null;
    if (userName === 'User' && password === '12345') {
      try {
        userToken = 'iTechArt2021';
        await AsyncStorage.setItem('userToken', userToken);
      } catch (e) {
        console.log(e);
      }
    }
    login(userToken, userName);
  };

  const LoginCounter = () => {
    // setCounterInput(prev => prev - 1);
    setTimeout(() => {
      setCounterInput(prev => prev - 1);
      //Add disabled button
    }, 1000);
    loginHandler(loginData.userName, loginData.password);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.loginPage}>
          <View style={styles.loginPage__loginText}>
            <Text style={styles.loginText}>Login</Text>
          </View>
          <View style={styles.loginPage__emailInput}>
            <Text style={styles.emailInput__title}>Email</Text>
            <TextInput
              style={!emailActive ? styles.input : styles.inputActive}
              placeholder="Your email address"
              onChangeText={userName => inputHandler(userName, 'userName')}
              onFocus={() => {
                setEmailActive(true);
              }}
              onBlur={() => {
                setEmailActive(false);
              }}
              maxLength={50}
              clearTextOnFocus={true}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.loginPage__passwordInput}>
            <Text style={styles.passwordInput__title}>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={!passwordActive ? styles.input : styles.inputActive}
              placeholder="Password"
              onChangeText={password => inputHandler(password, 'password')}
              onFocus={() => {
                setPasswordActive(true);
              }}
              onBlur={() => {
                setPasswordActive(false);
              }}
              clearTextOnFocus={true}
            />
            <TouchableOpacity style={styles.loginPage__forgotBtn}>
              <Text style={styles.forgotBtn__text}>FORGOT PASSWORD</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.info}>Login: User , Pass: 12345</Text>
          <KeyboardAvoidingView
            behavior="padding"
            style={styles.loginPage__loginBtn}>
            {counterInput === 0 ? (
              <TouchableOpacity
                style={styles.loginBtn_Dissabled}
                disabled={true}>
                <Text style={styles.loginPage__BtnText}>CAPTCHA</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.loginBtn} onPress={LoginCounter}>
                <Text style={styles.loginPage__BtnText}>LOGIN</Text>
              </TouchableOpacity>
            )}

            {counterInput < 3 ? (
              <Text style={styles.attempts}>
                You have{' '}
                <Text style={styles.attempts_counter}>{counterInput} </Text>
                login attempts
              </Text>
            ) : null}
          </KeyboardAvoidingView>
          <View style={styles.loginPage__numberAttemps}>
            <Text style={styles.numberAttemps__text}>
              Lets test 2 ways to log in
            </Text>
          </View>
          <View style={styles.loginPage__userDefinitionBtn}>
            <TouchableOpacity style={styles.userDefinitionBtn__touchId}>
              <Image
                source={require('./../../assets/projectImages/touchId.png')}
                style={styles.touchId__BtnIcon}
              />
              <Text style={styles.touchId__BtnText}>Touch ID</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userDefinitionBtn__faceId}>
              <Image
                source={require('./../../assets/projectImages/faceId.png')}
                style={styles.faceId__BtnIcon}
              />
              <Text style={styles.faceId__BtnText}>Face ID</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginPage: {
    width: screenWidth,
    height: screenHeight,
    position: 'relative',
  },
  loginPage__loginText: {
    position: 'absolute',
    borderBottomWidth: 4,
    borderBottomColor: 'mediumvioletred',
    top: 0.03 * screenHeight,
    marginLeft: 30,
  },
  loginText: {
    fontSize: 25,
    marginBottom: 5,
  },
  loginPage__emailInput: {
    position: 'absolute',
    width: '100%',
    top: 0.08 * screenHeight,
    padding: 30,
  },
  emailInput__title: {
    fontSize: 18,
  },
  input: {
    height: 60,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  inputActive: {
    height: 60,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'mediumvioletred',
  },
  loginPage__passwordInput: {
    position: 'absolute',
    top: 0.2 * screenHeight,
    width: '100%',
    padding: 30,
    display: 'flex',
  },
  passwordInput__title: {
    fontSize: 18,
  },
  loginPage__forgotBtn: {
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  forgotBtn__text: {
    color: 'mediumvioletred',
    fontWeight: 'bold',
  },
  loginPage__loginBtn: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    bottom: 0.25 * screenHeight,
  },
  loginPage__numberAttemps: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    bottom: 0.18 * screenHeight,
  },
  numberAttemps__text: {
    alignSelf: 'center',
    color: 'grey',
  },
  loginBtn: {
    width: '90%',
    borderRadius: 20,
    height: 40,
    backgroundColor: 'mediumvioletred',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  loginBtn_Dissabled: {
    width: '90%',
    borderRadius: 20,
    height: 40,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  loginPage__BtnText: {
    fontSize: 15,
    color: '#fff',
  },
  loginPage__userDefinitionBtn: {
    width: screenWidth,
    position: 'absolute',
    height: 65,
    top: 0.8 * screenHeight,
  },
  userDefinitionBtn__touchId: {
    width: 0.4 * screenWidth,
    height: 30,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 30,
    position: 'absolute',
    left: 30,
    top: 40,
    flexDirection: 'row',
  },
  touchId__BtnText: {
    top: 3,
    left: 20,
    fontSize: 11,
    color: 'grey',
  },
  touchId__BtnIcon: {
    width: 20,
    height: 20,
    left: 10,
  },
  userDefinitionBtn__faceId: {
    width: 0.4 * screenWidth,
    height: 30,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 30,
    position: 'absolute',
    right: 30,
    top: 40,
    flexDirection: 'row',
  },
  faceId__BtnText: {
    left: 25,
    top: 3,
    fontSize: 11,
    color: 'grey',
  },
  faceId__BtnIcon: {
    width: 22,
    height: 20,
    left: 15,
  },
  info: {
    fontSize: 12,
    color: 'grey',
    marginTop: 450,
    alignSelf: 'center',
  },
  attempts: {
    color: 'red',
  },
  attempts_counter: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
