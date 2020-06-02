<template>

    <div class='ObjectContent'>
        <h2>Java 面向对象</h2>
    
        <!---------------------------------------------------------->
        <div class='sub-title first-title'>
            对象和类
        </div>

        <span style='margin-left:30px'>本章节我们重点介绍对象和类的概念</span>
        <ul style='margin-left:30px;line-height:35px'>
            <li><b>对象：</b> 对象是类的一个实例，有状态和行为。例如，一条狗是一个对象，它的状态有：颜色、名字、品种；行为有：摇尾巴等。</li>
            <li><b>类：</b> 类是一个模板，它描述一类对象的行为和状态。</li>
        </ul>
        
        <span style='margin-left:30px'>下图中男孩（boy）、女孩（girl）为<b>类（class）</b>，而具体的每个人为该类的<b>对象（object）</b>：</span>
        <div style="margin:10px 0 0 40px;"><img src='./object.png'/></div>
        
        
        

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(1)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(1)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(1)'></el-button>
        </div>

        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title second-title'>
            构造方法
        </div>

        <span style='margin-left:30px'>每个类都有构造方法。如果没有显式地为类定义构造方法，Java编译器将会为该类提供一个默认构造方法。</span><br/>
        <span style='margin-left:30px'>在创建一个对象的时候，至少要调用一个构造方法。构造方法的名称必须与类同名，一个类可以有多个构造方法。</span><br/>
        <span style='margin-left:30px'>下面是一个构造方法示例：</span><br/>

        <div class = 'code-block'>
            <span> <span style="color:#FF75B5">public class </span> <span style='color:#FFB86C'>Puppy</span> {</span><br/>
            <br />
            <span style='margin-left:20px'><span style="color:#FF75B5">public</span>
            <span style='color:#FFB86C'>Puppy</span> ( <span style='color:#19F9D8'></span><span style='color:#B6B6B6'>&nbsp;</span> ) {</span><br/>        
                <span style='margin-left:40px;color:#67AB7D'>// Default Constructor</span>
                <br/>
            <span style='margin-left:20px'>}</span><br/>

            <span style='margin-left:20px'><span style="color:#FF75B5">public</span>
            <span style='color:#FFB86C'>Puppy</span> ( <span style='color:#19F9D8'></span><span style='color:#B6B6B6'>
                <span style='color:#19F9D8'>String</span> name</span> ) {</span><br/>        
                <span style='margin-left:40px;color:#67AB7D'>// Constructor with a parameter</span>
                <br/>
            <span style='margin-left:20px'>}</span><br/>

            <br/>
            <span>}</span><br/>
        </div>

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(2)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(2)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(2)'></el-button>
        </div>

        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title third-title'>
            创建对象
        </div>

        <span style='margin-left:30px'>对象是根据类创建的。在Java中，使用关键字new来创建一个新的对象。创建对象需要以下三步：</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li><b>声明：</b>声明一个对象，包括对象名称和对象类型。</li>
            <li><b>实例化：</b>使用关键字new来创建一个对象。</li>
            <li><b>初始化：</b>使用new创建对象时，会调用构造方法初始化对象。</li>
        </ul>
        <span style='margin-left:30px'>下面是一个创建对象的例子：</span><br/>
        <div class = 'code-block'>
            <span> <span style="color:#FF75B5">public class </span> <span style='color:#FFB86C'>Puppy</span> {</span><br/>
            <br />
            <span style='margin-left:20px'><span style="color:#FF75B5">public</span>
            <span style='color:#FFB86C'>Puppy</span> ( <span style='color:#19F9D8'></span><span style='color:#B6B6B6'>&nbsp;</span> ) {</span><br/>        
                <span style='margin-left:40px;color:#67AB7D'>// Default Constructor</span>
                <br/>
            <span style='margin-left:20px'>}</span><br/>

            <span style='margin-left:20px'><span style="color:#FF75B5">public</span>
            <span style='color:#FFB86C'>Puppy</span> ( <span style='color:#19F9D8'></span><span style='color:#B6B6B6'>
                <span style='color:#19F9D8'>String</span> <span style="color:#FFF273">name</span></span> ) {</span><br/>        
                <span style='margin-left:40px;color:#67AB7D'>// Constructor with a parameter</span><br />
                <span style='margin-left:40px;color:#FFB86C'>System.out.println</span>( "<span style='color:#B6B6B6'>Dog name is: </span>" + <span style="color:#FFF273">name</span> ) ; 
                <br/>
            <span style='margin-left:20px'>}</span><br/><br/>

            <span style='margin-left:20px'><span style="color:#FF75B5">public</span>
            <span style='color:#19F9D8'> static void</span> <span style='color:#FFB86C'>main</span> ( <span style='color:#19F9D8'>String</span>[ ] 
            <span style='color:#FFF273'>args</span> ) {</span><br/>
            <span style='margin-left:40px;color:#67AB7D'>// Create a Puppy object</span><br />
            <span style='margin-left:40px'>
                <span style='color:#FFB86C'>Puppy </span>
                <span style='color:#FFF273'>myPuppy</span> =
                <span style='color:#19F9D8'>new</span> <span style='color:#FFB86C'>Puppy </span>("<span style='color:#B6B6B6'>Tom</span>") ; 
                </span><br/>
            <span style='margin-left:20px'>}</span><br/>
            <br/>
            <span>}</span><br/>
        </div>


        <span style='margin-left:30px'>编译并运行上面的程序，会打印出下面的结果：</span><br/>
        <div class='code-block'>
            
            <span>Dog name is: Tom</span>
        </div>
        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(3)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(3)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(3)'></el-button>
        </div>
        <el-divider></el-divider>


        <!---------------------------------------------------------->
        <!-- <div class='sub-title forth-title'>
            接口和子类
        </div>

        <span style='margin-left:30px'>类似于 C/C++、Java 也支持单行以及多行注释。注释中的字符将被 Java 编译器忽略。</span><br/>

        <div class = 'code-block'>
            <span> <span style="color:#FF75B5">public class </span> <span style='color:#FFB86C'>HelloWorld</span> {</span><br/>
            <br />
            
            <span style='margin-left:20px'><span style="color:#67AB7D">/* 这是第一个Java程序</span></span><br/>
            <span style='margin-left:24px'><span style="color:#67AB7D"> * 它将打印Hello World</span></span><br/>
            <span style='margin-left:24px'><span style="color:#67AB7D"> * 这是一个多行注释的示例</span></span><br/>
            <span style='margin-left:24px'><span style="color:#67AB7D"> * /</span></span><br/>
            
            <span style='margin-left:20px'><span style="color:#FF75B5">public</span>
            <span style='color:#19F9D8'> static void</span> <span style='color:#FFB86C'>main</span> ( <span style='color:#19F9D8'>String</span>
             [ ]<span style='color:#B6B6B6'>args</span> ) {</span><br/>

            <br />
            <span style='margin-left:40px'><span style="color:#67AB7D"> // 这是单行注释的事例</span></span><br/>
            <span style='margin-left:40px'><span style="color:#67AB7D"> /* 这个也是单行注释的事例 */</span></span><br/>
            <br />

            <span style='margin-left:40px'>
                <span style='color:#FFB86C'>System.out.println</span>( "<span style='color:#B6B6B6'>Hello World</span>" ) ; 
                <span style='color:#67AB7D'>// 打印 Hello World</span></span><br/>
            <span style='margin-left:20px'>}</span><br/>
            <br/>
            <span>}</span><br/>
        </div>

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(4)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(4)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(4)'></el-button>
        </div> -->

        <!---------------------------------------------------------->

        
        <div class='end-block'>
            
            <el-button type="danger" @click="dialogVisible = true" round>本章报告</el-button>
            <el-button type="warning" @click="testVisible = true" round>章节小测</el-button>
            <el-button type="success" @click="nextPage()" round>下一章</el-button>
        </div>
        <!---------------------------------------------------------->

        <el-dialog
            title="本章报告"
            :visible.sync="dialogVisible"
            width="30%"
            >
            <div v-if='know.length!=0||unknow.length!=0'>
                <span v-if='know.length!=0'>
                <b>本章已会:</b> <span style='font-weight:bold;color:#67C23A;margin-right:1em' v-for="(k,index) in know" :key="index">{{k}} </span>
                </span>
                <br /><br />

                <span v-if='unknow.length!=0'>
                <b>本章重点:</b> <span style='font-weight:bold;color:#E6A23C;margin-right:1em' v-for="(u,index) in unknow" :key="index">{{u}} </span>
                </span>
            </div>

            <div v-if='know.length==0&&unknow.length==0'>
                <b>本章还没有进行标记噢！赶快开始本章学习吧~</b>
            </div>

            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
            </el-dialog>

        <!---------------------------------------------------------->
        <el-dialog
            title="章节小测"
            :visible.sync="testVisible"
            width="30%"
            :before-close="handleClose"
            >
            <el-card class="box-card">
                <div class="test-question">
                    <b>Q: 对象和类之间有什么关系？</b>
                </div>
                
                <div class="test-select" style='margin:20px 0'>
                    <el-radio v-model="select" label="1" style='display:block;line-height:36px;'>对象就是类</el-radio>
                    <el-radio v-model="select" label="2" style='display:block;line-height:36px;'>二者并没有任何关联</el-radio>
                    <el-radio v-model="select" label="3" style='display:block;line-height:36px;'>类是一个模板，它描述一类对象的行为和状态。</el-radio>
                </div>

                <div class="test-confirm" style='text-align:right'>
                    <el-button type="primary" @click="testAnswer" >确 定</el-button>
                </div>

            </el-card>

        </el-dialog>

    </div>

</template>



<script>
export default {
     data() {
      return {
        select:-1,
        dialogVisible: false,
        testVisible: false,
        know : [],
        unknow:[],
      };
    },

    methods:{
        clickKnow(value){

            switch(value){
                case 1:$('.first-title').css('background-color','#67C23A');this.knowPush("对象和类");break;
                case 2:$('.second-title').css('background-color','#67C23A');this.knowPush("构造方法");break;
                case 3:$('.third-title').css('background-color','#67C23A');this.knowPush("创建对象");break;
                case 4:$('.forth-title').css('background-color','#67C23A');this.knowPush("接口和子类");break;
            }

            this.know = Array.from(new Set(this.know))

            this.$notify({
                title: '成功',
                message: '您已将此节标记为已学会',
                type: 'success'
            });
        },

        clickUnknow(value){

            switch(value){
                case 1:$('.first-title').css('background-color','#E6A23C');this.unknowPush("对象和类");break;
                case 2:$('.second-title').css('background-color','#E6A23C');this.unknowPush("构造方法");break;
                case 3:$('.third-title').css('background-color','#E6A23C');this.unknowPush("创建对象");break;
                case 4:$('.forth-title').css('background-color','#E6A23C');this.unknowPush("接口和子类");break;
            }

            this.unknow = Array.from(new Set(this.unknow))

            this.$notify({
                title: '重点',
                message: '您已将此节标记为重点',
                type: 'warning'
            });
        },

        knowPush(value){
            this.know.push(value)
            if(this.unknow.indexOf(value)!=-1){
                this.unknow.splice(this.unknow.indexOf(value),1);
            }
        },
        unknowPush(value){
            this.unknow.push(value)
            if(this.know.indexOf(value)!=-1){
                this.know.splice(this.know.indexOf(value),1);
            }
        },
        testAnswer(){
            if(this.select==3){
                this.$message({
                    message: '恭喜你，回答正确',
                    type: 'success'
                });
            }else{
                 this.$message.error('回答错误');
            }
        },
        handleClose(){
            this.select = -1;
            this.testVisible = false;
        },
        clickNote(value){
            switch(value){
                case 1:this.$emit('note','对象和类');break;
                case 2:this.$emit('note','构造方法');break;
                case 3:this.$emit('note','创建对象');break;
                case 4:this.$emit('note','接口和子类');break;
            }
        },
        nextPage(){
            this.$router.push('/JavaSE/DataStructure#header');
        }

    },
}
</script>


<style scoped>
    .ObjectContent{
        text-align:left;
    }

    .ObjectContent h2{
        width:fit-content;
        display: inline-block;
        padding:2px 12px 4px;
        border-bottom: 4px #FF4F4F solid;
    }
    
    .sub-title{
        margin-top:5%;
        margin-bottom: 5%;
        padding-left:2em;
        padding-right:2em;
        font-weight: bold;
        font-size:20px;
        width:fit-content;
        background-color:#FAFAFA;
        height:2em;
        line-height:2em;
        border-radius:20px;
    }

    .code-block{
        color:white;
        margin-top:20px;
        margin-left:20px;
        margin-bottom: 20px;
        min-height:100px;
        width:80%;
        background-color: #292A2B;
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
        border-radius: 15px;
        padding:16px;
        font-size:15px;
        line-height:1.5;
        font-family: Inter, system-ui, sans-serif;
    }

    .mark-block{
        width:80%;
        margin-top:50px;
        margin-left:20px;
        margin-bottom: 20px;
        text-align: end
    }
    .end-block{
        width:80%;
        margin-top:50px;
        margin-left:20px;
        margin-bottom: 100px;
        text-align: center
    }
</style>