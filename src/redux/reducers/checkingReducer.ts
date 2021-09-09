import {InfernActionsType} from './../reduxStore';

type dataTransactionse = {
  title: string;
  subtitle: string;
  cost: number;
  deposit: boolean;
  specialDeposit: boolean;
};

export type transactionOneDay = {
  date: string;
  data: dataTransactionse[];
};

export type initialStateChacking = {
  transactions: transactionOneDay[];
};

let initialState: initialStateChacking = {
  transactions: [
    {
      date: 'Jul 11',
      data: [
        {
          title: 'Targer',
          subtitle: 'Closter NJ | Debit card',
          cost: 63.95,
          deposit: false,
          specialDeposit: false,
        },
        {
          title: 'ApIPay 7 - Eleven',
          subtitle: 'Cresskill NJ | Iphone',
          cost: 17.75,
          deposit: false,
          specialDeposit: false,
        },
        {
          title: 'Facebooc inc',
          subtitle: 'Pay day! Yay!',
          cost: 1200.5,
          deposit: false,
          specialDeposit: true,
        },
        {
          title: 'MC',
          subtitle: 'Belarusian BSB | Debit card',
          cost: 20.73,
          deposit: false,
          specialDeposit: false,
        },
      ],
    },
    {
      date: 'Jul 10',
      data: [
        {
          title: 'Transfer from savings',
          subtitle: 'Buy a house (...4044)',
          cost: 10000.0,
          deposit: true,
          specialDeposit: false,
        },
        {
          title: 'Starbucks',
          subtitle: 'Closter NJ | Debit card',
          cost: 12.02,
          deposit: false,
          specialDeposit: false,
        },
        {
          title: 'Sturbucks',
          subtitle: 'Closter NJ | Debit card',
          cost: 236.52,
          deposit: false,
          specialDeposit: false,
        },
        {
          title: 'Lencrafters',
          subtitle: 'Paramus NJ | Debit card',
          cost: 320.73,
          deposit: false,
          specialDeposit: false,
        },
      ],
    },
    {
      date: 'Jul 9',
      data: [
        {
          title: 'Transfer from savings',
          subtitle: 'Buy a house (...4044)',
          cost: 600.0,
          deposit: true,
          specialDeposit: false,
        },
        {
          title: 'CofeMix',
          subtitle: 'Closter NJ | Iphone',
          cost: 121.02,
          deposit: false,
          specialDeposit: false,
        },
        {
          title: 'Sturbucks',
          subtitle: 'Closter NJ | Debit card',
          cost: 2326.52,
          deposit: true,
          specialDeposit: false,
        },
        {
          title: 'Lencrafters',
          subtitle: 'Paramus NJ | Debit card',
          cost: 30.73,
          deposit: false,
          specialDeposit: true,
        },
      ],
    },
  ],
};

export type initialStateType = typeof initialState;
type ActionType = InfernActionsType<typeof checkingActions>;

const checkingReducer = (
  state = initialState,
  action: ActionType,
): initialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};

//Actions
export const checkingActions = {};

export default checkingReducer;
