<template>
    <div>
        <h2 class="font-black text-4xl md:text-5xl  text-left">Inicia sesion en spotify</h2>
    </div>
    <div class="grid grid-cols-1">
        <form @submit="on_submit" novalidate>

            <!-- Email -->
            <div class="my-5 text-left text-base md:text-lg text-gray-200 w-full">
                <label class="font-semibold block after:content-['*'] after:ml-0.5 after:text-red-500"
                    for="email">Email</label>
                <input type="email" id="email"
                    class="form-input focus:border-green-600 hover:border-green-600 focus:ring-black active:border-green-600 px-4 py-3 rounded-lg bg-black placeholder-gray-300 w-full"
                    placeholder="Email" v-bind="email">
                <span v-if="errors.email" class="text-red-400 mt-1 flex items-center"><svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-7 h-7 fill-red-400 stroke-black stroke-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    {{ errors.email }}</span>
            </div>
            <!-- Password -->
            <div class="my-5 text-left text-base md:text-lg text-gray-200 w-full">
                <label class="font-semibold block after:content-['*'] after:ml-0.5 after:text-red-500"
                    for="password">Password</label>
                <div class="flex gap-2">
                    <input :type="type_field"
                        class="form-input w-full focus:border-green-600 hover:border-green-600 focus:ring-black active:border-green-600 px-4 py-3 rounded-lg bg-black placeholder-gray-300"
                        placeholder="Password" name="password" v-bind="password" id="password" />
                    <button type="button" @click="toggle_password_visibility"
                        class="flex justify-center px-3 hover:bg-green-700 bg-green-600 rounded-lg items-center">
                        <svg v-if="is_password_hide" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                    </button>
                </div>
                <span v-if="errors.password" class="text-red-400 mt-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-7 h-7 fill-red-400 stroke-black stroke-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    {{ errors.password }}</span>
                <template v-if="backend_errors">
                    <span class="text-red-400 mt-1 flex items-center" v-for="error, index in backend_errors['password']"
                        :key="index">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-7 h-7 fill-red-400 stroke-black stroke-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        {{ error }}</span>
                </template>
            </div>
            <div class="my-5 text-left text-base flex items-center gap-2 md:text-lg text-gray-200 w-full">
                <input type="checkbox"
                    class="form-checkbox focus:ring-black checked:bg-green-600 hover:border-green-600 active:border-green-600 px-4 py-3 rounded-lg text-green-600 bg-black"
                    v-model="remember_me" id="remember_me">
                <label class="font-semibold  hover:text-green-600" for="remember_me">Recuerdame </label>
            </div>
            <template v-if="backend_errors">
                <span v-if="backend_errors['credentials']" class="text-red-400 mt-1 flex text-sm items-center" :key="index">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-7 h-7 fill-red-400 stroke-black stroke-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    {{ backend_errors['credentials'] }}</span>
            </template>
            <button type="submit" :disabled="is_loading" :class="is_loading ? 'bg-gray-200' : 'bg-green-600 focus:bg-green-700 hover:bg-green-700'"
                class="  my-2 text-base md:text-lg border border-green-900 text-black font-semibold w-full rounded-full py-3">Iniciar
                sesion</button>
        </form>
    </div>
    <div>
        <p class="text-base my-5 md:text-lg"><span class="text-gray-500">¿No tienes una cuenta? <router-link
                    class="text-white" :to="{ name: 'register' }">Registrate en spotify.</router-link></span></p>
    </div>
</template>
<script>
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

import useAuth from '../composables/useAuth'
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter()
        const { values, defineInputBinds, handleSubmit, errors } = useForm({
            validationSchema: yup.object({
                email: yup.string().email().required(),
                password: yup.string().required(),
            })
        })


        const { signInUser } = useAuth()

        const email = defineInputBinds('email');
        const password = defineInputBinds('password');
        const remember_me = ref(false);
        const backend_errors = ref(null)



        const is_password_hide = ref(true)
        const type_field = ref('password')

        const is_loading = ref(false)

        const loginUser = async (user) => {
            is_loading.value = true
            const { status, message } = await signInUser(user);
            is_loading.value = false
            if (!status) {
                backend_errors.value = message
                return
            }
            router.push({ name: 'home' })
        }
        const on_submit = handleSubmit(values => {
            const user = { ...values }
            user.remember_me = remember_me.value
            loginUser(user)
        });

        const toggle_password_visibility = () => {
            is_password_hide.value = !is_password_hide.value
            type_field.value = is_password_hide.value ? 'password' : 'text'
        }

        return {
            backend_errors,
            email,
            errors,
            is_loading,
            is_password_hide,
            on_submit,
            password,
            remember_me,
            toggle_password_visibility,
            type_field,
            values,
        }
    }
}
</script>