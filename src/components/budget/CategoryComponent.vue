<template>
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
import { PlusCircleIcon } from '@heroicons/vue/24/outline';
import ModalComponent from '@/components/common/layout/ModalComponent.vue'
import SubmitButton from '../common/layout/SubmitButton.vue';
import CategoryForm from './CategoryForm.vue';

const modal = ref(false)
function openCategoryModal(){ modal.value = true }
function closeCategoryModal(){ modal.value = false }

function submit(){}

</script>