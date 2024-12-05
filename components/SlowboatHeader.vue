<script setup lang="ts">
const route = useRoute();

interface NavType {
  id: string;
  name: string;
}

const items: NavType[] = [
  {
    id: "/",
    name: "Home",
  },
  {
    id: "/contact",
    name: "Contact",
  },
  {
    id: "/about",
    name: "About",
  },
];

const isShowLoginModal = ref(false);

const isActive = (path: string) => {
  return route.path.split("/")[1] === path.split("/")[1];
};

const onShowLoginModal = (visible: boolean) => {
  isShowLoginModal.value = visible;
};
</script>

<template>
  <div>
    <div class="w-full h-[64px] flex items-center justify-between">
      <span class="flex text-xl select-none"
        >Slow<span class="text-primary">boat</span></span
      >
      <div class="sm:flex hidden flex-1 justify-end">
        <div class="flex items-center gap-4">
          <nav class="flex gap-3">
            <div v-for="item in items" :key="item.id">
              <NuxtLink
                :to="item.id"
                :class="`${isActive(item.id) ? 'text-primary' : ''}`"
                >{{ item.name }}
              </NuxtLink>
            </div>
          </nav>
        </div>
      </div>

      <div class="sm:hidden flex">
        <a-dropdown :trigger="['click']">
          <a class="ant-dropdown-link text-2xl" @click.prevent>
            <AlignRightOutlined />
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item
                v-for="item in items"
                :key="item.id"
                :class="`${isActive(item.id) ? 'text-primary' : ''}`"
              >
                <NuxtLink :to="item.id">{{ item.name }}</NuxtLink>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>
