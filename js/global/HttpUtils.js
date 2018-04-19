/*
 * Http请求封装基类(暂时未实现安全相关的封装，只是单一的网络请求)
 * @Author: jianxin.luo 
 * @Date: 2018-04-17 19:09:47 
 * @Last Modified by: jianxin.luo
 * @Last Modified time: 2018-04-17 19:10:21
 */

/**
 * API接口地址
 */
const BASE_API_DOMEN = __DEV__ ? 'http://127.0.0.1:3000' : 'https://api.xiu8.com';

export default {
    /** 
     * 安全认证方式
     */
    AUTHTYPE: {
        /**
         * 登录认证
         */
        LOGIN: 1,
        /**
         *  签名认证
         */
        SIGN: 2,
        /**
         * 安全认证
         */
        SECURITY: 3,
    },
    /**
     * POST提交，提交方式 
     */
    CONTENTTYPE: {
        /** 
         * 使用json字符串的方式传递参数
         * 发送服务器时传递格式为： ‘{"key1":"v1","key2":"v2"}’
         */
        JSON: 'application/json',
        /**
         * 普通表单方式传输，也是平时默认使用的方式\n
         * 发送服务器时传递参数格式为：key1=v1&key2=v2
         */
        X_WWW_FORM: 'application/x-www-form-urlencoded',
        /**
         * 此方法最好适用于文件上传
         */
        FROM_DATA: 'multipart/form-data',
    },

    /**
     * 通过GET方式获取接口
     * 
     * @example 
     *  BaseNetwork.get('http://127.0.0.1/userList').then((data)=>{ //正确数据返回处理流程 },(response)=>{ //TODO 处理请求fail })
     * @param {any} url    请求地址
     * @param {any} params 如没有参数可以不传 
     * @returns 
     */
    /**
     * 发起GET请求
     * 
     * @param {any} url 请求地址
     * @param {any} {data=接口参数,authType = 安全等级，默认为空（即不进行安全操作）} 
     * @returns 
     */
    get(url, { data = {}, authType = '' }) {
        let paramsArray = [];
        url = BASE_API_DOMEN + url;
        Object.keys(data).forEach(key => paramsArray.push(key + '=' + data[key]));
        if (paramsArray.length > 0) {
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&');
            } else {
                url += '&' + paramsArray.join('&');
            }
        }


        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        reject({ 'status': 0, errorCode: '01', 'errorMsg': '网络连接错误，错误码：' + response.status });
                    }
                })
                .then((responsData) => {
                    resolve(responsData)
                })
                .catch((e) => {
                    reject({ 'status': 0, errorCode: '00', 'errorMsg': '网络连接错误，错误码：' + e.name + ' 错误信息：' + e.message });
                });
        });
    },

    /**
     * POST方式请求接口
     * 
     * @param {any} url 接口地址 
     * @param {any} [{ data = 接口使用参数, authType = 安全等级，默认为空（即不进行安全操作）, ContentType = post提交方式，默认使用传统表单形式提交(application/x-www-form-urlencoded) }={}] 
     * @returns 
     */
    post(url, { data = {}, authType = '', ContentType = 'application/x-www-form-urlencoded' } = {}) {
        let paramsArray = [], option = {};
        url = BASE_API_DOMEN + url;
        switch (ContentType) {
            case 'application/json':
                option = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                };
                break;
            case 'application/x-www-form-urlencoded':
                Object.keys(data).forEach(key => paramsArray.push(key + '=' + data[key]));
                option = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: paramsArray.join('&')
                };
                break;
            default:
                option = {
                    method: 'POST',
                    body: data
                };
                break;
        }
        return new Promise((resolve, reject) => {
            fetch(url, option)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        reject({ 'status': 0, errorCode: '01', 'errorMsg': '网络连接错误，错误码：' + response.status });
                    }
                })
                .then((responsData) => {
                    resolve(responsData)
                })
                .catch((e) => {
                    reject({ 'status': 0, errorCode: '00', 'errorMsg': '网络连接错误，错误码：' + e.name + ' 错误信息：' + e.message + '   option:' + JSON.stringify(option) });
                });
        });
    },
}