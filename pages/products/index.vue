<template>
    <div>
      <div>
        <p>List</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-gray-100 p-4">
          <h2 class="text-lg font-medium mb-2">First Section</h2>
          <p class="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum
            ex et sapien tincidunt, non pharetra orci elementum.
          </p>
        </div>
        <div class="bg-gray-100 p-4">
          <h2 class="text-lg font-medium mb-2">Second Section</h2>
          <p class="text-gray-600">
            Aenean bibendum nunc sit amet risus feugiat, vel venenatis felis
            rhoncus. Morbi lobortis enim quis purus posuere egestas.
          </p>
        </div>
        <div class="bg-gray-100 p-4">
          <h2 class="text-lg font-medium mb-2">Third Section</h2>
          <p class="text-gray-600">
            Duis sodales, eros quis consequat tempor, nunc nisl rhoncus mauris, ut
            fringilla felis nisl et tortor.
          </p>
        </div>
        <div class="bg-gray-100 p-4">
          <h2 class="text-lg font-medium mb-2">Fourth Section</h2>
          <p class="text-gray-600">
            Vestibulum ut est non lectus bibendum tristique. Duis in justo vitae
            ipsum feugiat luctus eget a ex.
          </p>
        </div>
        <div class="bg-gray-100 p-4">
          <h2 class="text-lg font-medium mb-2">Fifth Section</h2>
          <p class="text-gray-600">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
        </div>
        <div class="bg-gray-100 p-4">
          <h2 class="text-lg font-medium mb-2">Sixth Section</h2>
          <p class="text-gray-600">
            Suspendisse nec est euismod, efficitur odio vel, volutpat elit.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
        </div>
      </div>
      <p>Hero Dark</p>
      <section class="p-6 dark:bg-gray-800 dark:text-gray-100">
		<div class="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
			<div class="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
				<span class="block mb-2 dark:text-violet-400">Mamba design system</span>
				<h1 class="text-5xl font-extrabold dark:text-gray-50">Build it with Mamba</h1>
				<p class="my-8">
					<span class="font-medium dark:text-gray-50">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
				</p>
				<form novalidate="" action="" class="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
					<div>
						<label for="name" class="text-sm sr-only">Your name</label>
						<input id="name" type="text" placeholder="Your name" class="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700">
					</div>
					<div>
						<label for="lastname" class="text-sm sr-only">Email address</label>
						<input id="lastname" type="text" placeholder="Email address" class="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700">
					</div>
					<button type="button" class="w-full py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Join the waitlist</button>
				</form>
			</div>
			<img src="https://source.unsplash.com/random/480x360" alt="" class="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500">
		</div>
	</section>


    </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-4">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div class="mt-2">
            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <!-- <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span> -->
              <input v-model="username" type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
            </div>
          </div>
        </div>
    </div>
    <div class="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
    <button @click="setProfile" type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { db } from "~/server/lib/firebase";
import { doc, setDoc } from "firebase/firestore"; 
const PROFILES = "profiles"
definePageMeta({
    layout: 'products'
})

const username = ref("")

const setProfile = () => {
    try {
        const profileRef = doc(db, PROFILES, 'uid');
        setDoc(profileRef, { username: username.value }, { merge: true });
     
    } catch (error) {
        alert("error", error);
    }

    alert("Success");
}
</script>

<style scoped>

</style>