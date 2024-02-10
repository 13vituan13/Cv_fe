// src/api/apiRouters.js
const HOST = 'http://127.0.0.1:8000/api/'
export const HOST_IMG = 'http://127.0.0.1:8000/images/'

const Group = {
    User: "users/",
    Skill: "skills/",
    
}

export const API_ROUTER = {
    // Login
    Login : HOST + "login",

    //User
    User : {
        getAll  : HOST + Group.User,
        getCv   : HOST + Group.User + "get_cv",
    },

    //Skill
    Skill : {
        getAll  : HOST + Group.Skill,
    },
}