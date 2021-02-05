export const addItem = (item, sell) => ({
    type: "ADD_ITEM",
    payload: {
        item: item,
        sell: sell
    }
});

export const removeItem = (id, sell) => ({
    type: "REMOVE_ITEM",
    payload: {
        id: id,
        sell: sell
    }
});

export const clearItems = () => ({
    type: "CLEAR_ITEM"
});