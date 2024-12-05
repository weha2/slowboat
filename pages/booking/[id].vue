<script setup lang="ts">
import dayjs, { Dayjs } from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import type { FormInstance } from "ant-design-vue";

dayjs.extend(utc);
dayjs.extend(timezone);

const route = useRoute();

const products = new Map<
  number,
  {
    name: string;
    price: number;
  }
>();

products.set(1, {
  name: "⛵️ Slow boat",
  price: 1700,
});
products.set(2, {
  name: "🚃 Bus",
  price: 1600,
});
products.set(3, {
  name: "🚝 Train",
  price: 1990,
});

const product = products.get(Number(route.params.id));

if (!product) {
  navigateTo("/");
}

useHead({
  title: `Booking ${product?.name}`,
});

const participantFormRef = ref<FormInstance>();
const contactFormRef = ref<FormInstance>();
const date = ref<Dayjs>(dayjs());
const additionalRequest = ref<string>();

const departureStart = computed(() => {
  return dayjs.tz(`${date.value.format("YYYY-MM-DD")} 05:00`, "Asia/Bangkok");
});

const departureEnd = computed(() => {
  return dayjs.tz(
    `${date.value.add(1, "days").format("YYYY-MM-DD")} 17:00`,
    "Asia/Bangkok"
  );
});

const formattedDepartureDate = computed(() => {
  return `${departureStart.value.format(
    "YYYY-MM-DD hh:mm A"
  )} ～ ${departureEnd.value.format("YYYY-MM-DD hh:mm A")} (UTC +07:00)`;
});

const current = ref<number>(0);
const items = [
  {
    title: "Information",
  },
  {
    title: "Preview",
  },
  {
    title: "Success",
  },
];

const contactFormState = reactive({
  lastname: "",
  firstname: "",
  email: "",
  phoneCode: "",
  numberPhone: "",
});

interface Participant {
  id: number;
  lastname: string;
  firstname: string;
  phoneCode: string;
  numberPhone: string;
  email: string;
  dateBirth: string;
  passport: string;
}

const dynamicValidateForm = reactive<{ participant: Participant[] }>({
  participant: [],
});

const removeParticipant = (participant: Participant) => {
  const index = dynamicValidateForm.participant.indexOf(participant);
  if (index !== -1) {
    dynamicValidateForm.participant.splice(index, 1);
  }
};

const addParticipant = () => {
  dynamicValidateForm.participant = [
    ...dynamicValidateForm.participant,
    {
      lastname: "",
      firstname: "",
      phoneCode: "",
      numberPhone: "",
      email: "",
      dateBirth: "",
      passport: "",
      id: Date.now(),
    },
  ];
};

const copyContactInfo = () => {
  contactFormRef.value
    ?.validate()
    .then((res) => {
      const firstParticipant: Participant = {
        lastname: res.lastname,
        firstname: res.firstname,
        email: res.email,
        phoneCode: res.phoneCode,
        numberPhone: res.numberPhone,
        dateBirth: "",
        passport: "",
        id: Date.now(),
      };
      dynamicValidateForm.participant = [
        firstParticipant,
        ...dynamicValidateForm.participant.slice(1),
      ];
    })
    .catch((err) => {});
};

const previous = () => {
  current.value -= 1;
};

const next = async () => {
  // if (current.value === 0) {
  //   try {
  //     await contactFormRef.value?.validate();
  //     await participantFormRef.value?.validate();
  //   } catch (e) {}
  // }
  if (current.value >= 2) {
    current.value = 2;
  } else {
    current.value += 1;
  }
};

onMounted(() => {
  addParticipant();
});
</script>

<template>
  <div>
    <a-steps
      :current="current"
      direction="horizontal"
      size="small"
      responsive
      :items="items"
      class="px-2"
    ></a-steps>
    <div>
      <div v-if="current === 0" class="m-2">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col sm:flex-row gap-4">
            <a-card :bordered="false" class="basis-1/3">
              <div>
                <a-statistic title="Product selected" :value="product?.name" />
                <div class="flex flex-row sm:flex-col gap-4">
                  <a-statistic
                    title="Participant"
                    :value="dynamicValidateForm.participant.length"
                  />
                  <div class="flex gap-4">
                    <a-statistic title="Price" :value="product?.price" />
                    <a-statistic
                      title="Amount"
                      :value="
                        dynamicValidateForm.participant.length *
                        (product?.price || 0)
                      "
                    />
                  </div>
                </div>
              </div>
            </a-card>
            <a-card :bordered="false" class="w-full">
              <div>
                <div>
                  <div
                    class="text-md font-thin flex sm:flex-row flex-col items-start gap-2 sm:items-center"
                  >
                    Departure Date :
                    <p class="font-semibold sm:text-xl text-lg">
                      {{ formattedDepartureDate }}
                    </p>
                  </div>
                  <a-calendar
                    v-model:value="date"
                    :defaultValue="date"
                    :fullscreen="false"
                    :validRange="[
                      dayjs().add(-1, 'days'),
                      dayjs().add(1, 'year'),
                    ]"
                  />
                </div>
                <a-divider />
                <div>
                  <p class="text-md font-thin">Status</p>
                  <p class="text-2xl font-bold text-primary">Available</p>
                </div>
              </div>
            </a-card>
          </div>
          <div>
            <a-card :bordered="false">
              <p class="text-2xl font-bold">Contact</p>
              <a-form
                ref="contactFormRef"
                name="contact_form"
                layout="vertical"
                :model="contactFormState"
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
                    <a-input
                      v-model:value="contactFormState.lastname"
                      type="text"
                      size="large"
                    >
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
                    <a-input
                      v-model:value="contactFormState.firstname"
                      type="text"
                      size="large"
                    />
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
                  <a-input
                    v-model:value="contactFormState.email"
                    type="email"
                    size="large"
                  >
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
                      v-model:value="contactFormState.phoneCode"
                      size="large"
                      placeholder="please select phone code"
                    >
                      <a-select-option value="+66"
                        >+66 Thailand</a-select-option
                      >
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
                    <a-input
                      v-model:value="contactFormState.numberPhone"
                      type="text"
                      size="large"
                    >
                      <template #prefix>
                        <PhoneOutlined class="site-form-item-icon" />
                      </template>
                    </a-input>
                  </a-form-item>
                </div>
              </a-form>
            </a-card>
          </div>

          <div>
            <a-card :bordered="false">
              <div class="text-2xl font-bold flex gap-4 items-center">
                Participant
                <a-tag color="#87d068" :bordered="false"
                  >Total {{ dynamicValidateForm.participant.length }}</a-tag
                >
              </div>
              <a-form
                ref="participantFormRef"
                name="participant_form"
                layout="vertical"
                :model="dynamicValidateForm"
                class="py-2"
              >
                <div
                  v-for="(
                    participant, index
                  ) in dynamicValidateForm.participant"
                  :key="participant.id"
                  class="flex flex-col"
                >
                  <div class="flex flex-col sm:flex-row gap-4">
                    <a-form-item
                      :name="['participants', index, 'lastname']"
                      class="basis-1/2"
                      :rules="[
                        {
                          required: false,
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
                            @click="copyContactInfo"
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
                          <UserOutlined
                            class="site-form-item-icon"
                          /> </template
                      ></a-input>
                    </a-form-item>

                    <a-form-item
                      :name="['participants', index, 'firstname']"
                      label="First Name"
                      class="basis-1/2"
                      :rules="[
                        {
                          required: false,
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
                    <a-input
                      v-model:value="participant.email"
                      type="email"
                      size="large"
                    >
                      <template #prefix>
                        <MailOutlined class="site-form-item-icon" />
                      </template>
                    </a-input>
                  </a-form-item>

                  <div class="flex flex-col sm:flex-row gap-4">
                    <a-form-item
                      :name="['participants', index, 'phoneCode']"
                      label="Phone Code"
                      class="basis-1/4"
                    >
                      <a-select
                        v-model:value="participant.phoneCode"
                        size="large"
                        placeholder="please select phone code"
                      >
                        <a-select-option value="+66"
                          >+66 Thailand</a-select-option
                        >
                      </a-select>
                    </a-form-item>
                    <a-form-item
                      :name="['participants', index, 'numberPhone']"
                      label="Phone Number"
                      class="w-full"
                    >
                      <a-input
                        v-model:value="participant.numberPhone"
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

                  <div
                    v-if="
                      dynamicValidateForm.participant.length > 1 && index !== 0
                    "
                  >
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
                  <a-button
                    type="primary"
                    shape="round"
                    @click="addParticipant"
                  >
                    <div class="flex gap-1">
                      <PlusCircleOutlined />
                      <label>Add Participant</label>
                    </div>
                  </a-button>
                </a-form-item>
              </a-form>
            </a-card>
          </div>

          <div>
            <a-card :bordered="false">
              <p class="text-2xl font-bold">Additional Request</p>
              <div class="my-4"></div>
              <a-textarea
                v-model:value="additionalRequest"
                show-count
                :rows="4"
                :maxlength="100"
                placeholder="Please fill in the requests or remarks."
              />
            </a-card>
          </div>
        </div>
      </div>
      <div v-if="current === 1" class="m-2">
        <a-card :bordered="false">
          <p class="text-xl font-bold text-primary">Order Detail</p>
          <a-divider />
          <div>
            <p class="text-sm font-thin">Product</p>
            <p class="text-lg">{{ product?.name || "-" }}</p>
          </div>
          <a-divider />
          <div>
            <p class="text-sm font-thin">Departure Date</p>
            <p class="text-lg">{{ formattedDepartureDate }}</p>
          </div>
          <a-divider />
          <div class="flex justify-between items-end">
            <div>
              <p class="text-sm font-thin">Quantity</p>
              <p class="text-lg">
                Participant - {{ product?.price || 0 }} x
                {{ dynamicValidateForm.participant.length }}
              </p>
            </div>
            <p class="text-lg">
              {{
                (product?.price ?? 0) * dynamicValidateForm.participant.length
              }}
            </p>
          </div>
          <a-divider />
          <div class="flex flex-col">
            <div class="flex gap-4 justify-end">
              <p class="text-lg font-thin">Subtotal</p>
              <p class="text-lg">
                {{
                  (product?.price ?? 0) * dynamicValidateForm.participant.length
                }}
              </p>
            </div>
            <div class="my-2"></div>
            <div class="flex gap-4 justify-end">
              <p class="text-lg font-thin">Checkout Amount</p>
              <p class="text-lg">
                {{
                  (product?.price ?? 0) * dynamicValidateForm.participant.length
                }}
              </p>
            </div>
          </div>
          <a-divider />
          <div class="flex gap-4 justify-end">
            <p class="text-lg font-thin">Total</p>
            <p class="text-lg">
              {{
                (product?.price ?? 0) * dynamicValidateForm.participant.length
              }}
            </p>
          </div>
        </a-card>
        <div class="my-4"></div>
        <a-card :bordered="false">
          <p class="text-xl font-bold text-primary">Payment Info</p>
          <a-divider />
          <div>
            <p class="text-sm font-thin">Payment Type</p>
            <p class="text-lg">Credit Card</p>
          </div>
          <a-divider />
          <div>
            <p class="text-sm font-thin">Amount</p>
            <div class="text-lg flex gap-2">
              {{
                (product?.price ?? 0) * dynamicValidateForm.participant.length
              }}
              <p class="font-thin">(Full amount)</p>
            </div>
          </div>
        </a-card>
        <div class="my-4"></div>
        <a-card :bordered="false">
          <p class="text-xl font-bold text-primary">Contact Info</p>
          <a-divider />
          <div>
            <p class="text-sm font-thin">Last Name</p>
            <p class="text-lg">{{ contactFormState.lastname || "-" }}</p>
          </div>
          <a-divider />
          <div>
            <p class="text-sm font-thin">First Name</p>
            <p class="text-lg">{{ contactFormState.firstname || "-" }}</p>
          </div>
          <a-divider />
          <div>
            <p class="text-sm font-thin">Email</p>
            <p class="text-lg">{{ contactFormState.email || "-" }}</p>
          </div>
          <a-divider />
          <div>
            <p class="text-sm font-thin">Mobile</p>
            <p class="text-lg">
              {{ contactFormState.phoneCode || "-" }}
              {{ contactFormState.numberPhone || "-" }}
            </p>
          </div>
        </a-card>
      </div>
      <div v-if="current === 2" class="m-2">
        <a-result
          status="error"
          title="Submission Failed"
          sub-title="The payment system is currently under development. We apologize for the inconvenience."
        >
        </a-result>
      </div>
    </div>
    <div
      class="flex p-2"
      v-if="current <= 1"
      :class="{
        'justify-between': current > 0,
        'justify-end': current === 0,
      }"
    >
      <a-button
        shape="round"
        size="large"
        @click="previous()"
        v-if="current > 0"
      >
        <div class="flex gap-1">
          <ArrowLeftOutlined />
          <label>Previous</label>
        </div>
      </a-button>

      <a-button
        type="primary"
        shape="round"
        size="large"
        @click="next()"
        v-if="current >= 0 && current <= 2"
      >
        <div class="flex gap-1">
          <label>Next</label>
          <ArrowRightOutlined />
        </div>
      </a-button>
    </div>
  </div>
</template>
