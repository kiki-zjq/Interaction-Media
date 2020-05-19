<template>
     <div id='header'>
        <CNpage v-if="language=='Chinese'" @note='handleNote'/>
        <ENpage v-if="language=='English'" @note='handleNote'/>
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
      },
      notebook:function(){
          return this.$store.state.notebook
      }
    } 
}
</script>