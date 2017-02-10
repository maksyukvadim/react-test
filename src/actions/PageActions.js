export function createCard(newCard) {
    return {
        type: 'CREATE_CARD',
        payload: newCard
    }
}

export function moveCard(state) {
    return {
        type: 'MOVE_CARD',
        payload: state
    }
}

export function deleteCard(state) {
    return {
        type: 'DELETE_CARD',
        payload: state
    }
}
