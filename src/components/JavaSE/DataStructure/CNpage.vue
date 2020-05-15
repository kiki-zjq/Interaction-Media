<template>

    <div class='ObjectContent'>
        <h2>Java 数据结构</h2>
    
        <!---------------------------------------------------------->
        <div class='sub-title first-title'>
            数组
        </div>

        <span style='margin-left:30px'>数组对于每一门编程语言来说都是重要的数据结构之一，当然不同语言对数组的实现及处理也不尽相同。</span><br/>
        <span style='margin-left:30px'>Java 语言中提供的数组是用来存储固定大小的同类型元素。</span><br/>
        <span style='margin-left:30px'>你可以声明一个数组变量，如 numbers[100] 来代替直接声明 100 个独立变量 number0，number1，....，number99。</span><br/>
        <el-divider></el-divider>
        <span style='margin-left:30px;font-size:18px;font-weight:bold'>声明数组变量</span><br/><br/>

        <span style='margin-left:30px'>首先必须声明数组变量，才能在程序中使用数组。下面是声明数组变量的语法：</span><br/>
        
        <div class='code-block'>
            <span style="color:#FFB86C">dataType</span>[ ] <span style="color:#FFF273"> arrayRefVar</span> ;
            <span style='color:#67AB7D'>// The better way!</span><br/>
            <span style='color:#B6B6B6'>or</span><br />
            <span style="color:#FFB86C">dataType</span> <span style="color:#FFF273"> arrayRefVar</span> [ ] ;
            <span style='color:#67AB7D'>// Not so good!</span><br/>
        </div><br />

        <el-divider></el-divider>
        <span style='margin-left:30px;font-size:18px;font-weight:bold'>创建数组</span><br/><br/>

        <span style='margin-left:30px'>Java语言使用new操作符来创建数组，语法如下：</span><br/>
        <div class='code-block'>
            <span style="color:#FFF273"> arrayRefVar</span> = <span style='color:#19F9D8'>new</span> <span style="color:#FFB86C">dataType</span>
            [ <span style='color:#B6B6B6'>arraySize</span> ] ;
        </div><br />
        

        <span style='margin-left:30px'>上面的语法语句做了两件事：</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li>使用 dataType[arraySize] 创建了一个数组。</li>
            <li>把新创建的数组的引用赋值给变量 arrayRefVar。</li>
        </ul>

        <span style='margin-left:30px'>数组变量的声明，和创建数组可以用一条语句完成，如下所示：</span><br/>
        <div class='code-block'>
            <span style="color:#FFB86C">dataType</span> [ ] <span style="color:#FFF273"> arrayRefVar</span> = <span style='color:#19F9D8'>new</span> <span style="color:#FFB86C">dataType</span>
            [ <span style='color:#B6B6B6'>arraySize</span> ] ;<br />
            <span style='color:#B6B6B6'>or</span><br/>
            <span style="color:#FFB86C">dataType</span> [ ] <span style="color:#FFF273"> arrayRefVar</span> = { <span style='color:#B6B6B6'>value0,value1 ... valuek</span> }
        </div><br />
        
        <span style='margin-left:30px'>数组的元素是通过索引访问的。数组索引从 0 开始，所以索引值从 0 到 arrayRefVar.length-1。</span><br/>
        <img style="margin-top:30px;margin-left:40px;" src='./array.png'/>
    

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(1)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(1)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(1)'></el-button>
        </div>
        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title second-title'>
            哈希表
        </div>

        <span style='margin-left:30px'>Hashtable是原始的java.util的一部分， 是一个Dictionary具体的实现 。</span><br/>
        <span style='margin-left:30px'>像HashMap一样，Hashtable在哈希表中存储键/值对。当使用一个哈希表，要指定用作键的对象，以及要链接到该键的值。</span><br/>
        <span style='margin-left:30px'>然后，该键经过哈希处理，所得到的散列码被用作存储在该表中值的索引。</span><br/><br />
        <span style='margin-left:30px'>Hashtable定义了四个构造方法。</span><br/><br/>
        <span style='margin-left:30px'>第一个是默认构造方法：</span><br/>
        <div class='code-block'>
            <span style="color:#FFB86C">Hashtable</span> ( )
        </div><br />

        <span style='margin-left:30px'>第二个构造函数创建指定大小的哈希表：</span><br/>
        <div class='code-block'>
            <span style="color:#FFB86C">Hashtable</span> (<span style="color:#19F9D8"> int</span> <span style='color:#B6B6B6'>size </span>)
        </div><br />

        <span style='margin-left:30px'> 第三个构造方法创建了一个指定大小的哈希表，并且通过fillRatio指定填充比例。</span><br/>
        <span style='margin-left:30px'> 填充比例必须介于0.0和1.0之间，它决定了哈希表在重新调整大小之前的充满程度：</span><br/>
        <div class='code-block'>
            <span style="color:#FFB86C">Hashtable</span> (<span style="color:#19F9D8"> int</span> <span style='color:#B6B6B6'>size</span>,
            <span style="color:#19F9D8">float</span> <span style='color:#B6B6B6'>fillRatio </span>)
        </div><br />

        <span style='margin-left:30px'>第四个构造方法创建了一个以M中元素为初始化元素的哈希表。</span><br/>
        <span style='margin-left:30px'>哈希表的容量被设置为M的两倍:</span><br/>
        <div class='code-block'>
            <span style="color:#FFB86C">Hashtable</span> ( <span style="color:#19F9D8">Map</span> <span style='color:#B6B6B6'>m </span>)
        </div><br />


        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(2)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(2)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(2)'></el-button>
        </div>

        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title third-title'>
            向量
        </div>

        <span style='margin-left:30px'>Vector 类实现了一个动态数组。和 ArrayList 很相似，但是两者是不同的：</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li>Vector 是同步访问的。</li>
            <li>Vector 包含了许多传统的方法，这些方法不属于集合框架。</li>
        </ul>

        <span style='margin-left:30px'>Vector 主要用在事先不知道数组的大小，或者只是需要一个可以改变大小的数组的情况。</span><br/>
        <span style='margin-left:30px'>Vector 类支持 4 种构造方法。</span><br/><br/>

        <span style='margin-left:30px'>第一种构造方法创建一个默认的向量，默认大小为 10：</span><br/>
        <div class='code-block'>
            <span style="color:#FFB86C">Vector</span> ( )
        </div><br />

        <span style='margin-left:30px'>第二种构造方法创建指定大小的向量：</span><br/>
        <div class='code-block'>
            <span style="color:#FFB86C">Vector</span> (<span style="color:#19F9D8"> int</span> <span style='color:#B6B6B6'>size </span>)
        </div><br />

        <span style='margin-left:30px'> 第三种构造方法创建指定大小的向量，并且增量用 incr 指定。增量表示向量每次增加的元素数目：</span><br/>
        <div class='code-block'>
            <span style="color:#FFB86C">Vector</span> (<span style="color:#19F9D8"> int</span> <span style='color:#B6B6B6'>size</span>,
            <span style="color:#19F9D8">int</span> <span style='color:#B6B6B6'>incr </span>)
        </div><br />

        <span style='margin-left:30px'>第四种构造方法创建一个包含集合 c 元素的向量：</span><br/>
        <div class='code-block'>
            <span style="color:#FFB86C">Vector</span> ( <span style="color:#19F9D8">Collection</span> <span style='color:#B6B6B6'>c </span>)
        </div><br />

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(3)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(3)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(3)'></el-button>
        </div>
        
        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title forth-title'>
            栈
        </div>

        <span style='margin-left:30px'>栈是Vector的一个子类，它实现了一个标准的<b>后进先出</b>的栈。</span><br/>
        <span style='margin-left:30px'>你可以把栈理解为对象的垂直分布的栈，当你添加一个新元素时，就将新元素放在其他元素的顶部。</span><br/>
        <span style='margin-left:30px'>当你从栈中取元素的时候，就从栈顶取一个元素。换句话说，最后进栈的元素最先被取出。</span><br/><br/>


        
        <span style='margin-left:30px'>堆栈只定义了默认构造函数，用来创建一个空栈。 堆栈除了包括由Vector定义的所有方法，也定义了自己的一些方法。</span><br/>

        <div class='code-block'>
            <span style="color:#FFB86C">Stack</span> ( )
        </div>


        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(4)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(4)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(4)'></el-button>
        </div>

        <!---------------------------------------------------------->
        <el-divider></el-divider>
        
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
                    <b>Q: 以下哪个是合法的标识符？</b>
                </div>
                
                <div class="test-select" style='margin:20px 0'>
                    <el-radio v-model="select" label="1" style='display:block;line-height:36px;'>default</el-radio>
                    <el-radio v-model="select" label="2" style='display:block;line-height:36px;'>123abc</el-radio>
                    <el-radio v-model="select" label="3" style='display:block;line-height:36px;'>_$112as</el-radio>
                    <el-radio v-model="select" label="4" style='display:block;line-height:36px;'>-$kiki</el-radio>
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
                case 1:$('.first-title').css('background-color','#67C23A');this.knowPush("数组");break;
                case 2:$('.second-title').css('background-color','#67C23A');this.knowPush("哈希表");break;
                case 3:$('.third-title').css('background-color','#67C23A');this.knowPush("向量");break;
                case 4:$('.forth-title').css('background-color','#67C23A');this.knowPush("栈");break;
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
                case 1:$('.first-title').css('background-color','#E6A23C');this.unknowPush("数组");break;
                case 2:$('.second-title').css('background-color','#E6A23C');this.unknowPush("哈希表");break;
                case 3:$('.third-title').css('background-color','#E6A23C');this.unknowPush("向量");break;
                case 4:$('.forth-title').css('background-color','#E6A23C');this.unknowPush("栈");break;
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
                case 1:this.$emit('note','数组');break;
                case 2:this.$emit('note','哈希表');break;
                case 3:this.$emit('note','向量');break;
                case 4:this.$emit('note','栈');break;
            }
        },
        nextPage(){
            this.$router.push('/JavaSE/JVM#header');
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
        min-height:50px;
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