import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

// Store used to track form validation data
export const useFormStore = defineStore('forms', () => {

    // State
    const categoryFormTitle = ref<boolean>(false)
    const categoryFormBudget = ref<boolean>(false)

    // Getters


    // Actions


    
    // Have to return items to be used in Vue application
    return {
        categoryFormTitle, 
        categoryFormBudget
    }
})

