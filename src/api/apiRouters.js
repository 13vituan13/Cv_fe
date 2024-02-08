// src/api/apiRouters.js
const HOST = 'http://192.168.1.3:8001/api/'
export const HOST_IMG = 'http://192.168.1.3:8001/images/'

const Group = {
    User: "users/",
}

export const API_ROUTER = {
    // Login
    Login : HOST + "login",

    //User
    User : {
        getAll  : HOST + Group.User
    },
}