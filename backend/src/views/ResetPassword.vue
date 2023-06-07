<template>
    <FormLayout title="Reset Password" @sumbit="login">
        <input type="hidden" name="remember" value="true"/>
        <div class="-space-y-px rounded-md shadow-sm">
            <div>
                <label for="new-password" class="sr-only">New password</label>
                <input id="new-password" name="new-password" type="password" autocomplete="current-password" required=""
                       class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                       placeholder="New Password"/>
            </div>
            <div>
                <label for="password" class="sr-only">Confirm Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required=""
                       class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                       placeholder="Confirm Password"/>
            </div>
        </div>
        <div class="flex items-center justify-between">
            <div class="text-sm">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Remember password?</a>
            </div>
        </div>
        <div>
            <button type="submit"
                    class="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>
            </span>
                Reset
            </button>
        </div>
    </FormLayout>
</template>

<script setup>
import {LockClosedIcon} from '@heroicons/vue/20/solid'
import FormLayout from "../components/FormLayout.vue";


function login(){
    console.log('login form')
}

</script>
<style scoped>

</style>
