<template>
  <n-space justify="center">
    <n-h3 justify="center">Edit Session</n-h3>
  </n-space>
  <n-space justify="center">
    <n-form
      ref="formRef"
      :model="model"
      label-placement="top"
      :label-width="160"
      :rules="rules"
      :style="{
        maxWidth: '640px',
      }"
    >
      <n-grid :span="24" :x-gap="24">
        <n-form-item-gi :span="12" label="Track" path="track">
          <n-select
            v-model:value="model.track"
            placeholder="Track"
            :options="trackOption"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="12" label="Type" path="type">
          <n-select
            v-model:value="model.type"
            placeholder="Type"
            :options="typeOption"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="6" label="Ad Duration" path="adDuration">
          <n-input v-model:value="model.adDuration" placeholder="Ad Duration" />
        </n-form-item-gi>
        <n-form-item-gi :span="6" label="Duration" path="duration">
          <n-input v-model:value="model.duration" placeholder="duration" />
        </n-form-item-gi>
        <n-form-item-gi :span="6" label="Start" path="start">
          <n-input v-model:value="model.start" placeholder="start" />
        </n-form-item-gi>
        <n-form-item-gi :span="6" label="End" path="end">
          <n-input v-model:value="model.end" placeholder="end" />
        </n-form-item-gi>
        <n-form-item-gi :span="12" label="Title" path="title">
          <n-input v-model:value="model.title" placeholder="title" />
        </n-form-item-gi>
        <n-form-item-gi :span="12" label="Description" path="description">
          <n-input
            v-model:value="model.description"
            placeholder="description"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="12" label="Download" path="download">
          <n-input v-model:value="model.download" placeholder="download" />
        </n-form-item-gi>

        <n-form-item-gi
          :span="12"
          label="Download Description"
          path="downloadDescription"
        >
          <n-input
            v-model:value="model.downloadDescription"
            placeholder="downloadDescription"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="12" label="Intro" path="intro">
          <n-input v-model:value="model.intro" placeholder="intro" />
        </n-form-item-gi>
        <n-form-item-gi :span="12" label="Speaker" path="speaker">
          <n-input v-model:value="model.speaker" placeholder="speaker" />
        </n-form-item-gi>
        <n-form-item-gi
          :span="12"
          label="Speaker Company"
          path="speakerCompany"
        >
          <n-input
            v-model:value="model.speakerCompany"
            placeholder="speakerCompany"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="12" label="Speaker Title" path="speakerTitle">
          <n-input
            v-model:value="model.speakerTitle"
            placeholder="speakerTitle"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="12" label="Sponsor" path="sponsor">
          <n-input v-model:value="model.sponsor" placeholder="sponsor" />
        </n-form-item-gi>
        <n-form-item-gi :span="12" label="Stream" path="stream">
          <n-input v-model:value="model.stream" placeholder="stream" />
        </n-form-item-gi>
        <n-gi :span="24">
          <div style="display: flex; justify-content: flex-end">
            <n-button
              type="primary"
              ghost
              round
              @click="handleValidateButtonClick"
            >
              Submit
            </n-button>
          </div>
        </n-gi>
      </n-grid>
    </n-form>
  </n-space>
</template>

<script setup>
import { ref, h, onMounted } from "vue";
import {
  NSpace,
  NSelect,
  NInput,
  NForm,
  NButton,
  NFormItemGi,
  NGi,
  NGrid,
  NH3,
} from "naive-ui";
const router = useRouter();

const currentTrack = ref({});

const model = ref({
  track: null,
  type: null,
  adDuration: null,
  duration: null,
  start: null,
  end: null,
  description: null,
  download: null,
  downloadDescription: "",
  intro: "",
  speaker: "",
  speakerCompany: "",
  speakerTitle: "",
  sponsor: "",
  stream: "",
  title: "",
});
const track = ref("");
const trackOption = ref([
  {
    label: "Sales",
    value: "Sales",
    disable: false,
  },
  {
    label: "label2",
    value: "value2",
  },
]);

const rules = ref({
  adDuration: {
    required: false,
    trigger: ["blur", "input"],
    message: "Please input adDuration",
  },
  duration: {
    required: false,
    trigger: ["blur", "input"],
    message: "Please input duration",
  },
  start: {
    required: false,
    trigger: ["blur", "input"],
    message: "Please input start",
  },
  end: {
    required: false,
    trigger: ["blur", "input"],
    message: "Please input end",
  },

  description: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input description",
  },

  download: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input download",
  },
  downloadDescription: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input downloadDescription",
  },
  intro: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input intro",
  },
  speaker: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input speaker",
  },

  speakerCompany: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input speakerCompany",
  },

  speakerTitle: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input speakerTitle",
  },

  sponsor: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input sponsor",
  },

  stream: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input stream",
  },

  title: {
    required: true,
    trigger: ["blur", "input"],
    message: "Please input title",
  },
});
const type = ref("");
const typeOption = ref([
  {
    label: "Session",
    value: "Session",
  },
  {
    label: "label2",
    value: "value2",
  },
]);

const formRef = ref(null);

// const adDuration = ref(0);
// const duration = ref(0);
// const start = ref(0);
// const end = ref(0);

// const description = ref("");
// const download = ref("");
// const downloadDescription = ref("");
// const intro = ref("");
// const speaker = ref("");
// const speakerCompany = ref("");
// const speakerTitle = ref("");
// const sponsor = ref("");
// const stream = ref("");
// const title = ref("");

onMounted(() => {
  currentTrack.value = router.currentRoute.value.query;

  model.value.track = currentTrack.value.track;
  model.value.type = currentTrack.value.type;
  model.value.adDuration = currentTrack.value.adDuration;
  model.value.duration = currentTrack.value.duration;
  model.value.start = currentTrack.value.start;
  model.value.end = currentTrack.value.end;

  model.value.description = currentTrack.value.description;
  model.value.download = currentTrack.value.download;
  model.value.downloadDescription = currentTrack.value.downloadDescription;
  model.value.intro = currentTrack.value.intro;
  model.value.speaker = currentTrack.value.speaker;
  model.value.speakerCompany = currentTrack.value.speakerCompany;
  model.value.speakerTitle = currentTrack.value.speakerTitle;
  model.value.sponsor = currentTrack.value.sponsor;
  model.value.stream = currentTrack.value.stream;
  model.value.title = currentTrack.value.title;
});

const handleValidateButtonClick = (e) => {
  console.log("model", model.value);
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      //message.success("Valid");
      alert("Valid");
    } else {
      console.log(errors);
      alert("Invalid");
      //message.error("Invalid");
    }
  });
};
</script>

<style scoped></style>
