<template>
    <div id='header'>
        <CNpage v-if="language=='Chinese'" @note='handleNote'/>
        <ENpage v-if="language=='English'" @note='handleNote'/>
        
        
        <el-drawer
            title="NoteBook"
            :visible.sync="drawer"
            :direction="direction"

            size="35%">

            <NoteCard
                v-for = "(obj,index) in notebook"
                :key = "index"
                :title ='obj.title'
                :subTitle='obj.subTitle' 
                :nowTime='obj.nowTime'
                :note='obj.note'
                :index='index'
                @save='handleSave'
                @delete='handleDelete'
            />

            <EditCard 
                :title='title'
                :subTitle='subTitle' 
                :nowTime='nowTime'
                :note='note'
                @save='handleSave'
                @cancel='handleCancel'
                />
            
            

        </el-drawer>

        <!-- <el-button type="warning" class="show-note" icon="el-icon-download" circle></el-button> -->

    </div>
</template>

<script>
import CNpage from './CNpage.vue'
import ENpage from './ENpage.vue'
import NoteCard from '@/components/noteComponents/NoteCard.vue'
import EditCard from '@/components/noteComponents/EditCard.vue'


Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

$(window).scroll( function() {
        if(document.documentElement.scrollTop<=130){
            $(".show-note").fadeOut(500);
           //console.log(document.documentElement.scrollTop);
        }
        else{
            $(".show-note").fadeIn(500);
        }
    } );


export default {
    data(){
        return{
            drawer:false,
            direction: 'ltr',
            title:'',
            subTitle:'',
            nowTime:'',
            note:'',
        }
    },
    components:{
        CNpage,
        ENpage,
        NoteCard,
        EditCard,
    },   
    methods:{
        handleNote(note){
            this.drawer = true
            this.title = 'JavaWeb'
            this.nowTime = new Date().Format("yyyy-MM-dd HH:mm:ss")
            this.subTitle = note
        },
        handleSave(title,subTitle,nowTime,note){
            var obj = {
                'title':title,
                'subTitle':subTitle,
                'nowTime':nowTime,
                'note':note
            }
            this.notebook.push(obj)
            this.$store.commit('changeNote',this.notebook)
            console.log(this.notebook)
            this.nowTime = new Date().Format("yyyy-MM-dd HH:mm:ss")
            this.note = ''
            // this.drawer = false;
            // this.drawer = true;
            this.$message({
                message: 'Note saved successfully',
                type: 'success'
                });
        },
        handleCancel(){
            this.drawer = false;
        },
        handleDelete(index){
            this.notebook.splice(index,1)
            this.$store.commit('changeNote',this.notebook)
            this.$message({
                message: 'Note deleted successfully',
                type: 'warning'
                });
        }
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

<style>
.el-drawer__body {
    overflow: auto;
    /* overflow-x: auto; */
}

/*2.隐藏滚动条，太丑了*/
.el-drawer__container ::-webkit-scrollbar{
    display: none;
}

.show-note{
    position:fixed;
    right:8%;
    bottom:10%;
}

</style>