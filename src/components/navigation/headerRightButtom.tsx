import React, {FC} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAuth} from '../../hook/authHook';
import {useProfile} from '../../hook/profileHook';

const HeaderRightBtn: FC = ({navigation}: any) => {
  const [isSignOutOpen, setIsSignOutOpen] = React.useState(false);
  const {logout} = useAuth();
  const {fullName, userPhoto} = useProfile();

  const signOutChangeHandler = () => {
    setIsSignOutOpen(!isSignOutOpen);
  };

  const signOutLog = () => {
    signOutChangeHandler();
    logout();
  };

  const openUserProfile = () => {
    navigation.navigate('Proffile', {
      info: null,
      name: fullName,
    });
    signOutChangeHandler();
  };

  return (
    <View>
      <TouchableOpacity onPress={signOutChangeHandler}>
        <Image source={{uri: userPhoto}} style={styles.userLogo} />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        visible={isSignOutOpen}
        onRequestClose={signOutChangeHandler}
        transparent={false}>
        <View style={styles.signOutModalContainer}>
          <View style={styles.signOut__userView}>
            <Image
              source={{uri: userPhoto}}
              style={styles.ignOutModal__userLogo}
            />
            <Text style={styles.signOutModalText}>{fullName}</Text>
          </View>
          <TouchableOpacity
            style={styles.settingsProfile}
            onPress={openUserProfile}>
            <Text style={styles.settingsProfile__text}>Your profile data</Text>
            <Image
              source={require('../../assets/projectImages/profileData.png')}
              style={styles.settingsProfile__icon}
            />
          </TouchableOpacity>
          <View style={styles.signOut__actionBtn}>
            <TouchableOpacity
              onPress={signOutChangeHandler}
              style={styles.signOut__actionBtn_close}>
              <Text style={styles.actionBtn_closeBtn_text}>
                Close Modal Window
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={signOutLog}
              style={styles.signOut__actionBtn_exit}>
              <Text style={styles.actionBtn_exitBtn_text}>Exit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HeaderRightBtn;

const styles = StyleSheet.create({
  userLogo: {
    width: 30,
    height: 30,
    marginRight: 20,
    borderRadius: 100,
  },
  signOutModalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  signOut__actionBtn: {
    flex: 1,
    alignItems: 'center',
  },
  signOutModalText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
  settingsProfile: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsProfile__icon: {
    width: 40,
    height: 40,
  },
  settingsProfile__text: {
    fontFamily: 'SFProRounded-Bold',
    paddingRight: '5%',
  },
  signOut__userView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 40,
    flex: 2,
  },
  ignOutModal__userLogo: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  signOut__actionBtn_close: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    height: '20%',
    width: 150,
    borderRadius: 20,
    margin: 10,
  },
  signOut__actionBtn_exit: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'mediumvioletred',
    height: '20%',
    width: 150,
    borderRadius: 20,
  },
  actionBtn_closeBtn_text: {
    fontFamily: 'SFProRounded-Light',
    color: 'white',
  },
  actionBtn_exitBtn_text: {
    fontFamily: 'SFProRounded-Light',
    color: 'white',
  },
});
