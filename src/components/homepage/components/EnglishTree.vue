<template>
  <div :id="id" :class="className" :style="{ height:height,width:width }" />
</template>


<script>
import echarts from 'echarts'
import resize from '@/mixins/resize'
import setup from '@/echarts/setup'
require('echarts/theme/macarons') // echarts theme

export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "EnglishTree"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "500px"
    },
    data: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id),'setup');
      const option = {
            series: [{
                type: 'treemap',
                leafDepth: 1,
                visibleMin: 300,
                roam:'false',
                label:{
                  normal:{
                      fontSize:16,
                  }  
                },
                data: [
     {
        name:'Java SE',
        value:'2000',
        children:[
            {
                name:'JVM',  //children里面内容介绍的链接https://blog.csdn.net/TZ845195485/article/details/93238857?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522158591779319724843358393%2522%252C%2522scm%2522%253A%252220140713.130056874..%2522%257D&request_id=158591779319724843358393&biz_id=0&utm_source=distribute.pc_search_result.none-task-blog-all_SOOPENSEARCH-1
                value:'600',
				children:[
                    {
                        name:'Overall architecture',
                        value:'150',
                    },
                    {
                        name:'Class loaders',
                        value:'150',
						children:[
						    {
							      name:'Start class loader',
							      value:'40',
                            },
							{
							      name:'Extension class loader',
							      value:'60',
                            },
			       		   {
							      name:'Application class loader',
							      value:'30',
                            },
				           {
							      name:'User-defined class loader',
							      value:'70',
                            },
                                 ]
                    },
					{
                        name:'Execution Engine',
                        value:'30',
                    },
	                {
                        name:'Runtime data area',
                        value:'150',
						children:[
						    {
							      name:'Program counter',
							      value:'100',
                            },
							{
							      name:'Native method stack',
							      value:'100',
                            },
			       		   {
							      name:'Virtual machine stack',
							      value:'130',
                            },
                                 ]
                    },
                    {
                        name:'Heap',
                        value:'150',
						children:[
						    {
							      name:'Overview',
							      value:'50',
                            },
							{
							      name:'Internal memory structure',
							      value:'100',
                            },
			       		   {
							      name:'Pension area and permanent generation',
							      value:'80',
                            },
							{
							      name:'The different of jdk1.7 and 1.8',  //详细介绍https://blog.csdn.net/yjph83/article/details/84795856?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522158600594419195162527033%2522%252C%2522scm%2522%253A%252220140713.130056874..%2522%257D&request_id=158600594419195162527033&biz_id=0&utm_source=distribute.pc_search_result.none-task-blog-all_SOOPENSEARCH-4
							      value:'100',
                            },
                                 ]
                    },
					{
                        name:'Method area',
                        value:'150',
                    },
                    {
                        name:'Introduction to heap memory tuning',
                        value:'150',
                    },
					{
                        name:'Four garbage algorithms GC',
                        value:'150',
						children:[
						    {
							      name:'Reference counting',
							      value:'40',
                            },
							{
							      name:'Replication algorithm',
							      value:'60',
                            },
			       		   {
							      name:'Mark clear',
							      value:'30',
                            },			       		
							{
							      name:'Tag sorting algorithm',
							      value:'70',
                            },
                                 ]
                    },
                ],
            },
            {
                name:'Development tool',
                value:'400',
                children:[
                    {
                        name:'Eclipse',
                        value:'100',
                    },
                    {
                        name:'IDEA',
                        value:'150',
                    },
                ],
            },
            {
                name:' data structure ', //附chidren展开的链接https://blog.csdn.net/weixin_43774841/article/details/93366381?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522158600643619725211937932%2522%252C%2522scm%2522%253A%252220140713.130056874..%2522%257D&request_id=158600643619725211937932&biz_id=0&utm_source=distribute.pc_search_result.none-task-blog-all_SOOPENSEARCH-1
                value:'700',
                children:[
				    {
                        name:'Stack',
                        value:'120',
                    },
					{
                        name:'Queue',
                        value:'120',
                    },
                    {
                        name:'Array',
                        value:'160',
                    },
                    {
                        name:'Linked list',
                        value:'150',
                    },
					{
                        name:'Red and black tree',
                        value:'200',
                    },
                ]
            },
            {
                name:'Basic grammar',
                value:'1000',
                children:[				    
				    {
                        name:'Process control',
                        value:'200',
                    },
                    {
                        name:'Keyword',        //关键字包含了原有的数据类型这一项
                        value:'120',
                    },

                    {
                        name:'Operator',
                        value:'100'
                    },
                    {
                        name:'Identifier',
                        value:'100',
                    },
					{
                        name:'Comment,',
                        value:'150',
                    },
                ]

            },
            {
                name:'Object-oriented',//children链接https://blog.csdn.net/weixin_38689154/article/details/78159273?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522158600658719724843318468%2522%252C%2522scm%2522%253A%252220140713.130056874..%2522%257D&request_id=158600658719724843318468&biz_id=0&utm_source=distribute.pc_search_result.none-task-blog-all_SOOPENSEARCH-1
                value:'1000',
                children:[
                    {
                        name:'Object and class',
                        value:'200',
                    },
				    {
                        name:'Encapsulation',
                        value:'200',
                    },
                    {
                        name:'Inheritance',
                        value:'200',
                    },
                    {
                        name:'Polymorphism',
                        value:'100',
                    },
                    {
                        name:'Interface',
                        value:'200',
                    },
					{
                        name:'Inner class',
                        value:'100',
                    },				
				    {
                        name:'Object Class',
                        value:'50',
                    },
					{
                        name:'Packet',
                        value:'50',
                    },
                ],
            },
			{
                name:'IO stream',
                value:'400',
				children:[
                         {
                        name:'File',
                        value:'100',
                    },
				    {
                        name:'Byte stream',
                        value:'200',
                    },
                    {
                        name:'Character stream',
                        value:'200',
                    },
                    {
                        name:'Decorator ',
                        value:'100',
                    },
                    {
                        name:'Serialization and deserialization',
                        value:'100',
                    },
					{
                        name:'Random access file',
                        value:'100',
                    },
                ],
            },
            {
                name:'Multithreading',//附chidren展开的链接https://blog.csdn.net/weixin_38689154/article/details/78162026?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522158600737819726869021079%2522%252C%2522scm%2522%253A%252220140713.130056874..%2522%257D&request_id=158600737819726869021079&biz_id=0&utm_source=distribute.pc_search_result.none-task-blog-all_SOOPENSEARCH-1
                value:'600',
				children:[
                         {
                        name:'Overview',
                        value:'100',
                    },
				    {
                        name:'Multi-thread creation',
                        value:'200',
                    },
                    {
                        name:'Multi-thread synchronization',
                        value:'200',
                    },
                    {
                        name:'Multi-thread deadlock',
                        value:'100',
                    },
                    {
                        name:'Multi-thread communication',
                        value:'100',
                    },
					{
                        name:'Multi-thread stop',
                        value:'100',
                    },
                ],
            },
            {
                name:'Network programming',//附chidren展开的链接https://blog.csdn.net/weixin_38689154/article/details/78165040?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522158600770819724845058737%2522%252C%2522scm%2522%253A%252220140713.130056874..%2522%257D&request_id=158600770819724845058737&biz_id=0&utm_source=distribute.pc_search_result.none-task-blog-all_SOOPENSEARCH-1
                value:'300',
				children:[
                         {
                        name:'Overview',
                        value:'200',
                    },
				    {
                        name:'TCP and UDP',
                        value:'300',
                    },
                    {
                        name:'Other',
                        value:'100',
                    },
                ],
            },
        ]

    },
    //------------------------------为了便于阅读，每个大类之间，写个注释分割开
    {
        name:'Database',
        value:'1000',
        children:[
            {
                name:'Mysql',
                value:'500'
            },
            {
                name:'Redis',
                value:'600',
                

            },
            {
                name:'MongoDB',
                value:'400'
            },
        ]
    },
	//--------------------
{
        name:'JavaWeb',//附链接
        value:'1000',
        children:[
            {
                name:'Tomcat',
                value:'100',
            },
            {
                name:'Servlet',
                value:'180',
            },
			{
                name:'Requeset',
                value:'100',
            },
			{
                name:'Responset',
                value:'100',
            },
			{
                name:'Cookie and Session',
                value:'100',
            },
			{
                name:'JSP',
                value:'250',
            }
        ]
    },
    //--------------------
    {
        name:'Java common framework',//附链接https://blog.csdn.net/guorui_java/article/details/104018528?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522158597340519725222444953%2522%252C%2522scm%2522%253A%252220140713.130056874..%2522%257D&request_id=158597340519725222444953&biz_id=0&utm_source=distribute.pc_search_result.none-task-blog-all_SOOPENSEARCH-3
        value:'1200',
        children:[
            {
                name:'SSH',
                value:'600',
                children:[
                    {
                        name:'Struts',
                        value:'600',
                    },
					{
                        name:'Spring',
                        value:'600',
                    },
					{
                        name:'Hibernate',
                        value:'600',
                    }
                ]
            },
            {
                name:'SSM',
                value:'600',
                children:[
                    {
                        name:'spring',
                        value:'600',
                    },
					{
                        name:'SpringMVC',
                        value:'600',
                    },
					{
                        name:'mybatis',
                        value:'600',
                    }
					
                ]
            },
			{
                name:'Springboot',
                value:'600',
                
            }
        ]
    },
    //-------------------
    {
        name:'Other',
        value:'1000',
        children:[
            {
                name:'Development related Git',
                value:'700'
            },
            {
                name:'Machine Learning',
                value:'400'
            },
            {
                name:'Elastic Search',
                value:'500'
            }
        ]
    }
],

                    levels: [
                        {   color:['#FF4F4F', '#EFBB36','#39A7F5','#FC58C8','#67C23A'],
                            itemStyle: {
                                borderColor: 'white',
                                borderWidth: 4,
                                gapWidth: 4
                            }
                        },
                        {
                            colorSaturation: [0.75, 0.5],
                            itemStyle: {
                                //borderColorSaturation: 0.9,
                                borderColor:'white',
                                gapWidth: 2,
                                borderWidth: 4
                            }
                        },
                        {
                            colorSaturation: [0.75, 0.5],
                            itemStyle: {
                                //borderColorSaturation: 0.9,
                                borderColor:'white',
                                gapWidth: 1,
                                borderWidth: 4
                            }
                        },
                        {
                            colorSaturation: [0.75, 0.5],
                            itemStyle: {
                                //borderColorSaturation: 0.9,
                                borderColor:'white',
                                gapWidth: 1,
                                borderWidth: 4
                            }
                        }
                    ]



            }]
        };
  
      //option.series[0].data[1].name='12312312';
      //在这一段地方书写东西来改变上面data里的值。
      
      this.chart.setOption(option);
      this.chart.on('click',function(param){
          //console.log(param);
      })
    },
    
  }
};
</script>
<style scoped>
.chartsClass {
  padding-left: 1.2rem;
}
</style>