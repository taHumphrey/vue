<template>
    <div :class="['w-20 h-28 m-1 p-2 rounded-lg text-center flex flex-col content-around']">
        <div class="text-sm overflow-hidden whitespace-nowrap">
            Eating Out
        </div>
        <TruckIcon class="w-10 h-10 m-auto"/>
        <div class="">9</div>
    </div>
</template>

<script setup lang="ts">
import { TruckIcon } from '@heroicons/vue/24/solid'
</script>