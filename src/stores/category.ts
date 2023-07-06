import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('categories', () => {
    interface Category {
        id: number,
        title: String,
        budget: number,
        spent: number,
    }
    const category = ref<Category>({'id': 1, 'title': "", 'budget': 0, 'spent': 0 })
    
    const categories = ref<Category[]>([])

    function resetCategory(){
        Object.assign(category, {'id': categories.value.length + 1, 'title': "", 'budget': 0, 'spent': 0 })
    }
    function addCategories(){}
    function deleteCategories(){}
})

