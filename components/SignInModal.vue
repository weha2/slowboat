<script setup lang="ts">
const props = defineProps<{
    visible: boolean
}>()
const emit = defineEmits<{
    onClose: []
}>()

const isSignIn = ref(true)
const isForgotPassword = ref(false)
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const modal = ref<HTMLDialogElement | null>(null)

const title = computed(() => {
    if (isForgotPassword.value) {
        return 'Forgot Password'
    }
    return isSignIn.value ? 'Sign In' : 'Sign Up'
})

const submitText = computed(() => {
    if (isForgotPassword.value) {
        return 'Confirm'
    }
    return isSignIn.value ? 'Login' : "Register"
})

watch(() => props.visible, (newVal) => {
    if (modal.value) {
        if (newVal) {
            isSignIn.value = true
            isForgotPassword.value = false
            modal.value.showModal();
        } else {
            modal.value.close();
        }
    }
});

const closeModal = () => {
    emit('onClose')
}

const onSignUp = (e: Event) => {
    e.preventDefault();
}

</script>

<template>
    <dialog ref="modal" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
            <div class="flex justify-end">
                <i class="pi pi-times cursor-pointer" @click="closeModal"></i>
            </div>
            <div class="flex justify-center my-4">
                <h3 class="text-4xl">{{ title }}</h3>
            </div>
            <div class="p-4">

                <form @submit="onSignUp">
                    <div class="flex gap-4 sm:flex-row flex-col" :class="`${isSignIn ? 'hidden' : ''}`">
                        <div class="flex-1">
                            <label class="label-text label" for="fistname">First Name</label>
                            <input type="text" id="fistname" class="input input-bordered input-primary input-md w-full"
                                :required="!isSignIn" v-model="firstName" autocomplete="off" />
                        </div>
                        <div class="flex-1">
                            <label class="label-text label" for="lastname">Last Name</label>
                            <input type="text" id="lastname" class="input input-bordered input-primary input-md w-full"
                                :required="!isSignIn" v-model="lastName" />
                        </div>
                    </div>

                    <div>
                        <label class="label-text label" for="email">Email</label>
                        <input type="email" id="email" class="input input-bordered input-primary input-md w-full"
                            required v-model="email" />
                    </div>

                    <div :class="`${isForgotPassword ? 'hidden' : ''}`">
                        <label class="label-text label" for="password">Password</label>
                        <input type="password" id="password" class="input input-bordered input-primary input-md w-full"
                            :required="!isForgotPassword" v-model="password" />
                    </div>

                    <div :class="`${isSignIn ? 'hidden' : ''}`">
                        <label class="label-text label" for="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword"
                            class="input input-bordered input-primary input-md w-full" :required="!isSignIn"
                            v-model="confirmPassword" />
                    </div>

                    <div class="my-4 text-center" :class="`${isSignIn ? isForgotPassword ? 'hidden' : '' : ' hidden'}`">
                        <p class="text-primary select-none cursor-pointer" @click="isForgotPassword = true">Forgot
                            Password?</p>
                    </div>

                    <div class="my-4">
                        <button class="btn btn-primary w-full" type="submit">
                            <p class="text-white text-lg font-semibold">{{ submitText }}</p>
                        </button>
                    </div>

                    <div class="text-center" :class="`${isForgotPassword ? 'hidden' : ''}`">
                        <p :class="`${isSignIn ? '' : ' hidden'}`">Don't have account? <span
                                class="text-primary select-none cursor-pointer" @click="isSignIn = false">Create
                                one</span>
                        </p>
                        <p :class="`${isSignIn ? ' hidden' : ''}`">Already account? <span
                                class="text-primary select-none cursor-pointer" @click="isSignIn = true">Sign In</span>
                        </p>
                    </div>

                </form>
            </div>
        </div>
    </dialog>
</template>