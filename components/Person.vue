<script setup lang="ts">
import type { Person } from "~/domain/dtos/PersonDTO";

const emit = defineEmits<{
    onUpdatePerson: [Person[]];
}>();

const visible = ref(false);
const personList = ref<Person[]>([]);
const person = ref<Person | null>(null);

const openPersonModal = (open: boolean) => {
    visible.value = open;
};

const onAddPerson = (person: Person) => {
    personList.value = [...personList.value, person];
    emit("onUpdatePerson", personList.value);
    openPersonModal(false);
};

const onUpdatePerson = (person: Person) => { };
</script>

<template>
    <section>
        <div class="flex justify-between items-center">
            <p>Add traveler information</p>
            <div>
                <button class="btn btn-secondary rounded-full" @click="openPersonModal(true)">
                    <p class="text-white"><i class="pi pi-plus"></i> Add Traveler</p>
                </button>
            </div>
        </div>
        <div class="overflow-x-auto my-4">
            <table class="table table-lg">
                <thead>
                    <tr>
                        <th></th>
                        <th>Fist Name</th>
                        <th>Last Name</th>
                        <th>Passport Id</th>
                        <th>Country</th>
                        <th>Nationality</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(person, index) in personList" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ person.firstName }}</td>
                        <td>{{ person.lastName }}</td>
                        <td>{{ person.passportId }}</td>
                        <td>{{ person.country }}</td>
                        <td>{{ person.nationality }}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <PersonModal :visible="visible" :person="person" @on-add="onAddPerson" @on-update="onUpdatePerson"
            @on-close="openPersonModal(false)" />
    </section>
</template>
