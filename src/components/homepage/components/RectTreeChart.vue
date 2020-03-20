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
      default: "CirclePieChart"
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
                leafDepth: 2,
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
                                name:'JVM',
                                value:'400',
                            },
                            {
                                name:'开发工具',
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
                                name:'数据结构',
                                value:'200',
                                children:[
                                    {
                                        name:'数组',
                                        value:'200',
                                    },
                                    {
                                        name:'集合',
                                        value:'150',
                                    },
                                ]
                            },
                            {
                                name:'基本语法',
                                value:'700',
                                children:[
                                    {
                                        name:'数据类型',
                                        value:'300',
                                    },
                                    {
                                        name:'关键字',
                                        value:'200',
                                    },
                                    {
                                        name:'运算符',
                                        value:'200'
                                    },
                                    {
                                        name:'流程控制',
                                        value:'190',
                                    }
                                ]
                                
                            },
                            {
                                name:'面向对象',
                                value:'600',
                                children:[
                                    {
                                        name:'对象与类',
                                        value:'200',
                                    },
                                    {
                                        name:'继承',
                                        value:'200',
                                    },
                                    {
                                        name:'多态',
                                        value:'100',
                                    },
                                    {
                                        name:'接口',
                                        value:'130',
                                    }
                                ]
                            }

                        ]

                    },
                    //--------------------
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
                                children:[
                                    {
                                        name:'NumPy',
                                        value:'100',
                                    },
                                    {
                                        name:'python爬虫',
                                        value:'300',
                                    },
                                    {
                                        name:'Pandas',
                                        value:'100',
                                    }

                                ],

                            },
                            {
                                name:'MongoDB',
                                value:'400'    
                            },
                        ]
                    },
                    //--------------------
                    {
                        name:'数据库',
                        value:'1000',
                        children:[
                            {
                                name:'关系型数据库',
                                value:'600',
                                children:[
                                    {
                                        name:'MySQL',
                                        value:'600',
                                    }
                                ]
                            },
                            {
                                name:'非关系型数据库',
                                value:'600',
                                children:[
                                    {
                                        name:'MongoDB',
                                        value:'600',
                                    }
                                ]
                            }
                        ]
                    },
                    //-------------------
                    {
                        name:'其他',
                        value:'1000',
                        children:[
                            {
                                name:'开发相关 Git',
                                value:'700'
                            },
                            {
                                name:'机器学习 Machine Learning',
                                value:'400'
                            }
                        ]
                    }

                ],

                    levels: [
                        {   color:['#FF4F4F', '#EFBB36','#39A7F5','#FC58C8'],
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