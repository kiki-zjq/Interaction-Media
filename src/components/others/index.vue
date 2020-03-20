<template>
    <div class='others-content'>
        <h2>Others 其他</h2>
        <div class="divider"></div>
        <el-card 
        v-for="(data,index) in contents"
        :key="index"
        shadow="always" 
        class="box-card">
            <div slot="header" class="clearfix">
                <span style="font-weight:bold">{{data.title}}</span>
                <el-button style="float: right; padding: 3px 0" type='text' @click="handleClick(index)">
                    {{data.status}}
                </el-button>
            </div>
            <div :class="generateClass(index)">
                <span>{{data.content}}</span>
            </div>
        </el-card>

    </div>
</template>

<script>

export default {
    data() {
      return {
        contents:[],
      };
    },
    methods:{
        handleClick:function(index){
            this.contents[index].status=="最小化"?
            this.contents[index].status="最大化":this.contents[index].status="最小化";
            let target=".content-"+index;
            $(target).slideToggle(500);
        },
        generateClass:function(index){
            return "content-"+index;
        }
    },
    computed:{
        message:function(){
            return "最小化"
        }
    },
    mounted(){
        this.$http.get('../../static/data/others.json')
        .then((res)=>{
            //console.log(res);
            this.contents=res.data.contents;
            console.log(this.contents);
        });
    }
  }
</script>

<style scoped>
    .others-content{
        text-align:left;
    }
    .box-card{
        margin-top:5%;
    }
    .divider{
        background-color: #FF4F4F;
        height: 4px;
        width: 130px;
        margin-top: -18px;
    }
</style>