<template>
    <div class="my-4">
        <div class="font-black text-5xl text-left">
            Regístrate para empezar a escuchar contenido
        </div>
        <div class="grid grid-cols-1">
            <form @submit="onSubmit">
                <div>
                    <label for="name">Name</label>
                    <input name="name" v-bind="name" />
                    <span>{{ errors.name }}</span>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input name="email" v-bind="email" />
                    <span>{{ errors.email }}</span>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input name="password" v-bind="password" />
                    <span>{{ errors.password }}</span>
                </div>
                <div>
                    <label for="birth_day">Birth day</label>
                    <input name="birth_day" v-bind="birth_day" />
                    <span>{{ errors.birth_day }}</span>
                </div>
                <button type="submit">Submit</button>
            </form>
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
                birth_day: yup.date().required()
            })
        })

        const name = defineInputBinds('name');
        const email = defineInputBinds('email');
        const password = defineInputBinds('password');
        const birth_day = defineInputBinds('birth_day');

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
            onSubmit
        }
    }
}
</script>
<style></style>