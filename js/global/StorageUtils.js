/*
 * @Author: jianxin.luo 
 * @Date: 2018-04-19 09:24:32 
 * @Last Modified by: jianxin.luo
 * @Last Modified time: 2018-04-19 11:21:06
 */

import { AsyncStorage } from 'react-native';

/**
 * 本地存储操作工具类
 * 
 * @class StorageUtils
 */

class StorageUtils {
    
    /**
     * 异步设置本地数据
     * 
     * @param {any} key     
     * @param {any} value 
     * @memberof StorageUtils
     */
    setAsync(key, value) {
        return new Promise((resolve, reject) => {
            
            AsyncStorage.setItem((key, value, (error) => {
                if (error) {
                    reject('设置${key}失败：${error}');
                } else {
                    resolve(true);
                }
            }));
        });
    };

    /**
     * 异步获取本地数据
     * 
     * @param {any} key 
     * @memberof StorageUtils
     */
    getAsync(key) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(key, (error, result) => {
                if (error) {
                    reject('获取${key}失败：${error}');
                } else {
                    resolve(result);
                }
            });
        });
    };
}

export default new StorageUtils();