<template >
    <div class="p-3 rounded-lg text-white text-left">
        <div class="w-full rounded-lg ">
            <img :src="list.image" alt="list image" class="rounded-lg">
        </div>
        <div>
            <h3 class=" py-2 ">{{ list.name }}</h3>
            <p >{{ list.artists.join(', ').slice(20) }}...</p>
        </div>
    </div>
</template>
<script>

export default {
    props:{
        list:{
            type: Object
        }
    },
    setup(){
    }
}
</script>
<style >
    
</style>