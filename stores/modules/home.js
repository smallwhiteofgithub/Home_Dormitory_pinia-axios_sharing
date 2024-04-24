import { defineStore } from "pinia";
import hyRequest from "@/services/request";
import { getHomeHotSuggests, getHomeCategories, getHomeHouseList } from "@/services";

const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests: [],
        categories: [],
        currentPage: 1,
        houselist: []
    }),
    actions: {
        async fetchHotSuggestData() {
            const res = await getHomeHotSuggests()
            this.hotSuggests = res.data
        },
        async fetchCategoriesData() {
            const res = await getHomeCategories()
            this.categories = res.data
        },
        async fetchHouseListData() {
            const res = await getHomeHouseList(this.currentPage)
            this.houselist.push(...res.data)
            console.log("加载了更多数据!")
            // console.log(this.houselist)
            this.currentPage++;
        },

        // async fetchHotSuggestData() {
        //     const res = await getHomeHotSuggests()
        //     this.hotSuggests = res.data
        // },
        // async fetchCategoriesData() {
        //     const res = await getHomeCategories()
        //     this.categories = res.data
        // },
        // async fetchHouselistData() {
        //     const res = await getHomeHouselist(this.currentPage)
        //     this.houselist.push(...res.data)
        //     this.currentPage++
        // }

    }
})

export default useHomeStore 