<script setup lang="ts">
const route = useRoute()

interface NavType {
    id: string,
    name: string
}

const items: NavType[] = [
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

const isShowLoginModal = ref(false)

const isActive = (path: string) => {
    return route.path.split('/')[1] === path.split('/')[1]
}

const onShowLoginModal = (visible: boolean) => {
    isShowLoginModal.value = visible
}

</script>

<template>
    <div>
        <div class=" w-full h-[64px] flex items-center justify-between">
            <SlowBoat />
            <div class="sm:flex hidden flex-1 justify-end">
                <div class="flex items-center gap-4">
                    <nav class="flex gap-3">
                        <div v-for="item in items" :key="item.id">
                            <NuxtLink :to=item.id :class="`${isActive(item.id) ? 'text-primary' : ''}`">{{ item.name }}
                            </NuxtLink>
                        </div>
                    </nav>
                    <!-- <SignInButton @on-login="onShowLoginModal(true)" /> -->
                </div>
            </div>
            <div class="sm:hidden flex">
                <!-- <SignInButton @on-login="onShowLoginModal(true)" /> -->
                <div class="dropdown dropdown-end">
                    <button tabindex="0" class="btn btn-ghost">
                        <i class="pi pi-align-left text-2xl"></i>
                    </button>
                    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li v-for="item in items" :key="item.id" :class="`${isActive(item.id) ? 'text-primary' : ''}`">
                            <NuxtLink :to=item.id>{{ item.name }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <SignInModal :visible="isShowLoginModal" @on-close="onShowLoginModal(false)" />
    </div>

</template>