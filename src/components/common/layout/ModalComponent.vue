<template>
    <div v-if="props.open" class="fixed top-0 left-0 right-0 w-full p-2 bg-slate-800/50 h-full">
        <div class="relative top-[15%] overflow-x-hidden overflow-y-auto h-max-[calc(60%)] border rounded-lg bg-white p-1">
            <div class="">
                <div class="text-center p-2 text-lg">
                    <slot name="title"></slot>
                </div>
                <div class="p-6 space-y-6">
                    <slot name="body"></slot>
                </div>
                <div class="flex justify-center">
                    <slot name="footer"></slot>
                </div>
                <button @click="$emit('close')" class="absolute top-0 right-0 p-1"><XCircleIcon class="w-5 h-5"/></button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { XCircleIcon } from '@heroicons/vue/24/outline';
    const props = defineProps(['open'])
</script>