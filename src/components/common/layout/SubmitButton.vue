<template>
    <button @click="emit('submit')" class="border rounded-md w-fit py-1 px-2 bg-blue-500 text-white">SUBMIT</button>
</template>

<script setup lang="ts">
const emit = defineEmits(['submit'])
</script>