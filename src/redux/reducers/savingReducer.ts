import {ImageSourcePropType} from 'react-native';
import {InfernActionsType} from './../reduxStore';

export type transactionsRaws = {
  title: string;
  subtitle: string;
  cash: number;
};

type initialStateSavings = {
  graph: ImageSourcePropType;
  totalInterestGained: number;
  goodnessPoints: number;
  date: string;
  transactionsRaws: transactionsRaws[];
};

let initialState: initialStateSavings = {
  graph: require('../../assets/projectImages/savingsGraphV2.png'),
  totalInterestGained: 50.0,
  goodnessPoints: 600,
  date: 'jul 11',
  transactionsRaws: [
    {
      title: 'Deposit',
      subtitle: 'Jul 11',
      cash: 2000.0,
    },
    {
      title: 'Deposit',
      subtitle: 'Jul 11',
      cash: 2000.0,
    },
    {
      title: 'Deposit',
      subtitle: 'Jul 11',
      cash: 200.5,
    },
    {
      title: 'Transfer',
      subtitle: 'from checjing (...5340) | Jul 11',
      cash: 800.65,
    },
    {
      title: 'Transfer',
      subtitle: 'Jul 11',
      cash: 180.0,
    },
    {
      title: 'Transfer',
      subtitle: 'from checjing (...4372) | Jul 11',
      cash: 320.0,
    },
  ],
};

export type initialStateType = typeof initialState;
type ActionType = InfernActionsType<typeof savingActions>;

const savingReducer = (
  state = initialState,
  action: ActionType,
): initialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};

//Actions
export const savingActions = {};

export default savingReducer;
