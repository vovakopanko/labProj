import React, {FC, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  TextInput,
} from 'react-native';
import {useAuth} from '../../hook/authHook';

// type DataType = Record<string, string | null>;

const ProfileScreen: FC = () => {
  const [update, setUpdate] = useState(true);
  //   const [infoUserData, setInfoUserData] = useState<DataType>({
  //     userName: 'User',
  //     bithdayDate: null,
  //   });
  const {name} = useAuth();

  const [nameActive, setNameActive] = useState(false);
  const [dateActive, setDateActive] = useState(false);

  return (
    <View>
      {update ? (
        // Show profile Part--------------------------------------------
        <View style={styles.content__aboutUser}>
          <View style={styles.userPhoto__block}>
            <Image
              source={require('./../../assets/projectImages/oval.png')}
              style={styles.userPhoto}
            />
          </View>
          <View style={styles.userName__block}>
            <View style={styles.userName__title}>
              <Text>YourName :</Text>
            </View>
            <Text style={styles.userName__data}>{name}</Text>
          </View>
          <View style={styles.userBirthDate__block}>
            <View style={styles.userBirthDate__title}>
              <Text>Data Bithday :</Text>
            </View>

            <Text style={styles.userBirthDate__date}>9 fefrary 1994</Text>
          </View>
          <View style={styles.aboutUser__btn}>
            <TouchableOpacity
              onPress={() => setUpdate(!update)}
              style={styles.aboutUser__btn_design}>
              <Text style={styles.aboutUser__btn_text}>Edit profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        // Edit Part--------------------------------------------
        <View style={styles.content__updateDataUser}>
          <View style={styles.updateDataUser__PhotoBlock}>
            <Image
              source={require('./../../assets/projectImages/oval.png')}
              style={styles.photoBlock__userPhoto}
            />
            <TouchableOpacity
              onPress={() => Alert.alert('Change photo!')}
              style={styles.photoBlock__changeUserPhoto}>
              <Text style={styles.changeUserPhoto_text}>Update photo</Text>
              <Image
                source={require('../../assets/projectImages/updatePhoto.png')}
                style={styles.changeUserPhoto_icon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.updateDataUser__inputBloc}>
            <View style={styles.inputBlock__changeName}>
              <View style={styles.inputBlock__changeName_text}>
                <Text>Your Name:</Text>
              </View>

              <TextInput
                style={
                  nameActive
                    ? styles.inputBlock__changeName_input
                    : styles.inputBlock__changeName_inputActive
                }
                placeholder={'Your current name'}
                onFocus={() => {
                  setNameActive(true);
                }}
                onBlur={() => {
                  setNameActive(false);
                }}
              />
            </View>
            <View style={styles.inputBlock__changeName}>
              <View style={styles.inputBlock__changeName_text}>
                <Text>Date Bithday:</Text>
              </View>
              <TextInput
                style={
                  dateActive
                    ? styles.inputBlock__changeName_input
                    : styles.inputBlock__changeName_inputActive
                }
                placeholder={'Your Data'}
                onFocus={() => {
                  setDateActive(true);
                }}
                onBlur={() => {
                  setDateActive(false);
                }}
              />
            </View>
          </View>

          <View style={styles.updateDataUser__btn}>
            <TouchableOpacity
              onPress={() => Alert.alert('You Chamge your Profile')}
              style={styles.updateDataUser__btn_design}>
              <Text style={styles.updateDataUser__btn_text}>
                {' '}
                Apply Update{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setUpdate(!update)}
              style={styles.updateDataUser__btn_design}>
              <Text style={styles.updateDataUser__btn_text}> Cansel </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content__aboutUser: {},
  userPhoto: {
    margin: '5%',
    width: 120,
    height: 150,
    overflow: 'hidden',
  },
  userPhoto__block: {
    alignItems: 'center',
  },
  userName__block: {
    flexDirection: 'row',
  },
  userName__title: {
    width: '50%',
    alignItems: 'flex-end',
    paddingRight: '5%',
  },
  userName__data: {
    fontWeight: 'bold',
    width: '50%',
  },
  userBirthDate__block: {
    flexDirection: 'row',
  },
  userBirthDate__title: {
    width: '50%',
    alignItems: 'flex-end',
    paddingRight: '5%',
  },
  userBirthDate__date: {
    fontWeight: 'bold',
    width: '50%',
  },
  aboutUser__btn: {
    alignItems: 'center',
  },
  aboutUser__btn_design: {
    padding: 15,
    width: '35%',
    borderRadius: 30,
    marginTop: '10%',
    backgroundColor: 'mediumvioletred',
    alignItems: 'center',
  },
  aboutUser__btn_text: {
    color: 'white',
  },
  //-----------------------
  content__updateDataUser: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  updateDataUser__PhotoBlock: {},
  photoBlock__userPhoto: {
    margin: '5%',
    width: 120,
    height: 150,
    overflow: 'hidden',
  },
  photoBlock__changeUserPhoto: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'mediumvioletred',
    height: 40,
    borderRadius: 20,
    flexDirection: 'row',
  },
  changeUserPhoto_text: {
    fontFamily: 'SFProRounded-Light',
    color: 'white',
    fontWeight: '400',
    paddingRight: 20,
    paddingLeft: 20,
  },
  changeUserPhoto_icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  updateDataUser__inputBloc: {
    paddingTop: '20%',
  },
  inputBlock__changeName: {
    flexDirection: 'row',
  },
  inputBlock__changeName_text: {
    width: '40%',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  inputBlock__changeName_input: {
    width: '40%',
    height: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  inputBlock__changeName_inputActive: {
    width: '40%',
    height: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'mediumvioletred',
  },
  updateDataUser__btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  updateDataUser__btn_design: {
    padding: 10,
    margin: '2%',
    width: '35%',
    borderRadius: 30,
    backgroundColor: 'mediumvioletred',
    alignItems: 'center',
  },
  updateDataUser__btn_text: {
    color: 'white',
  },
});

export default ProfileScreen;
