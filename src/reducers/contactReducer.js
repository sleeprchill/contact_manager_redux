// this is a reducer for Contact component actions?

// importing our action types
import {GET_CONTACTS} from '../actions/types.js';

const initialState= {
  contacts: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
      phone: '555-555-5555'
    },
    {
      id: 2,
      name: 'Karen Williams',
      email: 'karen@gmail.com',
      phone: '444-444-4444'
    },
    {
      id: 3,
      name: 'Henry Johnson',
      email: 'henry@gmail.com',
      phone: '333-333-333'
    }
  ]
};


export default function(state=initialState, action){
  // how reducer interacts with state depends on the type of action passed to it
  switch(action.type) {
    case GET_CONTACTS:
      return {
        ...state
      };
    default:
      return state;
  }
}
