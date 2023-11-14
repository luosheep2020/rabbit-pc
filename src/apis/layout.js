import request from "@/utils/http.js"

export function getCategoryApi() {
    return request({
        url:'/home/category/head'
    })
}