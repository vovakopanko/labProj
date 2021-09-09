import React, {FC, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {HomeProps} from '../../../types';
import {useHome} from '../../hook/homeHook';
import CurrentActions from './CurrentActions';
import CurrentTime from './CurrentTime';
import HandleScroll from './HandleScroll';
import TotalCashUser from './TotalCashUser';
import YourGiving from './YourGiving';

const HomeScreen: FC<HomeProps> = ({navigation}) => {
  const [pause, setPause] = useState(true);
  const {actionsInfo, userGiving} = useHome();
  return (
    <View style={styles.homePage}>
      <FlatList
        ListHeaderComponent={
          <View>
            <View style={styles.homePage_greetingUser}>
              <CurrentTime />
            </View>
            <View style={styles.homePage_overView}>
              <Text style={styles.overView_title}>Account Overview </Text>
              <TotalCashUser />
              <Text style={styles.overView_subTitle}>Total Available cash</Text>
              <FlatList
                data={actionsInfo}
                renderItem={({item}) => (
                  <CurrentActions
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
        data={userGiving}
        initialNumToRender={3}
        onScroll={event => HandleScroll({event, setPause})}
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
};

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: 10,
  },
  homePage_titleGreating: {
    fontFamily: 'SFProRounded-Regular',
    color: '#808080',
  },
  homePage_greetingUser: {
    marginBottom: 10,
  },
  homePage_overView: {
    backgroundColor: '#ffffff',
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

  overView_subTitle: {
    textAlign: 'center',
    // fontWeight: '200',
    color: '#808080',
    fontSize: 12,
    marginBottom: 20,
  },
  overView_actionsUser: {
    borderBottomColor: '#d3d3d3',
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
    color: '#808080',
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
  blockGivingImpact_photo: {
    width: '100%',
  },

  homePage_givingImpact: {
    paddingBottom: 10,
  },
});

export default HomeScreen;
