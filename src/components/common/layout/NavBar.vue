<template>
    <aside class="">
        <nav class="flex flex-row bg-white text-sm justify-between p-1 border-t drop-shadow-sm">
            <RouterLink to="/" class="flex flex-col m-1 p-2 rounded-md">
                <BanknotesIcon class="w-6 h-6 m-auto"/>
                <div>Budget</div>
            </RouterLink>
            <RouterLink to="/accounts" class="flex flex-col m-1 p-2 rounded-md">
                <BuildingLibraryIcon class="w-6 h-5 m-auto"/>
                <div>Accounts</div>
            </RouterLink>
            <RouterLink to="/transactions" class="flex flex-col justify-center m-1 p-2 rounded-md">
                <CreditCardIcon class="w-6 h-6 m-auto"/>
                <div>Transactions</div>
            </RouterLink>
            <RouterLink to="/settings" class="flex flex-col justify-center m-1 p-2 rounded-md">
                <Cog6ToothIcon class="w-6 h-6 m-auto"/>
                <div>Settings</div>
            </RouterLink>
        </nav>
    </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import { BanknotesIcon, CreditCardIcon, Cog6ToothIcon, BuildingLibraryIcon } from '@heroicons/vue/24/outline'

const user = ref("")

</script>

<style scoped>
    .router-link-active {
        background-color: rgb(243 244 246);
    }
</style>