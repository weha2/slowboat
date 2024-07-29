<script setup lang="ts">
import type { Person } from '~/domain/dtos/PersonDTO';
import '../../extension/CurrencyExtension'

const route = useRoute<string>()
const price = ref<number>(1700)
const booking = ref('')
const personList = ref<Person[]>([])

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

const onUpdatePersonList = (data: Person[]) => {
    personList.value = data
}

const subTotal = computed(() => {
    return price.value * personList.value.length
})

</script>

<template>
    <div>
        <div class="flex justify-between sm:mt-5 sm:flex-row flex-col sm:p-0 p-4">
            <div class=" flex-1 sm:pr-10 sm:pb-0 pb-8 px-0">
                <p class="text-lg mb-2">The booking will not be completed without this information.</p>
                <Person @on-update-person="onUpdatePersonList" />
            </div>

            <div class=" basis-1/3">
                <p class="text-md">{{ booking }}</p>
                <div class="flex items-center">
                    <p class="text-5xl font-semibold">฿{{ price.toCurrency() }}</p>
                    <p class="text-sm ml-2 text-gray-500 font-semibold">per <br /> person</p>
                </div>
                <div class=" my-4">
                    <div class="flex justify-between">
                        <p class="text-xl">{{ booking }}</p>
                        <p class="text-xl font-bold">฿{{ price.toCurrency() }}</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-xl">Person</p>
                        <p class="text-xl font-bold">{{ personList.length }}</p>
                    </div>
                </div>
                <hr />
                <div class="my-4">
                    <div class="flex justify-between my-2">
                        <p class="text-xl">Subtotal</p>
                        <p class="text-xl font-bold">฿{{ subTotal.toCurrency() }}</p>
                    </div>
                    <div class="flex justify-between my-2">
                        <p class="text-xl">Tax</p>
                        <p class="text-xl font-bold">฿0.00</p>
                    </div>
                </div>
                <hr />
                <div class="flex justify-between my-4">
                    <p class="text-xl">Total</p>
                    <p class="text-xl font-bold">฿{{ subTotal.toCurrency() }}</p>
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