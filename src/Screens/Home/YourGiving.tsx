import React from 'react';
import {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';
import {YourGivingImpactType} from '../../../types/homeTypes';
import {useProfile} from '../../hook/profileHook';

const screenWidth = Dimensions.get('screen').width;

const YourGiving = ({
  title,
  subtitle,
  logo,
  photo,
  desription,
  videoContent,
  pause,
}: YourGivingImpactType) => {
  const [mute, setMute] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const {fullName} = useProfile();
  const player = useRef<Video>();
  const onHandlerMute = () => setMute(!mute);
  const onHandlerFullScreen = () => setFullScreen(!fullScreen);

  return (
    <View style={styles.blockGivingImpact}>
      <View style={styles.blockGivingImpact_blockTitle}>
        <Image source={logo} style={styles.blockTitle_avatar} />
        <View style={styles.blockTitle_infoGivingImpact}>
          <Text style={styles.infoGivingImpact_title}>{title}</Text>
          <Text style={styles.infoGivingImpact_activity}>{subtitle}</Text>
        </View>
      </View>
      {videoContent && (
        <View>
          <Video
            source={require('../../assets/video/video.mov')}
            onTouchStart={() => setFullScreen(fullScreen!)}
            fullscreen={fullScreen}
            repeat={true}
            paused={pause}
            muted={mute}
            ref={ref => {
              if (ref) {
                player.current = ref;
              }
            }}
            style={styles.backgroundVideo}
          />
          <View>
            <View style={styles.btn__MuteVideo}>
              {!mute ? (
                <TouchableOpacity onPress={onHandlerMute}>
                  <Image
                    source={require('../../assets/projectImages/play.png')}
                    style={styles.btn__MuteVideo_size}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={onHandlerMute}>
                  <Image
                    source={require('../../assets/projectImages/mute.png')}
                    style={styles.btn__MuteVideo_size}
                  />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.btn__FullScreen}>
              <TouchableOpacity onPress={onHandlerFullScreen}>
                <Image
                  source={require('../../assets/projectImages/fullscreen.png')}
                  style={styles.btn__MuteVideo_fullscreen}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      <View>
        <Image source={photo} style={styles.blockGivingImpact_photo} />
      </View>
      <View style={styles.blockGivingImpact_info}>
        <Text style={styles.blockGivingImpact_info_text}>
          <Text style={styles.blockGivingImpact_nameUser}>{fullName}</Text>,{' '}
          {desription}
        </Text>
      </View>
      <View style={styles.blockGivingImpact__shareBtn}>
        <TouchableOpacity style={styles.blockGivingImpact__shareBtn_dimensions}>
          <Image
            source={require('../../assets/projectImages/shareArrow.png')}
            style={styles.blockGivingImpact__shareBtn_icon}
          />
          <Text style={styles.blockGivingImpact__shareBtn_text}>
            Share to spread the word
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// type Font = 'SFProRounded-Regular' | 'SFProRounded-Bold' | 'SFProRounded-Light';
const styles = StyleSheet.create({
  blockGivingImpact: {
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    fontFamily: 'SFProRounded-Bold',
    marginBottom: 10,
  },
  blockGivingImpact_blockTitle: {
    padding: 10,
    flexDirection: 'row',
  },
  blockTitle_infoGivingImpact: {
    marginLeft: 10,
  },
  blockGivingImpact_nameUser: {
    fontWeight: '600',
  },
  infoGivingImpact_title: {
    // fontWeight: '600',
  },
  blockTitle_avatar: {
    width: 40,
    height: 40,
  },
  infoGivingImpact_activity: {
    // fontSize: 12,
    color: 'grey',
    fontFamily: 'SFProRounded-Light',
  },
  backgroundVideo: {
    width: '100%',
    height: Platform.OS === 'ios' ? 220 : '40%',
  },
  btn__MuteVideo: {
    position: 'absolute',
    bottom: 20,
    right: '3%',
    opacity: 0.6,
  },
  btn__MuteVideo_size: {
    height: 20,
    width: 20,
  },
  btn__FullScreen: {
    position: 'absolute',
    bottom: 20,
    right: '90%',
    opacity: 0.6,
  },
  btn__MuteVideo_fullscreen: {
    height: 20,
    width: 20,
  },
  blockGivingImpact_photo: {
    width: '100%',
  },
  blockGivingImpact_info: {
    padding: 10,
  },
  // blockGivingImpact_info_text: {
  //   fontFamily: 'SFProRounded-Light',
  // } as {fontFamily: Font},
  blockGivingImpact_info_text: {
    fontFamily: 'SFProRounded-Light',
  },
  blockGivingImpact__shareBtn: {alignItems: 'center', marginBottom: 10},
  blockGivingImpact__shareBtn_dimensions: {
    backgroundColor: 'mediumvioletred',
    flexDirection: 'row',
    width: screenWidth * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
  },
  blockGivingImpact__shareBtn_icon: {width: 15, height: 15, marginRight: 10},
  blockGivingImpact__shareBtn_text: {color: 'white'},
});

export default YourGiving;
