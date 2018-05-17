export const APP_START = "APP_START";
export const APP_RUNNING = "APP_RUNNING";
export const APP_STOP = "APP_STOP";
export const APP_STATUS = "APP_STATUS";

export const GET_GOODS_LIST = "GET_GOODS_LIST";

export const appStatus = (status) => ({
    type: status
});

export const reciveGoodsList = (data) => ({
    type: GET_GOODS_LIST,
    data: data
});


export const initApp = () => dispatch => {

    dispatch(appStatus(APP_START));
};

export const getGoodsList = () => dispatch => {
    fetch("http://localhost:8083/goods/v1/index")
        .then(res => res.json())
        .then(data => {
            dispatch(reciveGoodsList(data));
            console.log(data);
        })
        .catch(error => {
            new Error(error);
        });
};