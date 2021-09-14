import {ImageSourcePropType} from 'react-native';

export type ActionsUser = {
  name: string;
  info: string;
  icon: null | ImageSourcePropType;
  cash: number;
  navigation: any;
};

export type ArrayInfoType = {
  id: number;
  name: string;
  icon: null | ImageSourcePropType;
  info: string;
  cash: number;
};

export type ArrayYourGivingImpactType = {
  id: number;
  title: string;
  subtitle: string;
  logo: ImageSourcePropType;
  photo: ImageSourcePropType;
  description: string;
  videoContent: boolean;
};

export type YourGivingImpactType = {
  title: string;
  subtitle: string;
  logo: ImageSourcePropType;
  photo: ImageSourcePropType;
  description: string;
  videoContent: boolean;
  pause: boolean;
};
