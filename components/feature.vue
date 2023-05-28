<template>
	<section class="dark:text-gray-100">
		<div class="container p-4 mx-auto my-6 space-y-1 text-center">
			<span class="text-xs font-semibold tracking-wider uppercase dark:text-violet-400">shortcut to your dream ui</span>
			<h2 class="pb-3 text-3xl font-bold md:text-4xl dark:text-gray-700">Create a stylish website in minutes</h2>
			<p class="dark:text-gray-700">Get a jumpstart to creating your new webpage! With our fully responsive and carefully styled components you can get the structure of your website done with just a couple of clicks.</p>
		</div>
		<div class="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-3">
			<div class="flex flex-col px-8 py-6" v-for="(service, index) in lists" :key="index" >
				<h2 class="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-600">{{service.title}}</h2>
				<p class="flex-1 mb-4 text-base leading-relaxed dark:text-gray-800">{{service.description}}</p>
				<a class="inline-flex items-center space-x-2 text-sm dark:text-violet-400" href="/components">
					<span>Learn More</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
						<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
					</svg>
				</a>
			</div>

		</div>
	</section>
</template>

<script setup>
const props = defineProps({
    lists:{
        type: Array,
        required: true
    }
})

</script>

<style lang="scss" scoped>

</style>