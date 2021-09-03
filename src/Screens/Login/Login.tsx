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
  Platform,
} from 'react-native';
import {useAuth} from '../../hook/authHook';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('screen');
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
          <KeyboardAvoidingView
            behavior="padding"
            style={styles.loginPage__keyboardAV}>
            <View style={styles.keyboardAV__registration}>
              <View style={styles.keyboardAV__emailInput}>
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
              <View style={styles.keyboardAV__passwordInput}>
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
                <TouchableOpacity style={styles.keyboardAV__forgotBtn}>
                  <Text style={styles.forgotBtn__text}>FORGOT PASSWORD</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.keyboardAV__loginBtnBlock}>
              {counterInput <= 2 ? (
                <Text style={styles.loginBtnBlock__info}>
                  Login: User , Pass: 12345
                </Text>
              ) : null}
              {counterInput === 0 ? (
                <TouchableOpacity
                  style={styles.loginBtnBlock__disabled}
                  disabled={true}>
                  <Text style={styles.loginPage__BtnText}>CAPTCHA</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.loginBtnBlock__dinamic}
                  onPress={LoginCounter}>
                  <Text style={styles.loginPage__BtnText}>LOGIN</Text>
                </TouchableOpacity>
              )}
              {counterInput < 3 ? (
                <Text style={styles.loginBtnBlock__attempts}>
                  You have{' '}
                  <Text style={styles.attempts_counter}>{counterInput} </Text>
                  login attempts
                </Text>
              ) : null}
            </View>
            <View style={styles.keyboardAV__loginWays}>
              <View>
                <Text style={styles.loginWays__info}>
                  Lets test 2 ways to log in
                </Text>
              </View>
              <View style={styles.loginWays__userDefinitionBtn}>
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
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginPage: {
    width,
    height,
  },
  loginPage__loginText: {
    borderBottomWidth: 4,
    borderBottomColor: 'mediumvioletred',
    marginLeft: Platform.OS === 'ios' ? '5%' : '5%',
    width: Platform.OS === 'ios' ? '16%' : '16%',
  },
  loginText: {
    fontSize: 25,
    marginBottom: Platform.OS === 'ios' ? '7%' : '5%',
  },
  loginPage__keyboardAV: {
    flex: 1,
    flexDirection: 'column',
  },
  keyboardAV__registration: {
    flex: 2,
  },
  keyboardAV__emailInput: {
    width: Platform.OS === 'ios' ? '100%' : '100%',
    top: 0.04 * height,
    padding: Platform.OS === 'ios' ? '5%' : '5%',
  },
  emailInput__title: {
    fontSize: 18,
  },
  input: {
    height: 50,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  inputActive: {
    height: 50,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'mediumvioletred',
  },
  keyboardAV__passwordInput: {
    top: Platform.OS === 'ios' ? '8%' : '8%',
    width: Platform.OS === 'ios' ? '100%' : '100%',
    padding: Platform.OS === 'ios' ? '5%' : '5%',
  },
  passwordInput__title: {
    fontSize: 18,
  },
  keyboardAV__forgotBtn: {
    marginTop: Platform.OS === 'ios' ? '5%' : '5%',
    alignSelf: 'flex-end',
  },
  forgotBtn__text: {
    color: 'mediumvioletred',
    fontWeight: 'bold',
  },
  keyboardAV__loginBtnBlock: {
    flex: 2,
    width: Platform.OS === 'ios' ? '100%' : '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: '10%',
  },
  loginBtnBlock__info: {
    fontSize: 14,
    color: 'grey',
  },
  loginBtnBlock__disabled: {
    width: Platform.OS === 'ios' ? '80%' : '80%',
    borderRadius: 20,
    height: 40,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Platform.OS === 'ios' ? '3%' : '3%',
  },
  loginBtnBlock__dinamic: {
    width: Platform.OS === 'ios' ? '80%' : '80%',
    borderRadius: 20,
    height: 40,
    backgroundColor: 'mediumvioletred',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Platform.OS === 'ios' ? '3%' : '3%',
  },
  numberAttemps__text: {
    alignSelf: 'center',
    color: 'grey',
  },
  loginBtnBlock__attempts: {
    color: 'red',
  },
  keyboardAV__loginWays: {
    flex: 1,
  },
  loginWays__info: {
    textAlign: 'center',
  },

  loginPage__BtnText: {
    fontSize: 15,
    color: 'white',
  },

  loginWays__userDefinitionBtn: {
    width,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  userDefinitionBtn__touchId: {
    width: Platform.OS === 'ios' ? '40%' : '40%',
    height: 30,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 30,
    flexDirection: 'row',
    margin: '3%',
  },
  touchId__BtnText: {
    left: 20,
    fontSize: 11,
    color: 'grey',
    alignItems: 'center',
  },
  touchId__BtnIcon: {
    width: 20,
    height: 20,
  },
  userDefinitionBtn__faceId: {
    width: Platform.OS === 'ios' ? '40%' : '40%',
    height: 30,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 30,
    flexDirection: 'row',
    margin: '3%',
  },
  faceId__BtnText: {
    left: 25,
    fontSize: 11,
    color: 'grey',
    alignItems: 'center',
  },
  faceId__BtnIcon: {
    width: 22,
    height: 20,
    left: 15,
  },

  attempts_counter: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  isLoading: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
