<template>
<div class="max-w-md mx-auto">
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <img class="w-full h-56 object-cover object-center" src="service-image.jpg" alt="Service Image">

      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
        <p class="text-gray-600">{{ description }}</p>
      </div>

      <div class="bg-gray-100 px-4 py-3">
        <a href="#" class="text-blue-500 font-semibold">Learn More</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },)

</script>

<style lang="scss" scoped>

</style>