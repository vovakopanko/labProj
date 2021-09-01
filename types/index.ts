export type SingInStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
  RecoveryCode: undefined;
  CreateNewPassword: undefined;
  PasswordChanged: undefined;
};

export type SingUpStackParamList = {
  Registration: undefined;
  CreatePassword: undefined;
  RecoveryCode: undefined;
  Welcome: undefined;
};

export type StepperStackParamList = {
  RootScreen: undefined;
  Stepper: undefined;
  GreatJob: undefined;
};

export type RootStackParamList = {
  Dashboard: undefined;
  SignUp: undefined;
  SignIn: undefined;
  ToolkitSetup: undefined;
  Onboarding: undefined;
} & SingInStackParamList &
  SingUpStackParamList &
  StepperStackParamList;

export interface ICFormDataPassword {
  password: string;
  confirmPassword: string;
}
