<script setup lang="ts">
import { useRoute } from 'nuxt/app';

interface Item {
    id: string,
    name: string
}

const route = useRoute()

const items: Item[] = [
    {
        id: "/",
        name: "Home"
    },
    {
        id: "/package",
        name: "Package"
    },
    {
        id: "/contact",
        name: "Contact"
    },
    {
        id: "/about",
        name: "About"
    }
]

const isActive = (path: string) => route.path === path

</script>

<template>
    <nav class="flex gap-3">
        <div v-for="item in items" :key="item.id">
            <NuxtLink :to=item.id :class="{ 'text-primary': isActive(item.id) } ">{{ item.name }}</NuxtLink>
        </div>
    </nav>
</template>