import {
  ArrayInfoType,
  ArrayYourGivingImpactType,
} from '../../../types/homeTypes';
import {InfernActionsType} from './../reduxStore';

type initialState = {
  actionsInfo: ArrayInfoType[];
  userGiving: ArrayYourGivingImpactType[];
};

let initialState = {
  actionsInfo: [
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
  ],
  userGiving: [
    {
      id: 1,
      title: 'Your Giving Impact',
      subtitle: 'St Jude * 3 hrs ago',
      logo: require('./../../assets/projectImages/avatar.png'),
      photo: require('./../../assets/projectImages/rectangle2.png'),
      description:
        'Your donation helped 2 amazing kids get much needed cancer surgery, thanks for being amazing!',
      videoContent: false,
    },
    {
      id: 2,
      title: 'Your Giving Impact (Video informing)',
      subtitle: 'St Jude * 5 hrs ago',
      logo: require('../../assets/projectImages/avatar.png'),
      photo: require('../../assets/video/video.mov'),
      description:
        'Your donation helped group amazing kids get much needed cancer surgery, thanks for being amazing!',
      videoContent: true,
    },
    {
      id: 3,
      title: 'Your Giving Impact',
      subtitle: 'St Jude * 2 days ago',
      logo: require('../../assets/projectImages/avatar.png'),
      photo: require('../../assets/projectImages/rectangle.png'),
      description:
        'Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing!',
      videoContent: false,
    },
  ],
};

export type initialStateType = typeof initialState;
type ActionType = InfernActionsType<typeof authActions>;

const homeReducer = (
  state = initialState,
  action: ActionType,
): initialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};

//Actions
export const authActions = {};

export default homeReducer;
