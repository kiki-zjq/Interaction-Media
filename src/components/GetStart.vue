<template>
    <div class="wrapper">
        <div id="started" @click='handleClick' >
            Get Started
            <i class="el-icon-bottom"></i>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           
        }
    },
    methods:{
        handleClick(){
            this.$router.push('/#anchor');
        }
    }
}
$(window).scroll( function() {
        if(document.documentElement.scrollTop>=100){
            $("#started").fadeOut(500);
           //console.log(document.documentElement.scrollTop);
        }
        else{
            $("#started").fadeIn(500);
        }
    } );//这一段以后优化一下，加一个回调函数让他不要一直在那里判断

</script>
<style scoped>
    .wrapper{
        width:100%;
        height:13vh;
        text-align: center;
        line-height: 3em;
        padding-top:5vh;
    }
    #started{
        font-size:40px;
        font-weight: bold;
        cursor: pointer;
        animation:bounce 2s infinite;
      
    }

    @keyframes bounce {
        from,
        20%,
        53%,
        80%,
        to {
            -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }

        40%,
        43% {
            -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            -webkit-transform: translate3d(0, -30px, 0);
            transform: translate3d(0, -40px, 0);
        }

        70% {
            -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            -webkit-transform: translate3d(0, -15px, 0);
            transform: translate3d(0, -20px, 0);
        }

        90% {
            -webkit-transform: translate3d(0, -4px, 0);
            transform: translate3d(0, -10px, 0);
        }
        }
</style>