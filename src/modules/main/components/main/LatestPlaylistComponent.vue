<template>
    <div>
        <h2 class="font-extrabold text-4xl text-neutral-200 text-left px-4">¡{{ greet() +' '+ userName }}!</h2>
    </div>
    <div class="grid md:grid-cols-2 gap-5 lg:grid-cols-3 p-4 mt-4">
        <div class="flex rounded-lg bg-white opacity-10 w-full" v-for="item, index in lists" :key="index">
            <div class="w-24">
                <img :src="item.image" class="rounded-s-lg opacity-100" alt="list image">
            </div>
            <div>
                <h3>{{ item.name }}</h3>
            </div>
        </div>
    </div>
</template>
<script>
import useAuth from '../../../auth/composables/useAuth'

export default {


    setup() {
        const {userName} = useAuth()

        const lists = [
            {
                name: 'List',
                image: 'https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/sky-in-flames-jules-photography.jpg?&targetx=-86&targety=-5&imagewidth=1420&imageheight=800&modelwidth=952&modelheight=800&backgroundcolor=000000&orientation=1&producttype=blanket-coral-50-60',
                list: []
            },
            {
                name: 'List',
                image: 'https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/sky-in-flames-jules-photography.jpg?&targetx=-86&targety=-5&imagewidth=1420&imageheight=800&modelwidth=952&modelheight=800&backgroundcolor=000000&orientation=1&producttype=blanket-coral-50-60',
                list: []
            },
            {
                name: 'List',
                image: 'https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/sky-in-flames-jules-photography.jpg?&targetx=-86&targety=-5&imagewidth=1420&imageheight=800&modelwidth=952&modelheight=800&backgroundcolor=000000&orientation=1&producttype=blanket-coral-50-60',
                list: []
            },
            {
                name: 'List',
                image: 'https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/sky-in-flames-jules-photography.jpg?&targetx=-86&targety=-5&imagewidth=1420&imageheight=800&modelwidth=952&modelheight=800&backgroundcolor=000000&orientation=1&producttype=blanket-coral-50-60',
                list: []
            },
            {
                name: 'List',
                image: 'https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/sky-in-flames-jules-photography.jpg?&targetx=-86&targety=-5&imagewidth=1420&imageheight=800&modelwidth=952&modelheight=800&backgroundcolor=000000&orientation=1&producttype=blanket-coral-50-60',
                list: []
            },
            {
                name: 'List',
                image: 'https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/sky-in-flames-jules-photography.jpg?&targetx=-86&targety=-5&imagewidth=1420&imageheight=800&modelwidth=952&modelheight=800&backgroundcolor=000000&orientation=1&producttype=blanket-coral-50-60',
                list: []
            }
        ]

        const greet = () => {
            const timeOfDay = new Date().getHours()
            if (timeOfDay > 5 && timeOfDay < 12) return 'Buenos dias '
            if (timeOfDay > 13 && timeOfDay < 18) return 'Buenas tardes'
            return 'Buenas noches '
        }

        return {
            userName,
            greet,
            lists
        }
    }
}
</script>
<style></style>