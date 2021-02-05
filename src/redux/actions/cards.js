import axios from 'axios';

export const fetchItems = () => (dispatch) => {

    dispatch(setLoading(false));

    axios.get("http://localhost:1111/items").then(({ data }) => {
        dispatch(setItems(data));
        dispatch(setLoading(true));

        console.log("Данные получены и выгружены в хранилище.")
    });
}

export const setItems = (payload) => ({
    type: "SET_ITEMS",
    payload: payload
});

export const setLoading = (payload) => ({
    type: "SET_LOADING",
    payload: payload
});