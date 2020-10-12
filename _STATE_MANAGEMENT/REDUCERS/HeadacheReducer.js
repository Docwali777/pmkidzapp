const initiaState = []

export default function HeadacheReducer(state=initiaState, action){
    switch(action.type){
        case "initializeHeadacheDiary": 
        console.log(action.payload);
        console.log( "hd", [...state, ...action.payload]);
            return [...state, ...action.payload]

        case "addHeadacheDiary": 
                console.log([...state, action.payload]);
            return [...state, action.payload]
            break;
        default: 
            return state
    }

}