// src/api/axios.js
import axios from "axios";
import router from '../router/index'
import authHeader from '../helpers/auth-header.js'
import commonFunction from '../assets/js/common'
import Swal from 'sweetalert2';

const axiosInstance = axios.create({
    headers: authHeader.getAuthHeader(),
    timeout: 300000
})

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => ProcessError(error)
)

const ProcessError = (error) => {
    let status = error.response.status
    let message = error.response.data.message
    const orginalRequest = error.config;
    //Try again
    if ((error.response.status === 401 || error.response.status === 500) && !orginalRequest._retry) {
        orginalRequest._retry = true;
        return new Promise(function (resolve, reject) {
            orginalRequest.headers = authHeader.getAuthHeader()
            resolve(axios(orginalRequest))
        });
    }
    if (status == 401) {
        Swal.fire(message);
        commonFunction.removeSession()
        // router.go()
    }
}

const Axios = {
    get: (url, params = {}) => axiosInstance.get(url, { params: params }).then().catch(ProcessError),

    post: (url, params = {}) => axiosInstance.post(url, params).then().catch(ProcessError),

    put: (url, params = {}) => axiosInstance.put(url, params).then().catch(ProcessError),

    delete: (url) => axiosInstance.delete(url).then().catch(ProcessError),
}

export default Axios;