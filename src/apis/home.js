import request from "@/utils/http.js";

export function getBannerApi(params = {}) {
    const {distributionSite = '1'} = params
    return request({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
}

export const findNewApi = () => {
    return request({
        url: '/home/new'
    })
}

export const getHotApi = () => {
    return request({
        url: '/home/hot'
    })
}
export const getGoodsApi = () => {
    return request({
        url: '/home/goods'
    })
}

