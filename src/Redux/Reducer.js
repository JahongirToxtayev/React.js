const initialState=[]

const Reducer=(state=initialState,action)=>{

switch (action.type) {
        case "All_DATA" :
        return action.payload
        
        case "Input_data" :
       const a=[...state]
        a.push(action.payload)
        return a

        case "Like" :
        let b=[...state]
        b[action.payload].Like=!b[action.payload].Like
        return b

        case "Del" :
        let del=[...state]
        del.splice(action.payload,1)
        return del
        

    default:
    return state
        
}
}

export default Reducer 