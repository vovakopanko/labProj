import {ImageSourcePropType} from 'react-native';

export type actionsUser = {
  id: number;
  name: string;
  icon: string | null;
  cash: number;
  info: string;
  savedCash: boolean;
  clickDisabled: boolean;
};

export type typesOfPayments = {
  paymentName: string;
  paymentImage: ImageSourcePropType;
};

export type initialStateAccount = {
  actionsUser: actionsUser[];
  typesOfPayments: typesOfPayments[];
};
