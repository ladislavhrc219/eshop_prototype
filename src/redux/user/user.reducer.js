const INITIAL_STATE = {
    // object obv, goint obe null
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    // currentUser: null
    switch (action.type){
        case 'SET_CURRENT USER':
            return{
                ...state, 
                currentUser:action.payload,
            }
            
            default: 
            return state;
            
    }
}
 


export default userReducer;