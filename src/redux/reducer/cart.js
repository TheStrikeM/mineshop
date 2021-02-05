const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "ADD_ITEM":
        return { 
            ...state, 
            items: [...state.items, payload.item],
            totalPrice: state.totalPrice+payload.sell,
            totalCount: state.totalCount+1
        }

    case "REMOVE_ITEM":
        return {
            ...state,
            items: state.items.filter(item => item.id !== payload.id),
            totalPrice: state.totalPrice-payload.sell,
            totalCount: state.totalCount-1
        }

    case "CLEAR_ITEM":
        return {
            items: [],
            totalPrice: 0,
            totalCount: 0
        }

    default:
        return state;
    }
}
