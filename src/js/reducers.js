const defaultState = {};

export default function reducers (state = defaultState, action){
  const {type, payload} = action;
  
  switch (type) {
    case 'MOVIE' : {
      return{
        ...state,

        //property and value from the state, that needs to be updated in state
      };
    }
    default: {
      return state;
    }
  }
}