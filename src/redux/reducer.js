import {APP_RUNNING, APP_START, APP_STATUS, APP_STOP, GET_GOODS_LIST} from "./action";

export const getAppStatus = (state = {}, action = {}) => {
    switch (action.type) {
        case APP_START:
            return {
                status: "START",
                info: "APP START"
            };
        case APP_RUNNING:
            return {
                status: "RUNNING"
            };
        case APP_STOP:
            return {
                status: "STOP"
            };
        case APP_STATUS:
            return {
                status: state.status
            };
        default:
            return state;
    }

};

export const getGoodsList = (state = {}, action = {}) => {
    switch (action.type) {
        case GET_GOODS_LIST:
            let {data} = action;
            return {
                goods: data
            };
        default:
            return state;
    }
};