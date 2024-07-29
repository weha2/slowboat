<script lang="ts" setup>
import type { Country } from '~/domain/dtos/CountryDTO';
import type { Person } from '~/domain/dtos/PersonDTO';

const props = defineProps<{
    visible: boolean,
    person?: Person | null
}>()

const emit = defineEmits<{
    onAdd: [Person],
    onUpdate: [Person],
    onClose: []
}>()

const modal = ref<HTMLDialogElement | null>(null)
const countries = ref<Country[]>([])
const firstName = ref('')
const lastName = ref('')
const passportId = ref('')
const country = ref('')
const nationality = ref('')

onMounted(async () => {
    try {
        const res = await fetch('/json/countries.json')
        countries.value = (await res.json()) as Country[]
    } catch (err) {
        console.error(err);
    }
})

watch(() => props.visible, (newVal) => {
    if (modal.value) {
        if (newVal) {
            firstName.value = props.person?.firstName ?? ''
            lastName.value = props.person?.lastName ?? ''
            passportId.value = props.person?.passportId ?? ''
            country.value = props.person?.country ?? ''
            nationality.value = props.person?.nationality ?? ''
            modal.value.showModal();
        } else {
            modal.value.close();
        }
    }
});

const title = computed(() => {
    return props.person ? "Edit Traveler" : "Add Traveler"
})

const closeModal = () => {
    emit('onClose')
}

const onSubmit = (e: Event) => {
    e.preventDefault();
    const res: Person = {
        id: new Date().getTime().toString(),
        firstName: firstName.value,
        lastName: lastName.value,
        passportId: passportId.value,
        country: country.value,
        nationality: nationality.value
    }
    emit('onAdd', res)
}

</script>

<template>
    <dialog ref="modal" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
            <div class="flex justify-end">
                <i class="pi pi-times cursor-pointer" @click="closeModal"></i>
            </div>
            <div class="flex justify-center my-2">
                <h3 class="text-xl">{{ title }}</h3>
            </div>
            <div>
                <form @submit="onSubmit">
                    <div class="flex gap-4 sm:flex-row flex-col">
                        <div class="flex-1">
                            <label class="label-text label" for="fname">First Name</label>
                            <input type="text" id="fname" class="input input-bordered input-primary input-md w-full"
                                v-model="firstName" required />
                        </div>
                        <div class="flex-1">
                            <label class="label-text label" for="lname">Last Name</label>
                            <input type="text" id="lname" class="input input-bordered input-primary input-md w-full"
                                v-model="lastName" required />
                        </div>
                    </div>
                    <div>
                        <label class="label-text label" for="passportId">Passport Id</label>
                        <input type="text" id="passportId" class="input input-bordered input-primary input-md w-full"
                            v-model="passportId" required />
                    </div>
                    <div>
                        <label class="label-text label" for="country">Country</label>
                        <select id="country" class="select select-primary w-full" v-model="country">
                            <option v-for="(country, index) in countries" :key="index">{{ country.name }}</option>
                        </select>
                    </div>
                    <div>
                        <label class="label-text label" for="nationality">Nationality</label>
                        <select id="nationality" class="select select-primary w-full" v-model="nationality">
                            <option v-for="(country, index) in countries" :key="index">{{ country.nationality }}
                            </option>
                        </select>
                    </div>
                    <div class="my-4">
                        <button class="btn btn-primary w-full">
                            <p class="text-white text-lg">Save</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </dialog>
</template>