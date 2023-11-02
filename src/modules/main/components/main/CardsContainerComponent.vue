<template>
    <div>
        <h3>{{ title }}</h3>
    </div>
    <div>
        <card-component/>
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    components:{
      'card-component': defineAsyncComponent(()=> /* webpackChunkName: 'card component' */ import('./includes/CardComponent.vue'))  
    },
    props: {
        title: {
            type: String
        }
    }
}
</script>
<style >
    
</style>