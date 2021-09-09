import React, {FC, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {useProfile} from '../../hook/profileHook';
import ImagePicker from 'react-native-image-crop-picker';
import DateTimePicker from './DateTimePicker';

type DataType = Record<string, string | undefined>;

const ProfileScreen: FC = () => {
  const {fullName, dateBirth, updateUserInfo, updateUserPhoto, userPhoto} =
    useProfile();
  const [update, setUpdate] = useState(true);
  const [nameActive, setNameActive] = useState(false);
  const [infoUserData, setInfoUserData] = useState<DataType>({
    userName: fullName,
    bithdayDate: dateBirth,
  });
  const [image, setImage] = useState(userPhoto);

  const inputHandler = (text: string | undefined, nameUser: string) => {
    setInfoUserData({...infoUserData, [nameUser]: text});
  };
  const [open, setOpen] = useState(false);
  const openDatePicker = () => setOpen(true);

  const applyUpdateUserInfo = () => {
    updateUserInfo(infoUserData.userName, infoUserData.bithdayDate);
    setUpdate(!update);
    setNameActive(false);
    updateUserPhoto(image);
  };
  const canselUpdateUserInfo = () => {
    setUpdate(!update);
    setNameActive(false);
  };

  const updatePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      multiple: false,
    }).then(images => {
      console.log(images);
      if (images.sourceURL) {
        setImage(images.sourceURL);
      }
    });
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(images => {
      console.log(images);
    });
  };

  return (
    <View>
      {update ? (
        // Show profile Part--------------------------------------------
        <View style={styles.content__aboutUser}>
          <View style={styles.userPhoto__block}>
            <Image source={{uri: image}} style={styles.userPhoto} />
          </View>
          <View style={styles.userName__block}>
            <View style={styles.userName__title}>
              <Text>YourName :</Text>
            </View>
            <Text style={styles.userName__data}>{infoUserData.userName}</Text>
          </View>
          <View style={styles.userBirthDate__block}>
            <View style={styles.userBirthDate__title}>
              <Text>Data Bithday :</Text>
            </View>

            <Text style={styles.userBirthDate__date}>{dateBirth}</Text>
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
            <Image source={{uri: image}} style={styles.photoBlock__userPhoto} />
            <TouchableOpacity
              onPress={updatePhotoFromLibrary}
              style={styles.photoBlock__changeUserPhoto}>
              <Text style={styles.changeUserPhoto_text}>Update photo</Text>
              <Image
                source={require('../../assets/projectImages/updatePhoto.png')}
                style={styles.changeUserPhoto_icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={takePhotoFromCamera}
              style={styles.photoBlock__takeUserPhoto}>
              <Text style={styles.changeUserPhoto_text}>Take photo</Text>
              <Image
                source={require('../../assets/projectImages/camera.png')}
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
                placeholder={fullName}
                onFocus={() => {
                  setNameActive(true);
                }}
                onBlur={() => {
                  setNameActive(false);
                }}
                onChangeText={userName => inputHandler(userName, 'userName')}
                value={infoUserData.userName}
              />
            </View>
            <View style={styles.inputBlock__changeName}>
              <View style={styles.inputBlock__changeName_text}>
                <Text>Date Bithday:</Text>
              </View>
              <TouchableOpacity onPress={openDatePicker}>
                <Text>{infoUserData.bithdayDate}</Text>
              </TouchableOpacity>
              <DateTimePicker
                inputHandler={inputHandler}
                open={open}
                setOpen={setOpen}
              />
            </View>
          </View>

          <View style={styles.updateDataUser__btn}>
            <TouchableOpacity
              onPress={applyUpdateUserInfo}
              style={styles.updateDataUser__btn_design}>
              <Text style={styles.updateDataUser__btn_text}>Apply Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={canselUpdateUserInfo}
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
    width: 150,
    height: 150,
    overflow: 'hidden',
    borderRadius: 100,
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
    backgroundColor: '#c71585',
    alignItems: 'center',
  },
  aboutUser__btn_text: {
    color: '#ffffff',
  },
  content__updateDataUser: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  updateDataUser__PhotoBlock: {},
  photoBlock__userPhoto: {
    margin: '5%',
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  photoBlock__changeUserPhoto: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c71585',
    height: 40,
    borderRadius: 20,
    flexDirection: 'row',
  },
  changeUserPhoto_text: {
    fontFamily: 'SFProRounded-Light',
    color: '#ffffff',
    fontWeight: '400',
    marginRight: 20,
    marginLeft: 20,
  },
  changeUserPhoto_icon: {
    width: 20,
    height: 20,
  },
  photoBlock__takeUserPhoto: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c71585',
    height: 40,
    borderRadius: 20,
    flexDirection: 'row',
    marginTop: 10,
  },
  updateDataUser__inputBloc: {
    paddingTop: '20%',
  },
  inputBlock__changeName: {
    flexDirection: 'row',
    paddingBottom: 10,
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
    borderBottomColor: '#c71585',
  },
  inputBlock__changeName_inputActive: {
    width: '40%',
    height: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
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
    backgroundColor: '#c71585',
    alignItems: 'center',
  },
  updateDataUser__btn_text: {
    color: '#ffffff',
  },
});

export default ProfileScreen;
