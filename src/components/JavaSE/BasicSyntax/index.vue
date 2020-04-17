<template>
    <div>
        <CNpage v-if="language=='Chinese'"/>
        <ENpage v-if="language=='English'"/>
    </div>
</template>

<script>
import CNpage from './CNpage.vue'
import ENpage from './ENpage.vue'

export default {
    components:{
        CNpage,
        ENpage,
    },   
    computed:{
      language:function(){
          return this.$store.state.language
      }
    } 
}
</script>