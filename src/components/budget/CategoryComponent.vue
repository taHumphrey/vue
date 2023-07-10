<template>
    <div class="flex flex-row flex-wrap">
        <CategoryContainer v-for="item in category_store.getCategoryList" :key="item.id" :title="item.title" :budget="item.budget"/>
    </div>
    <div class="flex flex-col text-gray-400" @click="openCategoryModal">
        <button class="flex flex-col items-center">
            <PlusCircleIcon class="w-5 h-5"/>
            <div class="text-sm">Add Category</div>
        </button>
    </div>
    <ModalComponent :open="modal" @close="closeCategoryModal">
        <template #title>Add Category</template>
        <template #body>
            <CategoryForm />
        </template>
        <template #footer><SubmitButton @submit="submit"/></template>
    </ModalComponent>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useCategoryStore } from '@/stores/category';


import ModalComponent from '@/components/common/layout/ModalComponent.vue'
import SubmitButton from '../common/layout/SubmitButton.vue';
import CategoryForm from './CategoryForm.vue';
import CategoryContainer from './CategoryContainer.vue';

import { PlusCircleIcon } from '@heroicons/vue/24/outline';

const modal = ref(false)
const category_store = useCategoryStore()



function submit(){
    closeCategoryModal()
    category_store.addCategoryToList()
}


function openCategoryModal(){ modal.value = true }
function closeCategoryModal(){ modal.value = false }


</script>