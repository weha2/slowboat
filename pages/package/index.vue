<script setup lang="ts">
useHead({
    title: 'Package'
})
</script>
<template>
    <div class="sm:p-0 p-2">
        <div>
            <p class="text-4xl">Choose your package</p>
            <p class="font-thin text-2xl text-primary">We are ready to welcome you all and will take you to your
                destination as best as possible.</p>
        </div>
        <div class="my-4 grid sm:grid-cols-3 gap-4 sm:p-0 p-2">
            <SlowboatPackage />
            <BusPackage />
            <TrainPackage />
        </div>
    </div>
</template>