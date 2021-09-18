import Axios from '../axios'
var api = {
    getSearch: params => Axios.get('/api/meituan/header/search.json', params),
    getPosition: params => Axios.get('/api/meituan/city/getPosition.json', params),
    getProvince: params => Axios.get('/api/meituan/city/province.json', params),
    getCityList: params => Axios.get('/api/meituan/city/cityList.json', params),
    getHot: params => Axios.get('/api/meituan/city/hot.json', params),
    getRecents: params => Axios.get('/api/meituan/city/recents.json', params),
    getNavList: params => Axios.get('/api/meituan/index/nav.json', params),
    getContainer: params => Axios.get('/api/meituan/index/resultsByKeywords.json', params),
    login: params => Axios.get('/api/meituan/login', params),
    register: params => Axios.get('/api/meituan/register', params),
    getRecommendList: params => Axios.get('/api/meituan/list/recommend.json', params),

}

export default api;