// src/helpers/auth-header.js
const authHeader = {
    getAuthHeader: () => {
        const token = localStorage.getItem('Token') ? localStorage.getItem('Token') : '';
        const headers = {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token,
        }
        //console.log('headers',headers)
        return headers;
    }
}

export default authHeader;