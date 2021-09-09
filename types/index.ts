import {StackNavigationProp} from '@react-navigation/stack';

export type RootAppStackParamsList = {
  [RootAppStackParams.Checking]: undefined;
  [RootAppStackParams.Saving]: undefined;
  [RootAppStackParams.Goodness]: undefined;
  [RootAppStackParams.DrawScreen]: undefined;
  [RootAppStackParams.Proffile]: {info: null | string; name: null | string};
};

export enum RootAppStackParams {
  Checking = 'Checking',
  Saving = 'Saving',
  Goodness = 'Goodness',
  DrawScreen = 'DrawScreen',
  Proffile = 'Proffile',
}

export type NavigationProp = StackNavigationProp<RootAppStackParamsList>;
export interface AccountProps {
  navigation: NavigationProp;
}
export interface HomeProps {
  navigation: NavigationProp;
}

export interface GivingProps {
  navigation: NavigationProp;
}

export interface PaymentsProps {
  navigation: NavigationProp;
}

export interface CardsProps {
  navigation: NavigationProp;
}

export interface CheckingProps {
  navigation: NavigationProp;
}
