const initialState=[]

const Reducer=(state=initialState,action)=>{

switch (action.type) {
        case "All_Data" :
        return action.payload
        
        case "Input_data" :
       const a=[...state]
        a.push(action.payload)
        return a

        case "Like" :
        return action.payload
        

    default:
    return state
        
}
}

export default Reducer 