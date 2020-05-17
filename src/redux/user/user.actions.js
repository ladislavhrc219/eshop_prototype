import {UserActionTypes} from './user.types';


export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user //Payload holds the actual data in a Redux action object
  });

  //type=string set to 'SET_Current_USER
  //must be the same thing as the user.reducer.js expecting
  //user reducer expecting the same thing;