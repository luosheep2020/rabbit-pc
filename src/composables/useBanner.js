import {onMounted, ref} from "vue";
import {getBannerApi} from "@/apis/home.js";

export function useBanner (){
    const bannerList = ref([])

    const getBanner = async () => {
        const res = await getBannerApi({
            distributionSite: '2'
        })
        console.log(res)
        bannerList.value = res.result
    }

    onMounted(() => getBanner())
    return{
        bannerList
    }
}
