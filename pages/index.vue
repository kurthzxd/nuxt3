<template>
    <hero />
    <feature  :lists="services" />
</template>

<script setup>
import { ref } from "vue";
import hero from "~/components/hero.vue";
import feature from "~/components/feature.vue";
const services = ref([
  {
    title: "Service 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac fringilla tortor, et mattis nisi. Phasellus consectetur velit a est accumsan, non vestibulum odio consectetur.",
  },
  {
    title: "Service 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac fringilla tortor, et mattis nisi. Phasellus consectetur velit a est accumsan, non vestibulum odio consectetur.",
  },
  {
    title: "Service 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac fringilla tortor, et mattis nisi. Phasellus consectetur velit a est accumsan, non vestibulum odio consectetur.",
  },
]);
</script>

<style scoped></style>
