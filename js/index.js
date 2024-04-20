// 柱状图1模块
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    backgroundColor: 'rgba(255,255,255,0.0)',
        tooltip: {
            backgroundColor: 'rgba(0,0,0,0.6)',
            textStyle: {
              color: "rgba(220,220,220,1.0)",
              fontSize: "16",
            },
            borderWidth:"0",
          },
        legend: {
            top: "0%",
            data: ["上海市生产总值", "比上年增长",],
            textStyle: {
              color: "rgba(220,220,220,1.0)",
              fontSize: "16"
            }
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            containLabel: true
        },
        
        xAxis: {
            type: 'category',
            data: ['2019', '2020', '2021', '2022', '2023'],
            // 改变x轴颜色
            axisLine: {
                lineStyle: {
                    color: "rgba(220,220,220,1.0)",
                    width: 3, // 这里是为了突出显示加上的
                }
            },
        },
        // 设置两个y轴，左边显示一种类型，右边一种类型
        yAxis: [{
                splitLine: {show: false},
                type: 'value',
                position:'left',
                name: '（亿元）',
                show: true,
                min:0,
                max:50000,
                // 改变y轴颜色
                axisLine: {
                lineStyle: {
                    color: "rgba(220,220,220,1.0)",
                    width: 1, // 这里是为了突出显示加上的
                    type: 'solid',

                    }
                },
                axisLabel: {
                    textStyle: {
                      color: "rgba(220,220,220,1.0)",
                      fontSize: 12

                    }
                }
        },{
                splitLine: {show: false},
                type: 'value',
                position:'right',
                name: '（%）',
                // interval: 10,
                 min:-3.0,
                 max:12.0,
                // 改变y轴颜色
                axisLine: {
                    lineStyle: {
                        color: "rgba(220,220,220,1.0)",
                        width: 2, //y轴宽度，这里是为了突出显示加上的
                    }
                },
            }
        ],
        series: [{
            name:"上海市生产总值",
            type: 'bar',
            data: [37987.55,38963.30,43653.17,448809.13,47218.66],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside',//数据在中间显示
                        formatter:'{c}'//百分比显示，模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数
                    },
                    color: "rgba(0, 240, 180, 0.8)"//设置柱子的颜色
                }
            }
        },{
            name:"比上年增长",
            type: 'line',
            data: [6.0,1.7,8.3,-0.1,5.0],
            yAxisIndex: 1,// 这里要设置哪个y轴，默认是最左边的是0，然后1，2顺序来
            symbol: 'circle', // 折线点设置为实心点
            symbolSize: 10, // 折线点的大小
            itemStyle: {
                normal: {
                    color: "rgba( 240, 80,0,0.9)"//设置折线颜色
                }

            }
        }]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });


  $(".bar h2 ").on("click", "a", function() {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();

// 折线图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));



  //  指定配置和数据
  var option = {
    backgroundColor: 'rgba(255,255,255,0.0)',
    tooltip: {
      trigger: "axis",
      backgroundColor: 'rgba(0,0,0,0.6)',
      textStyle: {
        color: "rgba(220,220,220,1.0)",
        fontSize: "16",//16
      },
      borderWidth:"0",
    },
    legend: {
      top: "0%",
      right: "5px",
      data: ["金融市场交易总额", "新增就业岗位情况", "居民可支配收入",],
      textStyle: {
        color: "rgba(220,220,220,1.0)",
        fontSize: "14"
      }
    },
    
    grid: {
      left: "20",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: [
          "2019年",
          "2020年",
          "2021年",
          "2022年",
          "2023年",
        ],
        axisLabel: {
          textStyle: {
            color: "rgba(220,220,220,1.0)",
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(150,150,150,0.1)",
          }
        },
        axisTick: {
          lineStyle: {
            color: "rgba(0,200,200,0.5)"
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        name:'（万亿元/万人/元）',
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(0,150,150,0.5)",
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(220,220,220,1.0)",
            fontSize: 12
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(0,200,200,0.3)"
          }
        }
      }
    ],
    series: [
      {
        name: "金融市场交易总额",
        type: "line",
        smooth: true,
        data: [1934.31,2274.83,2511.07,2932.98,3373.63],
        lineStyle: {
          normal: {
            color: "rgba( 240, 80,0, 1.0)",
            width: 2
          }
        },
        areaStyle: {

          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba( 240, 80,0, 0.7)"
                },
                {
                  offset: 0.7,
                  color: "rgba(240, 80, 0, 0.0)"
                }
              ],
              false
            ),
          }
        },
        symbol: "circle",
        symbolSize: 5,
        itemStyle: {
          color: "rgba( 240, 80,0, 1.0)",
          borderColor: "rgba( 240, 80,0, 1.0)",
          borderWidth: 12
        },
        showSymbol: false,
        //data: ydata
      },
      {
        name: "新增就业岗位情况",
        type: "line",
        smooth: true,
        data: [59.91,57.04,63.51,56.35,60.56],
        lineStyle: {
          normal: {
            color: "rgba( 200, 200,0, 1.0)",
            width: 2
          }
        },
        areaStyle: {

          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba( 200, 200,0, 0.7)"
                },
                {
                  offset: 0.7,
                  color: "rgba(200, 200, 0, 0.0)"
                }
              ],
              false
            ),
          }
        },
        symbol: "circle",
        symbolSize: 5,
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 0, 0.1)",
          borderWidth: 12
        },
        showSymbol: false,
        //data: ydata2
      },
      {
        name: "居民可支配收入",
        type: "line",
        smooth: true,
        data: [69442,72232,78027,79610,84834],
        lineStyle: {
          normal: {
            color: "rgba(0, 240, 180, 1.0)",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 240, 180, 0.7)"
                },
                {
                  offset: 0.7,
                  color: "rgba(0, 240, 180, 0.0)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.25)"
          }
        },
        symbol: "circle",
        symbolSize: 5,
        itemStyle: {
          color: "#00cccc",
          borderColor: "#00cccc",
          borderWidth: 12
        },
        showSymbol: false,
        //data: ydata3
      }
    ]
  };
  // 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();


(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  var dataArr = 90;
  var colorSet = {
      color: '#22B95E'
  };
  var color1 = {
      type: "linear",
      x: 0,
      y: 0,
      x2: 1,
      y2: 1,
      colorStops: [
          {
              offset: 0,
              color: "rgba(255,255,255,0.1)"
          },
          {
              offset: 1,
              color: "rgba(255,255,255,0.3)"
          }
      ],
          global: false
  }
  var color2 = {
      type: "linear",
      x: 0,
      y: 0,
      x2: 1,
      y2: 1,
      colorStops: [
          {
              offset: 0,
              color: "#30DBBA"
          },
          {
              offset: 1,
              color: "#2DE696"
          }
      ],
          global: false
  }

  var option = {
    backgroundColor: 'rgba(255,255,255,0.0)',
      tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
      },

      series: [
          {
              name: "内部进度条",
              type: "gauge",
              radius: '70%',

              splitNumber: 10,
              axisLine: {
                  lineStyle: {
                      color: [
                          [dataArr / 100, colorSet.color],
                          [1, colorSet.color]
                      ],
                      width: 2
                  }
              },
              axisLabel: {
                  show: false,
              },
              axisTick: {
                  show: false,

              },
              splitLine: {
                  show: false,
              },
              itemStyle: {
                  color:"#ffffff"
              },
              detail: {
                  show: false,
                  formatter: function(value) {
                      if (value !== 0) {
                          var num = Math.round(value ) ;
                          return parseInt(num).toFixed(0)+"%";
                      } else {
                          return 0;
                      }
                  },
                  offsetCenter: [0, 67],
                  textStyle: {
                      padding: [0, 0, 0, 0],
                      fontSize: 18,
                      fontWeight: '700',
                      color: '#ffffff'
                  }
              },
              title: { 
                  show: false,
                  offsetCenter: [0, 46], 
                  textStyle: {
                      color: "rgba(0,0,0,0)",
                      fontSize: 14, 
                      fontFamily: 'PingFangSC'
                  }
              },
              data: [{
                  name: "",
                  value: dataArr,
              }],
              pointer: {
                  show: true,
                  length: '70%',
                  radius: '20%',
                  width: 3 

              },
              animationDuration: 4000,
          },
          {
              name: "内部阴影",
              type: "gauge",
              radius: '44%',
              splitNumber: 10,
              axisLine: {
                  lineStyle: {
                      color: [
                          [dataArr / 100, new echarts.graphic.LinearGradient(
                              0, 1, 0, 0, [{
                                      offset: 0,
                                      color: 'rgba(45,230,150,0)',
                                  }, {
                                      offset: 0.5,
                                      color: 'rgba(45,230,150,0.2)',
                                  },
                                  {
                                      offset: 1,
                                      color: 'rgba(45,230,150,1)',
                                  }
                              ]
                          )],
                          [
                              1, 'rgba(28,128,245,0)'
                          ]
                      ],
                      width: 100

                  },
              },
              axisLabel: {
                  show: false,
              },
              axisTick: {
                  show: false,

              },
              splitLine: {
                  show: false,
              },
              itemStyle: {
                  show: false,
              },
         
          },
          {
              name: "内部小圆",
              type: "gauge",
              radius: '46%',

              splitNumber: 10,
              axisLine: {
                  lineStyle: {
                      color: [
                          [dataArr / 100, color2],
                          [1, "rgba(0,0,0,0)"]
                      ],
                      width: 10
                  }
              },
              axisLabel: {
                  show: false,
              },
              axisTick: {
                  show: false,

              },
              splitLine: {
                  show: false,
              },
              itemStyle: {
                  show: false,
              },
          },
          {
              name: '外部刻度',
              type: 'gauge',
              radius: '48%',
              min: 0, 
              max: 100, 
              splitNumber: 5, 
              startAngle: 225,
              endAngle: -45,
              axisLine: {
                  show: true,
                  lineStyle: {
                      width: 1,
                      color: [
                          [1, 'rgba(0,0,0,0)']
                      ]
                  }
              }, 
              axisLabel: {
                  show: true,
                  color: '#ffffff',
                  fontSize:14,
                  fontFamily:'SourceHanSansSC-Regular',
                  fontWeight:'bold',
                  distance: -30,
                  formatter: function(v) {
                      switch (v + '') {
                          case '0':
                              return '0';
                          case '10':
                              return '10';
                          case '20':
                              return '20';
                          case '30':
                              return '30';
                          case '40':
                              return '40';
                          case '50':
                              return '50';
                          case '60':
                              return '60';
                          case '70':
                              return '70';
                          case '80':
                              return '80';
                          case '90':
                              return '90';
                          case '100':
                              return '100';
                      }
                  }
              }, 
              axisTick: {
                  show: true,
                  splitNumber: 3,
                  lineStyle: {
                      color: color1, 
                      width: 1,
                  },
                  length: -6
              }, 
              splitLine: {
                  show: true,
                  length: -12,
                  lineStyle: {
                      color: color1, 
                  }
              }, 
              detail: {
                  show: false
              }
          },
          {
              name: "内部进度条",
              type: "gauge",
              radius: '20%',

              splitNumber: 10,
              axisLine: {
                  lineStyle: {
                      color: [
                          [dataArr / 100, colorSet.color],
                          [1, colorSet.color]
                      ],
                      width: 1
                  }
              },
              axisLabel: {
                  show: false,
              },
              axisTick: {
                  show: false,

              },
              splitLine: {
                  show: false,
              },
              itemStyle: {
                  color:"#ffffff"
              },
              detail: {
                  formatter: function(value) {
                      if (value !== 0) {
                          var num = Math.round(value ) ;
                          return parseInt(num).toFixed(0)+"%";
                      } else {
                          return 0;
                      }
                  },
                  offsetCenter: [0, 67],
                  textStyle: {
                      padding: [0, 0, 0, 0],
                      fontSize: 18,
                      color: "#ffffff"
                  }
              },
              title: {
                  show: true,
                  offsetCenter: [0, 46], 
                  textStyle: {
                      color: "#fff",
                      fontSize: 14, 
                      fontWeight: 400,
                      fontFamily: 'MicrosoftYaHei'
                  }
              },
              data: [{
                  name: "GDP进度",
                  value: dataArr,
                  itemStyle:{
                      color:"#ffffff",
                      fontFamily: "MicrosoftYaHei",
                      fontSize:14
                  }
              }],
              pointer: {
                  show: true,
                  length: '70%',
                  radius: '20%',
                  width: 3 

              },
              animationDuration: 4000,
          },
          { 
          type: 'pie',
          tooltip: {
              show: false
          },
          hoverAnimation: false,
          legendHoverLink: false,
          radius: ['0%', '4%'],
          center: ['50%', '50%'],
          label: {
              normal: {
                  show: false
              }
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          data: [{
              value: 120,
              itemStyle: {
                  normal: {
                      color: "#ffffff",
                  },
              }
          }]
      },
          
      ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  var option = {
    backgroundColor: 'rgba(255,255,255,0.0)',
    tooltip: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        textStyle: {
          color: "rgba(220,220,220,1.0)",
          fontSize: "16",
        },
        borderWidth:"0",
      },
    color: ['#3D91F7', '#61BE67'],
    legend: {
        show: true,
        icon: "circle",
        bottom: 30,
        center: 0,
        itemWidth: 14,
        itemHeight: 14,
        itemGap: 21,
        orient: "horizontal",
        data: ['a', 'b'],
        textStyle: {
            fontSize: '70%',
            color: '#8C8C8C'
        },
    },
    
    radar: {
        radius:'80%',
        triggerEvent: true,
        name: {
            textStyle: {
                color: '#fff',
                fontSize:'14',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        nameGap:'2',
        indicator: [{
                name: '高端装备', max: 3500},
            {name: '节能环保', max: 1000},
            {name: '新信息技术', max: 5500 },
            {name: '新能源汽车', max: 4500},
            {name: '新材料',max: 3500},
            {name: '生物', max: 2500},
            {name: '其他', max: 1000},
        ],
        splitArea: {
            areaStyle: {
                 color: [
                         'rgba(0,200,200, 0.1)', 'rgba(0,200,200, 0.2)',
                         'rgba(0,200,200, 0.2)', 'rgba(0,200,200, 0.3)',
                         'rgba(0,200,200, 0.4)', 'rgba(0,200,200, 0.5)'
                     ].reverse()
            }
        },
        splitLine: {
            lineStyle: {
                width:1,
                color: [
                    'rgba(0,255,255, 1.0)', 'rgba(0,255,255, 0.6)',
                    'rgba(0,200,200, 0.6)', 'rgba(0,200,200, 0.6)',
                    'rgba(0,200,200, 0.2)', 'rgba(0,200,200, 0.2)'
                ].reverse()
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0, 200, 200, 0.3)'
            }
        }

    },

    series: [{
        name: '一级权重分析',
        type: 'radar',
        areaStyle: {
            normal: {
              color: new echarts.graphic.RadialGradient(
                0.5, 0.5, 1.0,
                [
                  {
                    offset: 0,
                    color: "rgba( 255, 255,0, 0.0)"
                  },
                  {
                    offset: 1.0,
                    color: "rgba( 255, 255,0, 0.9)"
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.25)"
            }
          },
        symbolSize: 0,
        lineStyle: {
            normal: {
                color: 'rgba(255,255,0, 1)',
                width: 1
            }
        },
        data: [{
                value: [2648, 873, 4894, 3876, 2868, 1719,825],
                name: '新兴产业总值',
            }
        ]
    }]
}

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 折线图 优秀作品
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  var img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAADGCAYAAACJm/9dAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAE/9JREFUeJztnXmQVeWZxn/dIA2UgsriGmNNrEQNTqSio0IEFXeFkqi4kpngEhXjqMm4MIldkrE1bnGIMmPcUkOiIi6gJIragLKI0Songo5ZJlHGFTADaoRuhZ4/nnPmnO4+l+7bfc85d3l+VV18373n3Ptyvve53/5+da1L6jDdYjgwBhgNHALMBn6Sq0VdcxlwGvACsAx4HliTq0VlRlNzY+LrfTO2o5LoDxwOHAmMA/4WiP+KzM3DqCJpAA4K/i4F2oBXgWbgWWAxsDEv48oZC6M9Q4EJwInAMcDAfM0pOXXA14K/y4FPgQXAfOBxYF1+ppUXFgYMBiYCp6PaoU+B694HFqEmyVJgVSbW9Y6bgCeBb6Am4GHALrH3B6L/+0RgM6pFHgQeAzZkaWi5UVejfYx64AjgXOAk1OToSCtqajyFHGZlVsalzH7oB+BYJJR+Cde0oKbi3cBCYEtWxmVNoT5GrQljGHAecD7wxYT3P0bNirlIEB9lZ1ouDEICOQk1H7dLuOYt4C7gZ8Da7EzLhloXxv7AJcCZdK4dWpAIHkDt7FrtjA5A/aszkFiSntP9wAzgP7M1LT0KCaM+YzuyZixy+leAb9O+sN9AHdDd0S/mbGpXFKD/+2z0LHZHz+aN2PsN6Bm+gjrsY7M2MEuqVRhHoU7yYjS6FPI5MAc4FNgHzUN4JKYz69Cz2Qc9qzno2YUcjZ7t8iBddVSbMEYDzwFPA6Nir28Afgx8CZiERpVM91iKntnfoGcYH606BNUez6GRr6qhWoSxF/AoKsQxsdfXAj9AHe2rgNXZm1Y1/A96hl8E/pn2HfExwBJUBntlb1rpqXRhbA/cDLyGxuJDPgSuBPYErqPGx+RLzAagCT3bK9GzDpmIyuJmVDYVS6UKow74e+APwPeIxuI/AX6Emkw3opldkw6fome8F3rmnwSv90Nl8gdURhU57FmJwtgHdfx+jpZwgCag7gW+DFyDa4gsWY+e+ZdRGYSTgUNRGS1GZVZRVJIwtgF+iMbQ4/2IF4ADgHOA93Kwy4j3UBkcgMokZAwqsx+iMqwIKkUYI4AXgelEzab1wAVoNOSVnOwynXkFlckFqIxAZTYdleGInOwqinIXRh1wMfASMDL2+hxgb+BOqngdTwWzBZXN3qisQkaisryYMu97lLMwhgHzgJ+ivRGgIcJJwd8HOdllus8HROUVDu/2R2U6D5VxWVKuwjgEVcnjY689jqrhOYl3mHJmDiq7x2OvjUdlfEguFnVBOQrju2gmdbcgvwmYitbweFtm5bIGleFUVKagMn4OlXlZUU7C6A/MQqs3w9GLN4ADgZloW6apbNpQWR5ItEBxG1Tms4iazLlTLsLYCW2IOTv22iNor3Il7JQzxbEKle0jsdfORj6wUy4WdaAchDEC+A1RW3MzcAVwKtW/UaiW+QiV8RWozEE+8Bu0yzBX8hbGwaiNuUeQ/xi1Q2/CTadaoA2V9Umo7EG+8Dw57/fIUxhHAs8AOwb5t9Cy8fm5WWTyYj4q+7eC/PZoOfspeRmUlzBOBn4FbBvkX0XVaLUEHDDFsxL5wG+DfAOKWHJOHsbkIYwpaAtluLRjEdol5nVO5j20tmpRkO+DAjFclLUhWQvjUhSSJYzdNA84DneyTcRHyCfmBfk64HYUbjQzshTGVOBWojUys9GoREuGNpjKoAX5xuwgXwfcQoY1R1bCmILWx4SimAWcBXyW0febyuMz5COzgnxYc0zJ4suzEMZEFKwrFMVDKAzL5oJ3GCM2I195KMjXIV86Ke0vTlsYR6CRhbBPMReYjEVhus9mNCseRpfvg5pYR6T5pWkKYz8UNSIcfVqIzmpoTfE7TXXyGfKdhUG+H/Kt1GbI0xLGMODXKJI4aIz6m1gUpue0Ih8Kw4MORj6Wyp6ONITRADyBwjyC4hEdjwMUmN6zAUU+fDPI7458LSlafa9IQxh3oZWToP/ICcDbKXyPqU3WouDT4Q/tQcjnSkqphXEJ6lyDOk2T8TIPU3pW0n4QZzLyvZJRSmGMQislQ65C1ZwxafAEioQYchPt4xX3ilIJYygaaw5HoB5BM5XGpMmtwMNBuh/ywaGFL+8+pRBGHYpAF+7R/h2anfR+CpM2bWj1bbhNdjfki70OzVMKYVxEFM1jE955Z7Il3AkYHvoznhKsqeqtML6KIluHfB93tk32rEK+F3Iz8s0e0xth9EXVVhjZ4QkUAcKYPPg3orhV/YH76MVx3b0RxhXA3wXpdehoYPcrTF60oRN5w6PjDkQ+2iN6Kox9UOj3kAtxMDSTP2uQL4ZcA+zbkw/qiTDqULUVTsM/RDRkZkzePEy0TL0B+WrRo1Q9Eca3iEKbrKfEM47GlIBLgP8N0mPQyU5FUawwdqDz7Lajjpty4wPg6lj+RqIwTd2iWGE0Ei3zXUEKi7eMKRF3IR8F+ew1W7m2E8UI4ytEEydbUIRqH9piypWOPnoR8uFuUYwwbiKKQj4LeLmIe43Jg5eJgilsQ/tuwFbprjBGEy37+IT27TdjypmriY5aHo/OB+yS7grjulj6JzhqoKkc3gNui+X/pTs3dUcYRxMNz/4FLyc3lcfNyHdBvnxMVzd0RxiNsfQNeO+2qTw2IN8N6XKEqithjCXaFbUWuKNndhmTOzOJ1lGNoovzN7oSxrRY+jbg057bZUyu/BX1j0OmFboQti6Mkah/AVr64SXlptKZiXwZ5NsjC124NWFcGkvfHftAYyqV9bRfrXFpoQvrWpckLjwcigKl9Qc+B74ErC6hgcbkxR7Af6NNTK3Abk3Njes6XlSoxvgO0c68R7EoTPWwGvk0KLLIBUkXJQmjHu3GC5lRWruMyZ24T58zbdy1nXSQJIxxwJ5B+nVgWentMiZXliHfBvn6kR0vSBJG/JTMu0tvkzFlQdy3O53S1LHzPRht8mhA56DtTjQpYkw1MQR4h8jXd25qbvz/kdeONcZEor3cT2FRmOrlQ3S+Bsjn2x1f1lEYZ8TSD6RolDHlwP2x9JnxN+JNqWHAu2h892NgZ7wExFQ3A4H3ge3QkQK7NjU3roH2NcaJRJHb5mNRmOrnU+TroEMvw8147YQxIZaeizG1QdzXTwwTYVNqAOpoD0Q99GGoOWVMtTMIRTBsQBHThzQ1N24Ma4zDkCgAFmNRmBqhqbnxI+C5IDsAOByiplR85m9BhnYZUw48FUsfCcnCeCYzc4wpD+I+Pw7UxxiOhqzq0HDtbgk3GlOVNDUrpMG0cde+A+yKjhPYuR7F2QknM57PxTpj8ifsZ9QBh9ajYGohS7O3x5iyIL6KfFQ9cHDsBQvD1Cpx3z+4LzAHnV3Whg75M6YWWQVciZpSrYX2fBtTE4Sd746U4pxvY6oOC8OYBCwMYxKwMIxJwMIwJgELw5gELAxjErAwjEnAwjAmAQvDmAQsDGMSsDCMScDCMCYBC8OYBCwMYxKwMIxJwMIwJgELw5gELAxjErAwjEnAwjAmAQvDmAQsDGMSsDCMScDCMCYBC8OYBCwMYxKwMIxJwMIwJgELw5gELAxjErAwjEnAwjAmAQvDmAQsDGMSsDCMScDCMCYBC8OYBCwMYxLoC1wKNABtwC3A5lwtMiYHpo27tg/wPaAOaO0LnAqMCt5fAPw2J9uMyZMRwI+D9PJ6YEXszW9kb48xZUHc91fUA8sKvGlMLTE6ll5eDyxF/QuAMdnbY0xZMDb4tw1YUg+sAVYGL+6K2lrG1AzTxl07Avk+wMqm5sY14XBtc+y6o7I1y5jcift8M0TzGM/E3jgmM3OMKQ+OjaWfBahrXVIHMABYBwwEWoBhwMdZW2dMDgxC3YkGYCMwpKm5cWNYY2wEng7SDcBx2dtnTC4ci3weYEFTc+NGaL8k5IlY+qSsrDImZ+K+/qsw0VEYnwfpE1GzyphqZgDyddBSqMfDN+LCWAssCtLbAeMzMc2Y/DgB+TrAwqbmxjXhGx1X194fS5+WtlXG5MyZsfQD8Tc6CmMuGpUCOB4YkqJRxuTJEOTjIJ9/LP5mR2GsR+IA9dS/lappxuTHZKLRqLlNzY3r428mbVS6N5Y+Ny2rjMmZuG/f2/HNJGE8C7wZpPel/apDY6qB0cBXg/SbBLPdcZKEsQW4J5a/pORmGZMvcZ++p6m5cUvHCwrt+f53ok74N4E9SmyYMXmxB/JpgFbk650oJIx1wOwg3Rf4bklNMyY/LkY+DfBgU3PjuqSLthYl5LZY+lxg+xIZZkxeDAbOi+VvK3Th1oTxCtHCwu2BC3tvlzG5chHRD/wzyMcT6SquVFMsfRleP2Uql4HIh0Ou39rFXQnjOWB5kB4GTO25XcbkylTkwyCfXrSVa7sViXB6LH0VaqcZU0kMRr4b8qOubuiOMBagmgNgR+Dy4u0yJle+j3wX5MtPdXVDd2PX/iCWvhzYpTi7jMmNXVAY2pAfFLowTneFsZRoh9+2dNFxMaaMuB75LMiHl3bnpmKinf8T8FmQngwcUMS9xuTBAchXQb57RXdvLEYYvwNmxu77aZH3G5MlHX10JvBGMTcXw3S0BRbgYNrPIhpTTpyHfBS0xGn6Vq7tRLHC+AtqUoVcD+xU5GcYkzbDad8PvgL5brfpSVPoP4iGb3cA/rUHn2FMmsxAvgnwPPDzYj+gJ8JoQ+umwmXppwGn9OBzjEmDU4gCebQgX20rfHkyPe08/xft22wzUfVlTJ4MB+6I5acDr/fkg3ozqnQj8FKQHgbchc4vMyYP6pAPhj/QLyMf7RG9EcbnwLeBTUF+Al6abvLjQuSDoCbUPxBF1iya3s5DvEb7SZNbgP16+ZnGFMsI4OZY/irkmz2mFBN0twPzg3R/YA4KrW5MFgxCPjcgyD9JCUZKSyGMNmAK8E6Q/wqK0+P+hkmbOhTRZu8g/w5qQhU9CtWRUi3pWIuGyFqD/MnoMHFj0uRyoqmCVuSDawpf3n1KudZpGe1nxW/AEdNNeownOrAe5HvLClxbNKVeBDgD+EWQ7gPMwp1xU3r2Q77VJ8j/AvleyUhjdex5wItBejA6pWb3FL7H1CbD0AEv4RbrF0lhMWsawtiExpPfDvJfAH6N94qb3jMYhXTaM8i/jXxtU6Ebekpa+ynWoLMHNgT5/YBHgX4pfZ+pfvohH9o/yG9APlaSznZH0txotBLFCA1Hqo5AYT8tDlMs2yDfOSLItyLfWpnWF6a9A28hcBY6+A90Qma802RMV/RBnevwdNXN6IiwhWl+aRZbUx8GvkM06TIJuA+Lw3RNH+Qrk4J8G3A+8EjaX5zVnu170JkEoTgmA79EVaQxSWyDaoowmEEb8qFOpx+lQZbBDG5HM5WhOE4DHsJ9DtOZfsg3Tg/ybSho2u1ZGZB1lI/bUFUY73M8hRcdmohBaCFg2KdoQ+ez3JqlEXmEv7mb9uuqDkd7yB3d0OyMfCEcfdqMfkjvKHhHSuQVF+oR4ETgr0F+fxSB2stHapcRwAtE8xQtwBnohzRz8gyY9gxwJFFYkz3RIrAT8jLI5MYJ6IdxzyC/HjgO7bPIhbwjCa4ADgNWB/ntgHlopaT3c1Q/dahTPQ+VPcgXxtLF+RVpk7cwQLOXB6FqFDR2fSPeCVjthDvvbiKa01qBfOHVvIwKKQdhALyPOly/jL12Mlo5OSIXi0yajEBle3LstfvRQMz7uVjUgXIRBmiF5NnAPxJFVd8bhei5CDetqoE6VJYvEW1H/QyV+VmksEq2p5STMEJmoF+OcA95fzRcNxcHdatkhqMyvAOVKaiMD6PEm4xKQTkKAzQ6NRJtcgqZgPojp+ZikekNp6CymxB7bT4q4+WJd+RMuQoDFGBhPKpmwyp2OFoqMBtHWa8EhgMPok52WNtvQjPZE4iOlCg7ylkYoOUAM4ADaX9Y+SQUP/d8yv//UIvUo7J5gyjAMqgMD0Rrnnod4iZNKsWpVqFhvEaipSQ7AHcCS1CVbMqDkahM7iQKxd+Kyu4gVJZlT6UIAzR6MZ3owYeMQgF878HrrfJkF1QGL6MyCQl/uKYTjTaWPZUkjJDX0czoFHSEFOj/MQX4PXAtDryQJYPRM/89KoPQp9YF+bH0MBR/nlSiMEDt0/vQWPhMoqjW2wLXAH9Ey0oG5mJdbTAQPeM/omceHhn8OSqTfVAZlXVfohCVKoyQD4GpwNdQiJ6QoWhZyZ+BaXhpSSkZhJ7pn9EzHhp770lUFlOJavOKpNKFEfI6WqF5KO37H8OB69DCtBtQjCvTM76ADnxcjZ5pfLJ1CXr2x1OBzaYkqkUYIUuBMcAxRIsSQe3gK4E/oTmQ0dmbVrGMRs/sT+jciXj/bQVwLHrmS7M3LT2qTRghT6ORkcODdEhfNAeyFB0schmwY+bWlT9D0LN5DT2rSejZhTyNnu0hwILMrcuAahVGyGJUe3wdHWnbEntvX7SP+F3gMbTUZAC1ywAkgMfQGqZb0TMKaUHP8OvomS7O1rxsqWtdUlOLVoejGdnzgD0S3v8IreGZi4I0fJydabmwHWoKTUR9tKRBitXo0MefkVI4zDxpam5MfL3WhBFSj/Z/nI/W7DQkXNOCdpE9jbbhVsSMbTcYARwFHI2aQ4X+748jQTQDWzKzLmMKCaNv4qvVzxbg2eBve/SLeTowjmg3WQP6NT02yL+Lmg/Lgr9VRGGAypU+SAijg7/DgF0LXLsZiWA2Cp68PgP7ypZarTEKMQzVIOPRr+rWJgivRkPA5cxVaIi1EJ+i2vAJVEOU7WrXtHCN0T3WovU+96DO6OEoksk4FNqn0n9F2tC+iGZUWy4CNuZqUZliYRRmI5pND2fUd0JDwKPRMGVLgfvKiRa0EegF1PxbDnyQq0UVwv8BNYmwIpIWBvwAAAAASUVORK5CYII=';
    var arae = [{
        name: '浦东',
        value: 16715
    }, {
        name: '黄浦',
        value: 3157
    }, {
        name: '闵行',
        value: 3002
    }, {
        name: '静安',
        value: 2846
    }, {
        name: '嘉定',
        value: 2840
    }];

    var data = [];
    var color = ['#00ff99', '#23b974', '#006ced', '#ffe004', '#fc4212']
    for (var i = 0; i < arae.length; i++) {
        data.push({
            value: arae[i].value,
            name: arae[i].name,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    shadowBlur: 20,
                    borderColor: color[i],
                    shadowColor: color[i]
                }
            }
        }, {
            value: 2,
            name: '',
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        });
    }
    var seriesOption = [{
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [90, 93], 
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    color: '#ddd',
                    formatter: function (params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < arae.length; i++) {
                            total += arae[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if (params.name !== '') {
                            return params.name + '\n' + '\n' + percent;
                        } else {
                            return '';
                        }
                    },
                },
                labelLine: {
                    length: 40,
                    length2: 0, 
                    show: false,
                    fontSize: 16,
                }
            }
        },
        data: data
    }];
    var option = {
        backgroundColor: 'rgba(255,255,255,0.0)',
        
        color: color,
        title: {
            text: '上海市GPD前五各区占比',
            //subtext: '366',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#00ff66'
            },
            subtextStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: '#00ff66'
            }, 
        },
        graphic: {
            elements: [{
                type: "image",
                z: 3,
                style: {
                    image: img,
                    width: 140,
                    height: 140
                },
                left: 'center',
                top: 'center',
                position: [100, 100]
            }]
        },
        tooltip: {
            show: false
        },
        toolbox: {
            show: false
        },
        series: seriesOption
    }
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 点位分布统计模块
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));
  // 2. 指定配置项和数据
  var option = {
    backgroundColor: 'rgba(255,255,255,0.0)',
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    // grid: {
    //   //调整图表位置
    //   show: false, //是否显示直角坐标系网格
    //   top: "15%", // 一下数值可为百分比也可为具体像素值
    //   right: "5%",
    //   bottom: "10%",
    //   left: "8%",
    // },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '3%',
      containLabel: true
    },
    legend: {
      top: "0%", // 控制 板块控制器的位置
      // icon: 'rect',//形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
      // itemWidth: 10,  // 设置宽度
      // itemHeight: 4, // 设置高度
    //   itemGap: 80, // 设置顶部图标间距
    //   right: "center",
      data: [
        {
          name: "货物出口额",
          textStyle: {
            color: "#fff", // 单独设置某一个图列的颜色
          },
        },
        {
          name: "货物进口额",
          textStyle: {
            color: "#fff", // 单独设置某一个图列的颜色
          },
        },
      ],
    },
    xAxis: [
      {
        type: "category",
        data: [
          "2019年",
          "2020年",
          "2021年",
          "2022年",
          "2023年",
        ],
        axisPointer: {
          type: "shadow",
        },
        axisLine: {
          //横轴样式
          lineStyle: {
            color: "#08426D",
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "#85B0C4",
          },
        },
      },
    ],
    yAxis: [
      {
        splitLine: {
          show: true,
          lineStyle: {
            color: ["#08426D"],
            width: 1,
            type: "solid",
          },
          textStyle: {
            color: "green",
          },
        },
        type: 'value',
        position: 'left',
        name: '（亿元）',
        show: true,
        min: 0,
        max: 50000,
        axisLabel: {
          show: true,
          formatter: "{value}",
          textStyle: {
            color: "#85B0C4",
          },
        },
      },
    ],
    series: [
      {
        name: "货物出口额",
        type: "bar",
        barWidth: "25%", // 设置柱子的宽度
        stack: "柱子", //同个类目轴上系列配置相同的stack值可以堆叠放置
        data: [13720.91,13725.36,15718.67,17134.21,17377.94],
        itemStyle: {
          color: {
            type: "linear",
            x: 0, // 右
            y: 1, // 下
            x2: 0, // 左
            y2: 0, // 上
            colorStops: [
              {
                offset: 0,
                color: "#013560", // 0% 处的颜色
              },
              {
                offset: 0.9,
                color: "#00F5EE", // 90% 处的颜色
              },
            ],
          },
        },
      },
      {
        name: "货物进口额",
        type: "bar",
        barWidth: "25%", // 设置柱子的宽度
        stack: "柱子", //同个类目轴上系列配置相同的stack值可以堆叠放置
        data: [20325.91,21103.11,24891.68,24768.53,24743.66],
        itemStyle: {
          color: {
            type: "linear",
            x: 0, // 右
            y: 1, // 下
            x2: 0, // 左
            y2: 0, // 上
            colorStops: [
              {
                offset: 0,
                color: "#1B2E6E", // 0% 处的颜色
              },
              {
                offset: 0.9,
                color: "#00C0FF", // 90% 处的颜色
              },
            ],
          },
        },
        label: {
          show: true, // 开启显示
          position: "top", // 在上方显示
          distance: 5, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。
          verticalAlign: "middle",
          textStyle: {
            // 数值样式
            color: "#D2CC17",
            fontSize: 12,
          },
        },
      },
    ],
  };      


  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
