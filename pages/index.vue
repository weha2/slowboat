<script setup lang="ts">
useHead({
  title: "Slow boat to Luang Prabang",
});

const search = ref<string>("");

const onSearch = (searchValue: string) => {
  console.log("use value", searchValue);
  console.log("or use this.value", search.value);
};
</script>

<template>
  <div>
    <div class="flex sm:flex-row flex-col gap-4">
      <div class="flex-1 p-2 sm:p-0">
        <div class="sm:text-6xl text-4xl font-bold">
          <p>Slow boat</p>
          <p>To Luang Prabang</p>
        </div>
        <div class="text-gray-600 font-thin text-xl">
          <p>
            Promote slow tourism via Mekong River cruises to Luang Prabang,
            emphasizing cultural and natural experiences, developing
            infrastructure and services at stopovers, generating community
            income, fostering Thai-Lao cooperation in conservation, and creating
            comprehensive tourism support systems.
          </p>
        </div>
      </div>

      <div class="flex-1">
        <iframe
          src="https://www.youtube.com/embed/ZjWzmQ3tLFY?si=rqEPMtBoWgZrktTS?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          class="h-96 sm:h-72 w-full"
        ></iframe>

        <span class="text-sm text-gray-500 italic"
          ><span>Original Video Credit : </span>Jill and Hannah</span
        >
        <span class="text-sm text-gray-500 italic"
          ><span>, Link to the Original Video : </span
          ><a href="https://www.youtube.com/watch?v=ZjWzmQ3tLFY" target="_blank"
            >https://www.youtube.com/watch?v=ZjWzmQ3tLFY</a
          ></span
        >
      </div>
    </div>
    <div>
      <div class="my-10 mx-1">
        <a-input-search
          v-model:value="search"
          size="large"
          placeholder="Enter order number"
        >
          <template #addonBefore>
            <a-button type="link">Check Order</a-button>
          </template>
        </a-input-search>
        <p class="text-xs text-gray-400 mx-1">
          Please search for your order by the information that can be found in
          your email
        </p>
      </div>
    </div>
    <div class="my-4 sm:p-0 p-2">
      <div>
        <p class="text-2xl font-bold">OUR PACKAGE</p>
        <p class="font-thin text-xl text-primary">
          We have the following packages
        </p>
      </div>
    </div>
    <div class="grid sm:grid-cols-3 gap-4 sm:p-0 p-2">
      <SlowboatPackage />
      <BusPackage />
      <TrainPackage />
    </div>
    <div class="my-4 sm:p-0 p-2">
      <div>
        <p class="text-2xl font-bold">PHOTO</p>
        <p class="font-thin text-xl text-primary">We welcome everyone.</p>
      </div>
      <div class="grid sm:grid-cols-4 gap-4">
        <img
          src="~/assets/images/slowboat_6.jpg"
          alt="slow boat 1"
          class="w-full h-72 object-cover"
        />
        <img
          src="~/assets/images/slowboat_1.jpg"
          alt="slow boat 2"
          class="w-full h-72 object-cover"
        />
        <img
          src="~/assets/images/bus_1.jpg"
          alt="slow boat 4"
          class="w-full h-72 object-cover"
        />
        <img
          src="~/assets/images/train_2.jpg"
          alt="slow boat 5"
          class="w-full h-72 object-cover"
        />
      </div>
    </div>
  </div>
</template>
