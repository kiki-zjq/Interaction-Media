<template>
    <div>
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
                @save='handleSave'
                @cancel='handleCancel'
            />

            <EditCard 
                :title='title'
                :subTitle='subTitle' 
                :nowTime='nowTime'
                @save='handleSave'
                @cancel='handleCancel'
                />
        </el-drawer>

    </div>
</template>

<script>
import CNpage from './CNpage.vue'
import ENpage from './ENpage.vue'
import NoteCard from './NoteCard.vue'
import EditCard from './EditCard.vue'


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
export default {
    data(){
        return{
            drawer:false,
            direction: 'ltr',
            title:'',
            subTitle:'',
            nowTime:'',
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
            this.title = 'JavaSE'
            this.nowTime = new Date().Format("yyyy-MM-dd HH:mm:ss")
            this.subTitle = '我的第一个Java程序'
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