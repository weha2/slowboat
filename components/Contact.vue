<script setup lang="ts">
const { formRef, formState } = useContactForm();
</script>
<template>
  <a-form
    ref="formRef"
    :model="formState"
    name="contact_form"
    layout="vertical"
    class="py-2"
  >
    <div class="flex flex-col sm:flex-row gap-4">
      <a-form-item
        label="Last Name"
        name="lastname"
        class="w-full"
        :rules="[
          {
            required: true,
            message: 'Please input lastname!',
          },
        ]"
      >
        <a-input type="text" size="large" v-model:value="formState.lastname">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item
        label="First Name"
        name="firstname"
        class="w-full"
        :rules="[
          {
            required: true,
            message: 'Please input firstname!',
          },
        ]"
      >
        <a-input type="text" size="large" v-model:value="formState.firstname" />
      </a-form-item>
    </div>

    <a-form-item
      label="Email"
      name="email"
      help="Confirm your email address for order updates."
      class="w-full"
      :rules="[
        {
          required: true,
          message: 'Please input email!',
        },
      ]"
    >
      <a-input type="email" size="large" v-model:value="formState.email">
        <template #prefix>
          <MailOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <div class="flex flex-col sm:flex-row gap-4">
      <a-form-item
        label="Phone Code"
        name="phoneCode"
        class="basis-1/4"
        :rules="[
          {
            required: true,
            message: 'Please input phone code!',
          },
        ]"
      >
        <a-select
          size="large"
          placeholder="please select phone code"
          v-model:value="formState.phoneCode"
        >
          <a-select-option value="+66">+66 Thailand</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        label="Phone Number"
        name="numberPhone"
        class="w-full"
        :rules="[
          {
            required: true,
            message: 'Please input phone number!',
          },
        ]"
      >
        <a-input type="text" size="large" v-model:value="formState.numberPhone">
          <template #prefix>
            <PhoneOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>
    </div>
  </a-form>
</template>
