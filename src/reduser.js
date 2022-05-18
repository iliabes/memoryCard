let reduser = function(state = 0,action){
    if(action.type === 'add'){
        console.log(state.anotherVal)
        return {count:state.count + 1,anotherVal:'11111'}
    }
    if(action.type === 'minus'){
        return {count:state.count - 1}
    }
    return {count:'nobody'}
}

export default reduser