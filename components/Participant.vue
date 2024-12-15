<script setup lang="ts">
const {
  formRef,
  formState,
  genders,
  countryCodes,
  countryNationalities,
  addParticipant,
  removeParticipant,
  copyContact,
} = useParticipantForm();
</script>
<template>
  <a-form
    ref="formRef"
    name="participant_form"
    layout="vertical"
    :model="formState"
    class="py-2"
  >
    <div
      v-for="(participant, index) in formState.participants"
      :key="participant.id"
      class="flex flex-col"
    >
      <div class="flex flex-col sm:flex-row gap-4">
        <a-form-item
          :name="['participants', index, 'lastname']"
          class="basis-1/2"
          :rules="[
            {
              required: true,
              message: 'Please input lastname!',
            },
          ]"
        >
          <template #label>
            <span>
              Last Name
              <a-button
                v-if="index === 0"
                type="link"
                size="small"
                @click="copyContact"
              >
                Copy from contact
              </a-button>
            </span>
          </template>

          <a-input
            v-model:value="participant.lastname"
            type="text"
            size="large"
          >
            <template #prefix>
              <UserOutlined class="site-form-item-icon" /> </template
          ></a-input>
        </a-form-item>

        <a-form-item
          :name="['participants', index, 'firstname']"
          label="First Name"
          class="basis-1/2"
          :rules="[
            {
              required: true,
              message: 'Please input firstname!',
            },
          ]"
        >
          <a-input
            v-model:value="participant.firstname"
            type="text"
            size="large"
          />
        </a-form-item>
      </div>

      <a-form-item
        :name="['participants', index, 'email']"
        label="Email"
        help="Confirm your email address for order updates."
        class="w-full"
      >
        <a-input v-model:value="participant.email" type="email" size="large">
          <template #prefix>
            <MailOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <div class="flex flex-col sm:flex-row gap-4">
        <a-form-item
          :name="['participants', index, 'countryCodeId']"
          label="Phone Code"
          class="basis-1/4"
        >
          <a-select
            v-model:value="participant.countryCodeId"
            size="large"
            placeholder="please select phone code"
          >
            <a-select-option
              v-for="countryCode in countryCodes"
              :key="countryCode.id"
              :value="countryCode.id"
              >{{ countryCode.dialCode }}
              {{ countryCode.name }}</a-select-option
            >
          </a-select>
        </a-form-item>
        <a-form-item
          :name="['participants', index, 'numberPhone']"
          label="Phone Number"
          class="w-full"
        >
          <a-input
            v-model:value="participant.phoneNumber"
            type="text"
            size="large"
          >
            <template #prefix>
              <PhoneOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>
      </div>

      <div class="flex flex-col sm:flex-row gap-4">
        <a-form-item
          :name="['participants', index, 'dateBirth']"
          label="Date of birth"
          class="basis-1/4"
        >
          <a-date-picker
            v-model:value="participant.dateBirth"
            value-format="DD-MM-YYYY"
            size="large"
            class="w-full"
          />
        </a-form-item>
        <a-form-item
          :name="['participants', index, 'passport']"
          label="Passport Number"
          class="w-full"
        >
          <a-input
            v-model:value="participant.passport"
            type="text"
            size="large"
          />
        </a-form-item>
      </div>

      <div class="flex flex-col sm:flex-row gap-4">
        <a-form-item
          :name="['participants', index, 'genderId']"
          label="Gender"
          class="basis-1/4"
        >
          <a-select
            v-model:value="participant.genderId"
            size="large"
            placeholder="please select gen"
          >
            <a-select-option
              v-for="gender in genders"
              :key="gender.id"
              :value="gender.id"
              >{{ gender.name }}</a-select-option
            >
          </a-select>
        </a-form-item>
        <a-form-item
          :name="['participants', index, 'countryNationalityId']"
          label="Nationality"
          class="w-full"
        >
          <a-select
            v-model:value="participant.countryNationalityId"
            size="large"
            placeholder="please select nationality"
          >
            <a-select-option
              v-for="nationality in countryNationalities"
              :key="nationality.id"
              :value="nationality.id"
              >{{ nationality.nationality }}</a-select-option
            >
          </a-select>
        </a-form-item>
      </div>

      <div v-if="formState.participants.length > 1 && index !== 0">
        <a-button
          type="primary"
          shape="round"
          danger
          @click="removeParticipant(participant)"
        >
          <div class="flex gap-1">
            <MinusCircleOutlined />
            <label>Remove</label>
          </div>
        </a-button>
      </div>
      <a-divider />
    </div>

    <a-form-item>
      <a-button type="primary" shape="round" @click="addParticipant">
        <div class="flex gap-1">
          <PlusCircleOutlined />
          <label>Add Participant</label>
        </div>
      </a-button>
    </a-form-item>
  </a-form>
</template>
