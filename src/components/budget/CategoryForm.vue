<template>
    <form class="text-center">
        <div class="p-1">
            <label for="title" class="inline-block w-[70px]">Title: </label>
            <input type="text" id="title" class="border" v-model="title" />
        </div>
        <div class="p-1">
            <label for="budget" class="inline-block w-[70px]">Budget: </label>
            <input type="text" id="budget" class="border"/>
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref<String>()
</script>