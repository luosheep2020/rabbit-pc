import request from "@/utils/http.js";

export function getBannerApi () {
  return request({
      url:'/home/banner'
  })
}

export const findNewApi = () => {
    return request({
        url:'/home/new'
    })
}