<template>
    <div>
        Product Details For {{ id }}
    </div>
</template>

<script setup>
    const { id } = useRoute().params;
    definePageMeta({
    layout: 'products'
})
</script>

<style scoped>

</style>