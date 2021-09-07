import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Video from 'react-native-video';
import {useProfile} from '../../hook/profileHook';

const screenWidth = Dimensions.get('screen').width;

export type ActionsUser = {
  name: string;
  info: string;
  icon: null | ImageSourcePropType;
  cash: number;
  navigation: any;
};

type ArrayInfoType = {
  id: number;
  name: string;
  icon: null | ImageSourcePropType;
  info: string;
  cash: number;
};

type ArrayYourGivingImpactType = {
  id: number;
  title: string;
  subtitle: string;
  logo: ImageSourcePropType;
  photo: ImageSourcePropType;
  desription: string;
  videoContent: boolean;
};

type YourGivingImpactType = {
  title: string;
  subtitle: string;
  logo: ImageSourcePropType;
  photo: ImageSourcePropType;
  desription: string;
  videoContent: boolean;
  pause: boolean;
};

const arrayInfo: ArrayInfoType[] = [
  {
    id: 1,
    name: 'Checking',
    icon: null,
    cash: 1500.2,
    info: 'Main account (...0353)',
  },
  {
    id: 2,
    name: 'Saving',
    icon: null,
    cash: 5000.2,
    info: 'Buy a house (...4044)',
  },
  {
    id: 3,
    name: 'Goodness',
    icon: require('./../../assets/projectImages/heart.png'),
    cash: 500.4,
    info: 'Cash Rewards',
  },
];

const arrayYourGiving: ArrayYourGivingImpactType[] = [
  {
    id: 1,
    title: 'Your Giving Impact',
    subtitle: 'St Jude * 3 hrs ago',
    logo: require('./../../assets/projectImages/avatar.png'),
    photo: require('./../../assets/projectImages/rectangle2.png'),
    desription:
      'Your donation helped 2 amazing kids get much needed cancer surgery, thanks for being amazing!',
    videoContent: false,
  },
  {
    id: 2,
    title: 'Your Giving Impact (Video informing)',
    subtitle: 'St Jude * 5 hrs ago',
    logo: require('../../assets/projectImages/avatar.png'),
    photo: require('../../assets/video/video.mov'),
    desription:
      'Your donation helped group amazing kids get much needed cancer surgery, thanks for being amazing!',
    videoContent: true,
  },
  {
    id: 3,
    title: 'Your Giving Impact',
    subtitle: 'St Jude * 2 days ago',
    logo: require('../../assets/projectImages/avatar.png'),
    photo: require('../../assets/projectImages/rectangle.png'),
    desription:
      'Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing!',
    videoContent: false,
  },
];

const ActionsUser = ({name, info, cash, navigation, icon}: ActionsUser) => {
  let val: Array<string> = [];
  val = cash.toFixed(2).split('.');
  return (
    <TouchableHighlight
      activeOpacity={0.3}
      underlayColor="lightgrey"
      onPress={() =>
        navigation.navigate(`${name}`, {
          info: info,
          name: name,
        })
      }>
      <View style={styles.overView_actionsUser}>
        <View style={styles.actionsUser_Info}>
          <View style={styles.actionsUser_name}>
            <Text style={styles.actionsUser_nameTitle}>{name}</Text>
            {icon ? (
              <Image source={icon} style={styles.actionsUser_icon} />
            ) : null}
          </View>
          <Text style={styles.actionsUser_card}>{info}</Text>
        </View>
        <View style={styles.overView_providedCash}>
          <Text style={styles.providedCash_count}>
            $<Text>{val[0]}.</Text>
            <Text style={styles.numberAfterPoin}>{val[1]}</Text>
          </Text>
          <Image
            source={require('../../assets/projectImages/chevron.png')}
            style={styles.actionsUser__chevron}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

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
      {videoContent ? (
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
      ) : null}
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

function HomeScreen({navigation}: any) {
  const [pause, setPause] = useState(true);

  const {fullName} = useProfile();
  const total = arrayInfo
    .map(s => s.cash)
    .reduce((sum, current) => sum + current);
  let totalCash: Array<string> = [];
  totalCash = total.toFixed(2).split('.');
  const currentTime = new Date();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handleScroll = (event: any) => {
    const positionY = event.nativeEvent.contentOffset.y;
    if (positionY >= 0 && positionY < 399) {
      setPause(true);
    } else if (positionY >= 400 && positionY <= 600) {
      setPause(false);
    } else if (positionY > 601) {
      setPause(true);
    }
  };
  return (
    <View style={styles.homePage}>
      <FlatList
        ListHeaderComponent={
          <View>
            <View style={styles.homePage_greetingUser}>
              <Text style={styles.homePage_titleGreating}>
                {currentTime.getHours() < 11
                  ? `Good Morning ${fullName} `
                  : currentTime.getHours() >= 11 && currentTime.getHours() < 17
                  ? `Good Afternoon ${fullName} `
                  : currentTime.getHours() >= 17 && currentTime.getHours() <= 22
                  ? `Good Evening ${fullName} `
                  : currentTime.getHours() > 22 && currentTime.getHours() <= 5
                  ? `Good Night ${fullName} `
                  : `Good Morning ${fullName} `}
                |{' '}
                {'Today: ' +
                  currentTime.getDate() +
                  ' ' +
                  monthNames[currentTime.getMonth()] +
                  ', ' +
                  currentTime.getUTCFullYear()}
              </Text>
            </View>
            <View style={styles.homePage_overView}>
              <Text style={styles.overView_title}>Account Overview </Text>
              <Text style={styles.overView_totalCash}>
                <Text>${totalCash[0]}.</Text>
                <Text style={styles.numberAfterPoin}>{totalCash[1]}</Text>
              </Text>
              <Text style={styles.overView_subTitle}>Total Available cash</Text>
              <FlatList
                data={arrayInfo}
                renderItem={({item}) => (
                  <ActionsUser
                    name={item.name}
                    info={item.info}
                    cash={item.cash}
                    icon={item.icon}
                    navigation={navigation}
                  />
                )}
              />
            </View>
          </View>
        }
        data={arrayYourGiving}
        initialNumToRender={3}
        onScroll={handleScroll}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <YourGiving
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            logo={item.logo}
            photo={item.photo}
            desription={item.desription}
            videoContent={item.videoContent}
            pause={pause}
          />
        )}
        keyExtractor={(item): any => item.id}
      />
    </View>
  );
}

// type Font = 'SFProRounded-Regular' | 'SFProRounded-Bold' | 'SFProRounded-Light';

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: 10,
  },
  homePage_titleGreating: {
    fontFamily: 'SFProRounded-Regular',
    color: 'grey',
  },
  homePage_greetingUser: {
    marginBottom: 10,
  },
  homePage_overView: {
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    marginBottom: 20,
  },
  overView_title: {
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 20,
    fontFamily: 'SFProRounded-Bold',
  },
  overView_totalCash: {
    textAlign: 'center',
    fontFamily: 'SFProRounded-Bold',
    fontWeight: '400',
    fontSize: 24,
    paddingTop: 5,
  },
  overView_subTitle: {
    textAlign: 'center',
    // fontWeight: '200',
    color: 'grey',
    fontSize: 12,
    marginBottom: 20,
  },
  overView_actionsUser: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
    flexDirection: 'row',
  },
  actionsUser_Info: {
    alignItems: 'flex-start',
    width: '40%',
  },
  actionsUser_name: {
    flexDirection: 'row',
  },
  actionsUser_nameTitle: {
    fontWeight: '400',
    paddingLeft: 10,
    paddingRight: 5,
    fontFamily: 'SFProRounded-Bold',
  },

  actionsUser_card: {
    fontWeight: '400',
    paddingLeft: 10,
    color: 'grey',
    fontFamily: 'SFProRounded-Light',
  },
  actionsUser_icon: {
    width: 13,
    height: 13,
  },
  actionsUser__chevron: {
    width: 10,
    height: 10,
    marginLeft: 10,
  },
  overView_providedCash: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '60%',
    paddingRight: 10,
    fontFamily: 'SFProRounded-Bold',
    flexDirection: 'row',
  },
  providedCash_count: {
    fontSize: 19,
  },
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
  infoGivingImpact_activity: {
    // fontSize: 12,
    color: 'grey',
    fontFamily: 'SFProRounded-Light',
  },
  blockTitle_avatar: {
    width: 40,
    height: 40,
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
  numberAfterPoin: {
    fontSize: 16,
  },
  homePage_givingImpact: {
    paddingBottom: 10,
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
});

export default HomeScreen;
