import {onMounted, ref} from "vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {getTopCategoryApi} from "@/apis/category.js";

export function useCategory() {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
        const res = await getTopCategoryApi(id)
        categoryData.value = res.result
    }

    onMounted(() => getCategory())

    onBeforeRouteUpdate((to) => {
        console.log('路由变化了', to)
        getCategory(to.params.id)
    })
    return{
        categoryData
    }
}