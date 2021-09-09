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
