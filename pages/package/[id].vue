<script setup lang="ts">
const route = useRoute<string>()

const price = ref(1700)
const booking = ref('')
const person = ref(1)

onMounted(async () => {
    switch (route.params.id) {
        case "slowboat":
            price.value = 1700
            booking.value = "Slow Boat Package"
            break
        case "bus":
            price.value = 1600
            booking.value = "Bus Package"
            break
        case "train":
            price.value = 1990
            booking.value = "Train Package"
            break
        default:
            await navigateTo("/")
            break
    }

    useHead({
        title: `Booking ${booking.value}`
    })
})



</script>

<template>
    <div>
        <div class="flex justify-between sm:mt-5 sm:flex-row flex-col sm:p-0 p-4">

            <div class=" flex-1 sm:pr-10 sm:pb-0 pb-8 px-0">
                <p class="text-lg mb-2">The booking will not be completed without this information.</p>
                <div class="flex sm:flex-row flex-col gap-4">
                    <div class="flex flex-col flex-1">
                        <label class="mx-1 text-gray-500 text-sm">First Name</label>
                        <input type="text"
                            class="w-full border-gray-200 border-2 rounded-xl p-2 text-sm font-thin focus:outline-primary"
                            placeholder="Enter First Name" />
                    </div>
                    <div class="flex flex-col flex-1">
                        <label class="mx-1 text-gray-500 text-sm">Last Name</label>
                        <input type="text"
                            class="w-full border-gray-200 border-2 rounded-xl p-2 text-sm font-thin focus:outline-primary"
                            placeholder="Enter Last Name" />
                    </div>
                </div>
            </div>

            <div class=" basis-1/3">
                <p class="text-md">{{ booking }}</p>
                <div class="flex items-center">
                    <p class="text-5xl font-semibold">฿{{ price }}</p>
                    <p class="text-sm ml-2 text-gray-500 font-semibold">per <br /> person</p>
                </div>
                <div class=" my-4">
                    <div class="flex justify-between">
                        <p class="text-xl">{{ booking }}</p>
                        <p class="text-xl font-bold">฿{{ price }}</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-xl">Person</p>
                        <p class="text-xl font-bold">{{ person }}</p>
                    </div>
                </div>
                <hr />
                <div class="my-4">
                    <div class="flex justify-between my-2">
                        <p class="text-xl">Subtotal</p>
                        <p class="text-xl font-bold">฿{{ price }}</p>
                    </div>
                    <div class="flex justify-between my-2">
                        <p class="text-xl">Tax</p>
                        <p class="text-xl font-bold">฿0.00</p>
                    </div>
                </div>
                <hr />
                <div class="flex justify-between my-4">
                    <p class="text-xl">Total</p>
                    <p class="text-xl font-bold">฿{{ price }}</p>
                </div>
                <div class="my-10">
                    <button class="btn btn-primary w-full">
                        <p class="text-white text-xl">Payment</p>
                    </button>
                </div>
            </div>


        </div>
    </div>
</template>