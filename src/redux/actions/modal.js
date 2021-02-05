export const showModalWindow = (item) => ({
    type: "SHOW_MODAL",
    payload: item
});

export const hideModalWindow = () => ({
    type: "HIDE_MODAL",
    payload: {}
});