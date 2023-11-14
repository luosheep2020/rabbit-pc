import request from "@/utils/http.js";

export const getTopCategoryApi = (id) => {
    return request({
        url:'/category',
        params:{
            id
        }
    })
}

export const getCategoryFilterApi = (id) => {
    return request({
        url:'/category/sub/filter',
        params:{
            id
        }
    })
}

export const getSubCategoryApi = (data) => {
    return request({
        url:'/category/goods/temporary',
        method:'POST',
        data
    })
}