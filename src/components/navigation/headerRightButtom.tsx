import React, {FC} from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAuth} from '../../hook/authHook';

const HeaderRightBtn: FC = () => {
  const [isSignOutOpen, setIsSignOutOpen] = React.useState(false);
  const {logout} = useAuth();

  const signOutChangeHandler = () => {
    setIsSignOutOpen(!isSignOutOpen);
  };

  const signOutLog = () => {
    logout();
  };

  return (
    <View>
      <TouchableOpacity onPress={signOutChangeHandler}>
        <Image
          source={require('./../../assets/projectImages/oval.png')}
          style={styles.userLogo}
        />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        visible={isSignOutOpen}
        onRequestClose={signOutChangeHandler}
        transparent={false}>
        <View style={styles.signOutModalContainer}>
          <Text style={styles.signOutModalText}>Sign Out</Text>
          <Button title="Close modal" onPress={signOutLog} />
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
  },
  signOutModalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  signOutModalText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
});
