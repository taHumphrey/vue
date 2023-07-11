import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

interface Category {
    id: number,
    title: string,
    budget: string
}

// Store that tracks all data pertaining to budget categories
export const useCategoryStore = defineStore('categories', () => {

    // State
    const category = ref<Category>({id: 0, title: "", budget: ""})
    const categories = ref<Array<Category>>([])


    // Getters
    const getCategoryList = computed(() => categories.value )


    // Actions
    function deleteCategories(){}

    function addCategoryToList(){
        categories.value.push(JSON.parse(JSON.stringify(category.value)))
        resetCategory()
    }

    function resetCategory(){
        Object.assign(category.value, {id: 0, title: "", budget: ""})
    }

    
    // Have to return items to be used in Vue application
    return {
        category, 
        categories, 
        getCategoryList, 
        deleteCategories, 
        addCategoryToList
    }
})

