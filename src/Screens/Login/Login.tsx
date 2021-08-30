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
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
type loginDataType = Record<string, string | null>;

const LoginScreen: FC = () => {
  const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);
  const [loginData, setLoginData] = useState<loginDataType>({
    login: null,
    password: null,
  });

  const inputHandler = (text: string, name: string) => {
    setLoginData({...loginData, [name]: text});
    console.log(loginData.login);
    console.log(loginData.password);
  };

  return (
    <SafeAreaView>
      <View style={styles.loginPage}>
        <View style={styles.loginPage__loginText}>
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View style={styles.loginPage__emailInput}>
          <Text style={styles.emailInput__title}>Email</Text>
          <TextInput
            style={!emailActive ? styles.input : styles.inputActive}
            placeholder="Your email address"
            onChangeText={email => inputHandler(email, 'login')}
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
          />
          <TouchableOpacity style={styles.loginPage__forgotBtn}>
            <Text style={styles.forgotBtn__text}>FORGOT PASSWORD</Text>
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.loginPage__loginBtn}>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginPage__BtnText}>LOGIN</Text>
          </TouchableOpacity>
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
  },
});