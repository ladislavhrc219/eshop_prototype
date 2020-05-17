import {UserActionTypes} from './user.types';


const INITIAL_STATE = {
    // object, goint be null
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    //switching between states 
    switch (action.type){ 
        case UserActionTypes.SET_CURRENT_USER:
            return{
                ...state, 
                currentUser:action.payload
            };
            default: 
            return state;
            
    }
}
 


export default userReducer;