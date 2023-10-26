<template>
    <div class="my-4 divide-y space-y-4 divide-gray-600">
        <div>
            <h2 class="font-black text-4xl md:text-5xl  text-left">Regístrate para empezar a escuchar contenido</h2>
        </div>
        <div class="grid grid-cols-1 mt-6">
            <form @submit="onSubmit" novalidate>
                <div class="my-2 text-left text-base md:text-lg text-gray-200 w-full">
                    <!-- Name -->
                    <label class="font-semibold block" for="name">Name</label>
                    <input input="text"
                        class="form-input  focus:border-green-600 hover:border-green-600 active:border-green-600 px-4 py-3 rounded-lg bg-black placeholder-gray-300  w-full"
                        placeholder="Name" name="name" v-bind="name" />
                    <span v-if="errors.name" class="text-red-400 mt-1 flex"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-7 h-7 fill-red-400 stroke-black stroke-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        {{ errors.name }}</span>
                </div>
                <!-- Email -->
                <div class="my-2 text-left text-base md:text-lg text-gray-200 w-full">
                    <label class="font-semibold block" for="email">Email</label>
                    <input type="email"
                        class="form-input focus:border-green-600 hover:border-green-600 active:border-green-600 px-4 py-3 rounded-lg bg-black placeholder-gray-300 w-full"
                        placeholder="Email" v-bind="email">
                    <span v-if="errors.email" class="text-red-400 mt-1 flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-7 h-7 fill-red-400 stroke-black stroke-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        {{ errors.email }}</span>
                </div>
                <!-- Password -->
                <div class="my-2 text-left text-base md:text-lg text-gray-200 w-full">
                    <label class="font-semibold block" for="password">Password</label>
                    <input type="password"
                        class="form-input focus:border-green-600 hover:border-green-600 active:border-green-600 px-4 py-3 rounded-lg bg-black placeholder-gray-300 w-full"
                        placeholder="Password" name="password" v-bind="password" />
                    <span v-if="errors.password" class="text-red-400 mt-1 flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-7 h-7 fill-red-400 stroke-black stroke-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        {{ errors.password }}</span>
                </div>
                <!-- password confirmation -->
                <div class="my-2 text-left text-base md:text-lg text-gray-200 w-full">
                    <label class="font-semibold block" for="password_confirmation">Confirm password</label>
                    <input type="password"
                        class="form-input focus:border-green-600 hover:border-green-600 active:border-green-600 px-4 py-3 rounded-lg bg-black placeholder-gray-300 w-full"
                        placeholder="Repeat the password" name="password_confirmation" v-bind="password_confirmation" />
                    <span v-if="errors.password_confirmation" class="text-red-400 mt-1 flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-7 h-7 fill-red-400 stroke-black stroke-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        {{ errors.password_confirmation }}</span>
                </div>
                <!-- Birth day -->
                <div class="my-2 text-left text-base md:text-lg text-gray-200 w-full">
                    <label class="font-semibold block" for="birth_day">Birth day</label>
                    <input type="date"
                        class="form-input focus:border-green-600 hover:border-green-600 active:border-green-600 px-4 py-3 rounded-lg bg-black placeholder-gray-300 w-full"
                        name="birth_day" v-bind="birth_day" />
                    <span v-if="errors.birth_day" class="text-red-400 mt-1 flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-7 h-7 fill-red-400 stroke-black stroke-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        {{ errors.birth_day }}</span>
                </div>
                <button type="submit"
                    class="bg-green-600 focus:bg-green-700 hover:bg-green-700 my-2 text-base md:text-lg border border-green-900 text-black font-semibold w-full rounded-full py-3">Submit</button>
            </form>
        </div>
        <div>
            <p class="text-base md:text-lg"><span class="text-gray-500">¿Ya tienes una cuenta? <router-link class="text-white" :to="{name: 'login'}">Inicia sesion aqui.</router-link></span></p>
        </div>
    </div>
</template>
<script>
import { useForm } from 'vee-validate';
import * as yup from 'yup';

export default {
    setup() {
        const { values, defineInputBinds, handleSubmit, errors } = useForm({
            validationSchema: yup.object({
                name: yup.string().required(),
                email: yup.string().email(),
                password: yup.string().required(),
                password_confirmation: yup.string().required(),
                birth_day: yup.date().required()
            })
        })

        const name = defineInputBinds('name');
        const email = defineInputBinds('email');
        const password = defineInputBinds('password');
        const birth_day = defineInputBinds('birth_day');
        const password_confirmation = defineInputBinds('password_confirmation');

        const onSubmit = handleSubmit(values => {
            alert(JSON.stringify(values, null, 2));
        });

        return {
            name,
            email,
            password,
            birth_day,
            values,
            errors,
            password_confirmation,
            onSubmit
        }
    }
}
</script>
<style scoped>
::-webkit-calendar-picker-indicator{
    background-color: #16a34a;
    padding: 5px;
    cursor: pointer;
    border-radius: 3px;
}
</style>