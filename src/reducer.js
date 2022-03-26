export const initialState ={
    term: null
} //intitial state

export const action ={
    SET_SEARCH_TERM: 'SET_SEARCH_TERM'

} //action

const reducer =(state,action) =>{
    switch(action.type){
        case 'SET_SEARCH_TERM':
            return{
                ...state, term: action.term
            }
           default :
           return state; 
    }
}  //reducer

export default reducer;


