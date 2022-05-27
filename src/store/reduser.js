
import { createStore } from 'redux'
import combineReduser from '../redusers'

// export function reducer(state = { value: false }, action) {
//     switch (action.type) {
//       case 'show':
//         console.log('dispath true');
//         return { value: true}
//       case 'hide':
//         return { value: false }
//       default:
//         return state
//     }
//   }


export let store = createStore(combineReduser)




