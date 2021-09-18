import Axios from 'axios';
Axios.defaults.baseURL = 'https://open.duyiedu.com';
Axios.defaults.timeout = 1000;

Axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    config.params = {
        ...config.params,
        appkey: 'buildy_1623060174268',
    }
    return config;
})

Axios.interceptors.response.use(response => {
    // 对响应数据做点什么
    if (response.status === 200) {
        if (response.data.data) {
            return response.data.data
        } else if (response.data) {
            return response.data
        } else {
            return response;
        }
    }

    return response;
})

export default Axios;