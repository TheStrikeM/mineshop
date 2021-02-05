const initialState = {
    index: 0,
    name: "Привелегии"
};

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'CHANGE_ITEM':
            return {
                ...state,
                index: payload.index,
                name: payload.name
            };

        default:
            return state;
    }
}
