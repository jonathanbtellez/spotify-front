<template>
    <div>
        <h2 class="font-black text-4xl md:text-5xl mt-5 text-left">Regístrate para empezar a escuchar contenido</h2>
    </div>
    <div class="grid grid-cols-1 mt-6">
        <form @submit="onSubmit" novalidate>
            <div class="my-2 text-left text-base md:text-lg text-gray-200 w-full">
                <!-- Name -->
                <label class="font-semibold block after:content-['*'] after:ml-0.5 after:text-red-500" for="name">Name</label>
                <input input="text"
                    class="form-input  focus:border-green-600 hover:border-green-600 focus:ring-black active:border-green-600 px-4 py-3 rounded-lg bg-black placeholder-gray-300  w-full"
                    placeholder="Name" name="name" v-bind="name" id="name"/>
                <span v-if="errors.name" class="text-red-400 mt-1 flex items-center"> <svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-7 h-7 fill-red-400 stroke-black stroke-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    {{ errors.name }}</span>
            </div>
            <!-- Email -->
            <div class="my-2 text-left text-base md:text-lg text-gray-200 w-full">
                <label class="font-semibold block after:content-['*'] after:ml-0.5 after:text-red-500" for="email">Email</label>
                <input type="email"
                    class="form-input focus:border-green-600 hover:border-green-600 focus:ring-black active:border-green-600 px-4 py-3 rounded-lg bg-black placeholder-gray-300 w-full"
                    placeholder="Email" v-bind="email" id="email">
                <span v-if="errors.email" class="text-red-400 mt-1 flex items-center"><svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-7 h-7 fill-red-400 stroke-black stroke-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    {{ errors.email }}</span>
            </div>
            <!-- Password -->
            <div class="my-2 text-left text-base md:text-lg text-gray-200 w-full">
                <label class="font-semibold block after:content-['*'] after:ml-0.5 after:text-red-500" for="password">Password</label>
                <div class="flex gap-2">
                    <input :type="type_field"
                        class="form-input w-full focus:border-green-600 hover:border-green-600 focus:ring-black active:border-green-600 px-4 py-3 rounded-lg bg-black placeholder-gray-300"
                        placeholder="Password" name="password" v-bind="password" id="password"/>
                    <button type="button" @click="toggle_password_visibility"
                        class="px-3 flex justify-center hover:bg-green-700 bg-green-600 rounded-lg items-center">
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
            <!-- password confirmation -->
            <div class="my-2 text-left text-base md:text-lg text-gray-200 w-full">
                <label class="font-semibold block after:content-['*'] after:ml-0.5 after:text-red-500" for="password_confirmation">Confirm password</label>
                <input type="password"
                    class="form-input focus:border-green-600 hover:border-green-600 focus:ring-black active:border-green-600 px-4 py-3 rounded-lg bg-black placeholder-gray-300 w-full"
                    placeholder="Repeat the password" id="password_confirmation" name="password_confirmation" v-bind="password_confirmation" />
                <span v-if="errors.password_confirmation" class="text-red-400 mt-1 flex items-center"><svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-7 h-7 fill-red-400 stroke-black stroke-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    {{ errors.password_confirmation }}</span>
            </div>
            <!-- Birth day -->
            <div class="my-2 text-left text-base md:text-lg text-gray-200 w-full">
                <label class="font-semibold block after:content-['*'] after:ml-0.5 after:text-red-500" for="birth_day">Birth day</label>
                <input type="date"
                    class="form-input focus:border-green-600 hover:border-green-600 focus:ring-black active:border-green-600 px-4 py-3 rounded-lg bg-black placeholder-gray-300 w-full"
                    name="birth_day" v-bind="birth_day" id="birth_day"/>
                <span v-if="errors.birth_day" class="text-red-400 mt-1 flex items-center"><svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-7 h-7 fill-red-400 stroke-black stroke-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    {{ errors.birth_day }}</span>
                <template v-if="backend_errors">
                    <span class="text-red-400 mt-1 flex items-center" v-for="error, index in backend_errors['birth_day']"
                        :key="index">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-7 h-7 fill-red-400 stroke-black stroke-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        {{ error }}</span>
                </template>
            </div>
            <button type="submit" :disabled="is_loading"
            :class="is_loading ? 'bg-gray-200' : 'bg-green-600 focus:bg-green-700 hover:bg-green-700'"
                class="y-2 text-base md:text-lg border border-green-900 text-black font-semibold w-full rounded-full py-3">Registrame</button>
        </form>
    </div>
    <div>
        <p class="text-base md:text-lg"><span class="text-gray-500">¿Ya tienes una cuenta? <router-link class="text-white"
                    :to="{ name: 'login' }">Inicia sesion aqui.</router-link></span></p>
    </div>
</template>
<script>
import { ref } from 'vue'
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import useAuth from '../composables/useAuth'
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter()
        const { values, defineInputBinds, handleSubmit, errors } = useForm({
            validationSchema: yup.object({
                name: yup.string().required(),
                email: yup.string().email().required(),
                password: yup.string().required(),
                password_confirmation: yup.string().required(),
                birth_day: yup.date().required()
            })
        })

        const { createUser } = useAuth()

        const birth_day = defineInputBinds('birth_day');
        const email = defineInputBinds('email');
        const name = defineInputBinds('name');
        const password = defineInputBinds('password');
        const password_confirmation = defineInputBinds('password_confirmation');

        const backend_errors = ref(null)
        const is_password_hide = ref(true)
        const type_field = ref('password')
        const userValidated = ref({})
        const is_loading = ref(false)

        const registerUser = async (user) => {
            is_loading.value = true
            const { status, message } = await createUser(user)
            is_loading.value = true
            if (!status) {
                backend_errors.value = message
                return
            }
            router.push({name: 'home'})
        }


        const onSubmit = handleSubmit(values => {
            userValidated.value = values
            registerUser(userValidated.value)
        });

        const toggle_password_visibility = () => {
            is_password_hide.value = !is_password_hide.value
            type_field.value = is_password_hide.value ? 'password' : 'text'
        }
        return {
            name,
            email,
            password,
            birth_day,
            values,
            errors,
            password_confirmation,
            is_loading,
            is_password_hide,
            onSubmit,
            toggle_password_visibility,
            type_field,
            backend_errors
        }
    }
}
</script>
<style scoped>
::-webkit-calendar-picker-indicator {
    background-color: #16a34a;
    padding: 5px;
    cursor: pointer;
    border-radius: 3px;
}
</style>