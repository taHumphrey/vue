<template>
    <form class="text-center">
        <div class="p-1">
            <label for="title" class="inline-block w-[70px]">Title: </label>
            <input type="text" id="title" class="border" v-model="title" />
        </div>
        <div class="p-1">
            <label for="budget" class="inline-block w-[70px]">Budget: </label>
            <input type="text" id="budget" class="border" v-model="budget"/>
        </div>
    </form>
</template>
<!--TODO: create form validation on submit - show warning if failed, warning should have fade in transition-->

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCategoryStore } from '@/stores/category';
import { storeToRefs } from 'pinia';

const title = ref<string>()
const budget = ref<string>()

const category_store = useCategoryStore()
const {category} = storeToRefs(category_store)


watch(title, (newValue, oldValue) => {
    if (newValue !== undefined){
        category.value.title = newValue
    }
})
watch(budget, (newValue, oldValue) => {
    if (newValue !== undefined){
        category.value.budget = newValue
    }
})


</script>