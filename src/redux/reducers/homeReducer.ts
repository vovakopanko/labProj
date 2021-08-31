import {InfernActionsType} from './../reduxStore';

let initialState = {};

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
