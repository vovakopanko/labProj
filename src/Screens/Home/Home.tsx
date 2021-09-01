import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useAuth} from '../../hook/authHook';

const screenWidth = Dimensions.get('screen').width;
// const screenHeight = Dimensions.get('screen').height;

type ActionsUser = {
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
};

type YourGivingImpactType = {
  title: string;
  subtitle: string;
  logo: ImageSourcePropType;
  photo: ImageSourcePropType;
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
  },
  {
    id: 2,
    title: 'Your Giving Impact',
    subtitle: 'St Jude * 12 hrs ago',
    logo: require('../../assets/projectImages/avatar.png'),
    photo: require('../../assets/projectImages/rectangle.png'),
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

const YourGiving = ({title, subtitle, logo, photo}: YourGivingImpactType) => {
  const {name} = useAuth();
  return (
    <View style={styles.blockGivingImpact}>
      <View style={styles.blockGivingImpact_blockTitle}>
        <Image source={logo} style={styles.blockTitle_avatar} />
        <View style={styles.blockTitle_infoGivingImpact}>
          <Text style={styles.infoGivingImpact_title}>{title}</Text>
          <Text style={styles.infoGivingImpact_activity}>{subtitle}</Text>
        </View>
      </View>
      <View>
        <Image source={photo} style={styles.blockGivingImpact_photo} />
      </View>
      <View style={styles.blockGivingImpact_info}>
        <Text style={styles.blockGivingImpact_info_text}>
          {name}, Your donation helped 5 amazing kid get much needed cancer
          surgery, thanks for being amazing!
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
  const total = arrayInfo
    .map(s => s.cash)
    .reduce((sum, current) => sum + current); // key for map
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
  const {name} = useAuth();
  return (
    <ScrollView>
      <View style={styles.homePage}>
        <View style={styles.homePage_greetingUser}>
          <Text style={styles.homePage_titleGreating}>
            {currentTime.getHours() < 11
              ? `Good Morning ${name}`
              : currentTime.getHours() >= 11 && currentTime.getHours() < 17
              ? `Good Afternoon ${name}`
              : currentTime.getHours() >= 17 && currentTime.getHours() <= 22
              ? `Good Evening ${name}`
              : currentTime.getHours() > 22 && currentTime.getHours() <= 5
              ? `Good Night ${name}`
              : `Good Morning ${name}`}
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
          {arrayInfo.map(info => (
            <ActionsUser
              key={info.id}
              name={info.name}
              info={info.info}
              cash={info.cash}
              icon={info.icon}
              navigation={navigation}
            />
          ))}
        </View>

        {arrayYourGiving.map(post => (
          <View style={styles.homePage_givingImpact}>
            <YourGiving
              key={post.id}
              title={post.title}
              subtitle={post.subtitle}
              logo={post.logo}
              photo={post.photo}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

type Font = 'SFProRounded-Regular' | 'SFProRounded-Bold' | 'SFProRounded-Light';

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    margin: 20,
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
  },
  blockGivingImpact_blockTitle: {
    padding: 10,
    flexDirection: 'row',
  },
  blockTitle_infoGivingImpact: {
    marginLeft: 10,
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
});

export default HomeScreen;
