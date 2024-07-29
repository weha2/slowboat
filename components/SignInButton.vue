<script setup lang="ts">
const emit = defineEmits<{
    onLogin: []
}>()
</script>

<template>
    <div>
        <button class="btn btn-primary rounded-full" @click="emit('onLogin')">
            <i class="pi pi-lock sm:text-xl text-sm text-white" style="font-weight: bold;"></i>
            <p class="text-white sm:text-xl text-sm">Sign In</p>
        </button>
    </div>
</template>