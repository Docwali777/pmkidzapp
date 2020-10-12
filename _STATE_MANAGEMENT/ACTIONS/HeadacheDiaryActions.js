export const initializeHeadacheDiary = (headache) =>{
    return {
        type: "initializeHeadacheDiary", 
        payload: headache
    }
}

export const addHeadacheDiary = (headache, id=Math.random()) =>{
    return {
        type: "addHeadacheDiary", 
        payload: headache, 
        id
    }
}