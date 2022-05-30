
import { createStore } from 'redux'
import { impi } from '../reduser/redusers'
import combineReduser from '../reduser/redusers'

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

export let storeImpi  = createStore(impi)


