<template>

    <div class='SyntaxContent'>
        <h2>Java 基础语法</h2>
    
        <!---------------------------------------------------------->
        <div class='sub-title first-title'>
            我的第一个Java程序
        </div>

        <span style='margin-left:30px'>下面看一个简单的Java程序，它将打印字符串 <i>Hello World</i></span>

        <div class = 'code-block'>
            <span> <span style="color:#FF75B5">public class </span> <span style='color:#FFB86C'>HelloWorld</span> {</span><br/>
            <br />
            <span style='margin-left:20px'><span style="color:#FF75B5">public</span>
            <span style='color:#19F9D8'> static void</span> <span style='color:#FFB86C'>main</span> ( <span style='color:#19F9D8'>String</span>
             [ ]<span style='color:#B6B6B6'>args</span> ) {</span><br/>
            <span style='margin-left:40px'>
                <span style='color:#FFB86C'>System.out.println</span>( "<span style='color:#B6B6B6'>Hello World</span>" ) ; 
                <span style='color:#67AB7D'>// 打印 Hello World</span></span><br/>
            <span style='margin-left:20px'>}</span><br/>
            <br/>
            <span>}</span><br/>
        </div>
        
        <span style='margin-left:30px'>下面我们将展示如何保存、编译以及运行这个程序：</span><br/>

        <ul style='margin-left:30px;line-height:35px'>
            <li>打开代码编辑器，把上面的代码添加进去</li>
            <li>把文件名保存为：HelloWorld.java</li>
            <li>打开 cmd 命令窗口，进入目标文件所在的位置，假设是 C:\</li>
            <li>在命令行窗口输入 javac HelloWorld.java 按下回车键编译代码</li>
            <li>再键输入 java HelloWorld 按下回车键就可以运行程序了。</li>
        </ul>

        <span style='margin-left:30px'>你将会在窗口看到 Hello World</span><br/>

        <div class='code-block'>
            <span><span style='color:#FF75B5'>C : > </span> <span style='color:#19F9D8'> javac</span> HelloWorld.java</span><br/>
            <span><span style='color:#FF75B5'>C : > </span> <span style='color:#19F9D8'> java</span> HelloWorld </span><br />
            <span>Hello World</span>
        </div>

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(1)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(1)'></el-button>
        </div>
        <!---------------------------------------------------------->
        <div class='sub-title'>
            我的第一个Java程序
        </div>






        <!---------------------------------------------------------->
    </div>

</template>



<script>
export default {
    

    methods:{
        clickKnow(value){
            if(value==1){
                $('.first-title').css('background-color','#67C23A');
            }

            this.$notify({
                title: '成功',
                message: '您已将此节标记为已学会',
                type: 'success'
            });
        },

        clickUnknow(value){
            if(value==1){
                $('.first-title').css('background-color','#E6A23C');
            }

            this.$notify({
                title: '重点',
                message: '您已将此节标记为重点',
                type: 'warning'
            });
        },

    },
}
</script>


<style scoped>
    .SyntaxContent{
        text-align:left;
    }

    .SyntaxContent h2{
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
</style>