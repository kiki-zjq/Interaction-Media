<template>
    <div class="block">
        <h2>{{language=='Chinese'?'课前测试':'Pre-Course Test'}}</h2>
        <!-- <div class="divider"></div> -->

            <!-- <Card
                v-for = "(q,index) in questions"
                :key = "index"
                :class = "index"
                :question='questions[index]'
                :answers='answers[index]' 
                :correct='corrects[index]' 
                @next='handleNext'
            /> -->
            <Card
                v-if = this.isTest
                class='card'
                :percentage='percentage'
                :question='questions[this.index]'
                :answers='answers[this.index]' 
                :correct='corrects[this.index]' 
                :description='descriptions[this.index]'
                @next='handleNext'
                @result='handleResult'
            />

            <resultCard
                v-if = !this.isTest
                @check = "drawer=true"
            />
        <!---------------------------------------------------------------->
        <!-- <transition name='el-zoom-in-center'>
            <Card
                v-show='show1' 
                :question='questions[1]'
                :answers='answers[1]' 
                :correct='corrects[1]' 
                @next='handleNext'
            />
        </transition> -->
        <el-drawer
            title="我是标题"
            :visible.sync="drawer"
            :with-header="false"
            size = "40%">
            <span>我来啦!</span>

            <div style='margin:40px'>
                <checkCard
                    v-for = "(q,index) in questions"
                    :key = "index"
                    :question='questions[index]'
                    :answers='answers[index]' 
                    :correct='corrects[index]' 
                />
                
            </div>
        </el-drawer>

</div>
</template>

<script>
import Card from './components/Card';
import resultCard from './components/resultCard';
import checkCard from './components/checkCard';

export default {
    components:{
        Card,
        resultCard,
        checkCard
    },
    data() {
      return {
        drawer:false,
        isTest:true,
        percentage:10,
        know:[],
        index:0,
        corrects:[
            1,2,3
        ],
        questions:[
            '1.这是一个很简单的问题',
            '2.这是一个不简单的问题',
            '3.这是一个很不简单的问题',
        ],
        answers:[
            //第一题
            ['A. 1',
             'B. 2',
             'C. 3',
             'D. 4'
            ],
            //第二题
            ['A. 5',
             'B. 6',
             'C. 7',
             'D. 8'
            ],
            //第三题
            ['A. 9',
             'B. 10',
             'C. 11',
             'D. 12'
            ]
        ],
        descriptions:[
            '解析1：这一题选2，笨比',
            '解析2：这一题选3，笨比',
            '解析3：这一题选4，笨比',
        ]
      };
    },
    methods:{
        handleNext(prop){
            //this['show'+this.index]=false;
            this.know[this.index] = prop;
            
                this.index += 1;
                this.percentage+=10;
            
            
            //this['show'+this.index]=true;
            // $('.card').slideUp("1500",()=>{
            //     this.index += 1;
            //     $('.card').slideDown("1500")
            // });
        },
        handleResult(prop){
            this.know[this.index] = prop;
            console.log(this.know);
            this.isTest = false;
            this.$store.commit('changeKnow',this.know)
        }
    },
    mounted(){
        this.index = 0;
    },
    computed:{
        language:function(){
            return this.$store.state.language
        }
    }
  };
</script>

<style>
.block{
    text-align: left;
    margin-bottom: 200px;
}
.block h2{
        width:fit-content;
        display: inline-block;
        padding:2px 12px 4px;
        border-bottom: 4px #FF4F4F solid;
    }
.radio{
    margin-top:5%;
    margin-bottom: 5%;
    font-family: Microsoft JhengHei;
}
.divider{
        background-color: #FF4F4F;
        height: 4px;
        width: 230px;
        margin-top: -18px;
    }
.block .activity-content{
    font-size:14px;
    line-height:24px;
    margin-bottom:-20px;
}

.el-drawer__body {
    overflow: auto;
    /* overflow-x: auto; */
}

/*2.隐藏滚动条，太丑了*/
.el-drawer__container ::-webkit-scrollbar{
    display: none;
}
</style>