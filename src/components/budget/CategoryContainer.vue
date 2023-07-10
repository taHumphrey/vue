<template>
    <div class="w-20 h-28 m-1 p-2 rounded-lg text-center flex flex-col content-around border border-black">
        <div class="text-sm overflow-hidden whitespace-nowrap">
            {{ props.title }}
        </div>
        <TruckIcon class="w-10 h-10 m-auto"/>
        <div class="">{{ props.budget }}</div>
    </div>
</template>

<script setup lang="ts">
import { TruckIcon } from '@heroicons/vue/24/solid'

const props = defineProps(['title', 'budget'])
</script>