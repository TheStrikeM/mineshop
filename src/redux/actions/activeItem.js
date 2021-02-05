const setActiveItem = (index, name) => ({
    type: "CHANGE_ITEM",
    payload: {
        index: index,
        name: name
    }
});

export default setActiveItem;