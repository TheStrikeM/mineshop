const initialState = {
    showModal: false,
    settings: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'SHOW_MODAL':
        return { 
            ...state,
            showModal: true,
            settings: payload
        };
    
    case 'HIDE_MODAL':
        return {
            ...state,
            showModal: false
        };

    default:
        return state;
    }
}
