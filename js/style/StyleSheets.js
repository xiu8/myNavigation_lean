/*
 * 布局文件
 * @Author: jianxin.luo 
 * @Date: 2018-04-14 18:55:26 
 * @Last Modified by: jianxin.luo
 * @Last Modified time: 2018-04-14 20:32:14
 */

import { StyleSheet } from 'react-native';

let _styles = StyleSheet.create({
    // 容器基础定义
    container: {
        flex: 1,
        backgroundColor: 'rgba(225, 228, 225, 0.938)',

    },
    // ----------  布局  -----------
    /**
     * 横向布局
     */
    flexDirection_row: {
        flexDirection: 'row',
        flex: 1,
    },

    index_swiper: {
        height: 120,
        backgroundColor: '#FFF',
        // flexDirection: 'row',
    },
    index_swiper_img: {
        flex: 1,
    },

    // 标准间隔
    contentContainer: {
    },

    // 热门游戏
    hot_game_list: {
        height: 100,
        backgroundColor: '#FFF',
        marginTop: 5,
    }
});

export default _styles;