const initialState = {
        cards: [
            
        ]      
};


export default function userstate(state = initialState, action) {
    console.log(state);
    switch (action.type) {
        case 'CREATE_CARD': {
            return {  ...state, cards: [...state.cards, action.payload] }
        }
        case 'MOVE_CARD': {
            return { ...state, cards: [...action.payload ]}  
        } 
        case 'DELETE_CARD': {
            return { ...state, cards: state.cards.filter(card => card.id !== action.payload.id) }  
        } 
        default:
            return state;
            
        }

}