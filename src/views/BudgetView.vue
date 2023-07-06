<template>
    <div class="overflow-auto">
        <HeaderBar>
            <template #left><div>{{name}}</div></template>
            <template #right>
                <div class="flex flex-row text-sm">
                    <div class="px-2 text-green-900">
                        <div>${{ income }}</div>
                        <div class="text-xs">INCOME</div>
                    </div>
                    <div class="px-2 text-red-800">
                        <div>${{ expenses }}</div>
                        <div class="text-xs">EXPENSES</div>
                    </div>
                    <div class="pl-2">
                        <div>{{ formatTotal() }}</div>
                        <div class="text-xs">TOTAL</div>
                    </div>
                </div>
            </template>
        </HeaderBar>
        <CategoryComponent />
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import HeaderBar from '@/components/common/layout/HeaderBar.vue'
import CategoryComponent from '@/components/budget/CategoryComponent.vue';


const name = ref<string>("Main")
const income = ref<number>(0)
const expenses = ref<number>(0)

function formatTotal() {
    return income.value - expenses.value >= 0 ? '$' + (income.value - expenses.value) : '-$' + Math.abs(income.value-expenses.value)
}
</script>