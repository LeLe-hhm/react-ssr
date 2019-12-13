// 首页
import axios from 'axios'
const GET_USER_LIST = 'INDEX/GET_USER_LIST'
const changList = list => ({
    type: GET_USER_LIST,
    list
})
export const getIndexList = server => {
    return (dispatch, getState, axiosInstance) => {
        return axios.get('http://localhost:3000/api/user/list').then(
            res => {
                let list = res.data.data.list
                console.log(list)
                dispatch(changList(list))
            }
        )
    }
}

const defaultState = {
    list: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_USER_LIST:
            console.log(action)
            const newState = {
                ...state,
                list: action.list
            }
            return newState
        default:
            return state
    }
}