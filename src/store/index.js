import { createStore } from 'redux'

const loginReducer = (state = false, action) => {
    if (action.type === 'login') {
        const canLogin = action.payload.email && action.payload.password
        return {
            login: canLogin,
        }
    }

    if (action.type === 'logout') {
        return {
            login: false,
        }
    }
}

const store = createStore(loginReducer)

export default store;
