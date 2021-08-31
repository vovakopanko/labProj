import {InfernActionsType} from './../reduxStore';
const SIGN_IN = './redux/authRedux/SIGN_IN';
const SIGN_OUT = './redux/authRedux/SIGN_OUT';

export type userType = {
  token: string | null;
  userId: string | null;
};

let initialState = {
  user: null as userType | null,
  token: 'dfdfsdfsdgfsdhfsd',
};

export type initialStateType = typeof initialState;
type ActionType = InfernActionsType<typeof authActions>;

const authReducer = (
  state = initialState,
  action: ActionType,
): initialStateType => {
  switch (action.type) {
    case SIGN_IN:
      return {...state, user: action.user};
    case SIGN_OUT:
      return {...state, user: null};
    default:
      return state;
  }
};

//Actions
export const authActions = {
  signIn: (user: userType) =>
    <const>{
      type: SIGN_IN,
      user,
    },
  signOut: () => <const>{type: SIGN_OUT},
};

export default authReducer;
