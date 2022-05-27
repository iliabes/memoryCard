import { combineReducers } from 'redux'

export function sound(state = 0,action){
    if(action.type === 'add'){
        console.log(state.anotherVal)
        return {count:state.count + 1,anotherVal:'11111'}
    }
    if(action.type === 'minus'){
        return {count:state.count - 1}
    }
    return {count:'nobody'}
}



export function impi(state = { value: false }, action) {
    switch (action.type) {
      case 'show':
        console.log('dispath true');
        return { value: true}
      case 'hide':
        return { value: false }
      default:
        return state
    }
  }



export default combineReducers({
    impi,sound
})