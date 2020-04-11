<template>
    <div class="intro-page">
        <div class="title">
            <h1 class="user-name">Java GO!</h1>
            <h2 style="margin:40px">Java Study Website</h2>
            <el-button class='top-button' type="danger" @click='handleClick(1)' round>
                {{language=='Chinese'?'课前测试':'Pre-Course Test'}}
            </el-button>
            
            <el-button class='top-button' type="danger" @click='handleClick(2)' round>
                {{language=='Chinese'?'开始学习':'Just Study It！'}}
            </el-button>
            
            <el-button class='top-button' type="success" @click='handleChange()' round>
                {{language=='Chinese'?'Change to English':'中文'}}
            </el-button>
        </div>
        <!-- <div class="logo-part">
             <img src='../../static/img/logo.png'/>
        </div> -->
        <!-- <el-avatar class='logo' :fit='cover' :size="300" src="../../static/img/logo.png"></el-avatar> -->
        <div class = 'logo'>
            <img src='../../static/img/logo.png'/>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        language:{
            type:String,
            default:'Chinese',
        }
    },
    name:'IntroPage',
    data(){
        return{

        }
    },
    methods:{
        handleClick(index){
            switch(index){
                case 1:this.$router.push('/pre-test#anchor');break;
                case 2:this.$router.push('/#anchor');break;
                case 3:this.$router.push('/resume#anchor');break;
            }
        },
        handleChange(){
            this.$store.commit('changeLanguage')
            this.$emit('changeLang')
        }
    }
}
</script>

<style scoped>
.intro-page{
    position: relative;
    margin-top:-60px;
    width:100%;
    height:85vh; 
    /* border:black 2px solid; */
    border-radius:0 0 20px 20px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.3) 1px, transparent 1px), 
                linear-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 1px) 
                rgb(54, 54, 69);
    background-size:50px 50px;
   /* min-width: 1672px; */
}

.title{
    text-align: right;
    position:relative;
    color:white;
    top:25%;
    left:-50%;
}
.user-name{
    font-size: 65px;
    font-weight: 600;
    line-height: 65px;
    font-family: system-ui,sans-serif;
}

/* .logo-part{
    position: absolute;
    top: 20%; right: 20%; 
    width:23%;
    padding-top:23%;
    height:0;
    background-color: white;
    border-radius:50%;
    text-align: center;
} */
img{
    position: absolute;
    height:auto;
    width:220px;
    top:0;
    left:0;
    transform: translate(40%,40%)
}
/* img{
    position: absolute;
    top: 25%; right: 25%; 
    height: auto;
    max-width: 200px;
} */
.logo{
    position:absolute;
    top:20%;right:20%;
    height:400px;
    width:400px;
    border-radius:50%;
    background:white;
    max-width: 400px;
}
.top-button{
    font-weight:550;
    font-size:18px;
}

@media screen and (max-width:1400px){
    .logo{
        position:absolute;
        top:25%;right:25%;
        height:300px;
        width:300px;
        border-radius:50%;
        background:white;
        max-width: 400px;
    }
    img{
        position: absolute;
        height:auto;
        width:180px;
        top:0;
        left:0;
        transform: translate(35%,35%)
    }
    .intro-page{
        min-width: 1250px;
    }
}
</style>