import {InfernActionsType} from './../reduxStore';

let initialState = {
  actionsUser: [
    {
      id: 1,
      name: 'Checking',
      icon: null,
      cash: 1500.2,
      info: 'Main account (...0353)',
      savedCash: false,
      clickDisabled: false,
    },
    {
      id: 2,
      name: 'Saving',
      icon: null,
      cash: 5000.2,
      info: 'Buy a house (...4044)',
      savedCash: true,
      clickDisabled: false,
    },
    {
      id: 3,
      name: 'Goodness',
      icon: require('./../../assets/projectImages/heart.png'),
      cash: 500.4,
      info: 'Cash Rewards',
      savedCash: false,
      clickDisabled: true,
    },
  ],
  typesOfPayments: [
    {
      paymentName: 'Send',
      paymentImage: require('../../assets/projectImages/circleButtonSend.png'),
    },
    {
      paymentName: 'Play',
      paymentImage: require('../../assets/projectImages/circleButtonPay.png'),
    },
    {
      paymentName: 'Transfer',
      paymentImage: require('../../assets/projectImages/circleButtonChecking.png'),
    },
  ],
};

export type initialStateType = typeof initialState;
type ActionType = InfernActionsType<typeof accountActions>;

const accountReducer = (
  state = initialState,
  action: ActionType,
): initialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};

//Actions
export const accountActions = {};

export default accountReducer;
