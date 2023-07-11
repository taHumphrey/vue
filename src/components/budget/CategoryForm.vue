<template>
    <form class="text-center">
        <div class="p-1">
            <label for="title" class="inline-block w-[70px]">Title: </label>
            <input type="text" id="title" class="border" v-model="title" />
            <Transition>
                <div v-if="categoryFormTitle" class="text-red-500 text-xs">Field is required</div>
            </Transition>
        </div>
        <div class="p-1">
            <label for="budget" class="inline-block w-[70px]">Budget: </label>
            <input type="text" id="budget" class="border" v-model="budget"/>
            <Transition>
                <div v-if="categoryFormBudget" class="text-red-500 text-xs">Field is required</div>
            </Transition>
        </div>
    </form>
</template>

<!-- TODO: Budget input should only allow for numeric inputs, but still want to store as string -->

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCategoryStore } from '@/stores/category';
import { storeToRefs } from 'pinia';
import { useFormStore } from '@/stores/forms';

const title = ref<string>()
const budget = ref<string>()

const forms_store = useFormStore()
const {categoryFormTitle, categoryFormBudget} = storeToRefs(forms_store)

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

<style scoped>

.v-enter-active,
.v-leave-active {
    opacity: 1;
    max-height: 50px;
    transition: all 1s ease
}

.v-enter-from,
.v-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>