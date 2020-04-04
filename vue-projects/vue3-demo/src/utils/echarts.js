export function getPieOptions (params) {
  return {
    title: {
      text: params.title,
      x: 'left',
      textStyle: {
        color: '#fff',
        fontWeight: 'normal',
        fontSize: 16,
        fontFamily: 'Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      top: '20%',
      left: '62%',
      icon: 'circle',
      // data: ['sql类', '文件类', 'kafka', 'hive类', '共享交换类'],
      itemWidth: 10,
      itemHeight: 10,
      itemRadius: 50,
      textStyle: {
        color: '#fff',
        padding: 3
      },
      show: false
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '68%',
        center: ['28%', '60%'],
        data: params.data,
        // 值域指向线
        labelLine: {
          normal: {
            show: false
          }
        },
        label: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          normal: {
            color: function (params) {
              // 自定义颜色
              const colorList = [
                '#37a2da', '#32c5e9', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293'
              ]
              return colorList[params.dataIndex]
            }
          }
        }
      }
    ]
  }
}

export function getPieOptions1 (params) {
  return {
    title: {
      x: 'left',
      textStyle: {
        color: '#fff',
        fontWeight: 'normal',
        fontSize: 16,
        fontFamily: 'Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}'
    },
    legend: {
      orient: 'vertical',
      top: '10%',
      left: '55%',
      icon: 'circle',
      itemWidth: 10,
      itemHeight: 10,
      itemRadius: 50,
      itemGap: 30,
      textStyle: {
        color: '#fff',
        padding: 6
      }
    },
    series: [
      {
        name: '数量与占比',
        type: 'pie',
        radius: '68%',
        center: ['26%', '50%'],
        data: params.data,
        // 值域指向线
        labelLine: {
          normal: {
            show: false
          }
        },
        label: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
}

export function getPieOptions2 (params) {
  return {
    title: {
      x: 'left',
      textStyle: {
        color: '#fff',
        fontWeight: 'normal',
        fontSize: 16,
        fontFamily: 'Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      top: '10%',
      left: '53%',
      icon: 'circle',
      itemWidth: 10,
      itemHeight: 10,
      itemRadius: 50,
      textStyle: {
        color: '#fff',
        padding: 3
      }
    },
    series: [
      {
        name: '分布',
        type: 'pie',
        radius: '70%',
        center: ['30%', '55%'],
        data: params.data,
        // 值域指向线
        labelLine: {
          normal: {
            show: false
          }
        },
        label: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
}

export function getPartRingOptions (params) {
  let p1 = 110; let p2 = 110; const p3 = 140 // 三部分相加360度，表示一个圆环
  if (params && params.p1 && params.p2) {
    p1 = Math.round(220 * params.p1 / (params.p1 + params.p2))
    p2 = 220 - p1
  }
  let p1_color = '#45d2e4'
  let p2_color = '#2977c2'
  if (params && params.p1_color) {
    if (typeof params.p1_color === 'object') {
      p1_color = {
        type: 'linear',
        x: 0,
        y: 1,
        x2: 1,
        y2: 0,
        colorStops: [{
          offset: 0, color: params.p1_color[0] // 0% 处的颜色
        }, {
          offset: 1, color: params.p1_color[1] // 100% 处的颜色
        }]
      }
    } else {
      p1_color = params.p1_color
    }
  }
  if (params && params.p2_color) {
    if (typeof params.p2_color === 'object') {
      p2_color = {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
          offset: 0, color: params.p2_color[0]
        }, {
          offset: 1, color: params.p2_color[1]
        }]
      }
    } else {
      p2_color = params.p2_color
    }
  }
  return {
    series: [{
      type: 'pie',
      label: { show: false },
      center: ['50%', '74%'],
      radius: ['144%', '92%'],
      startAngle: 200,
      hoverAnimation: false,
      data: [
        {
          name: 'lf',
          value: p1,
          itemStyle: { color: p1_color }
        },
        {
          name: 'rt',
          value: p2,
          itemStyle: { color: p2_color }
        },
        {
          name: 'bottom',
          value: p3,
          itemStyle: { color: 'transparent' }
        }
      ]
    }]
  }
}

export function getGradientRingOptions (params) {
  let p1 = 75; let title = ''
  if (params && params.p1) {
    p1 = Math.round(params.p1 / 5) + 45
    title = params.p1 + '%'
  }
  let p1_color = '#e17046'
  if (params && params.p1_color) {
    if (typeof params.p1_color === 'object') {
      p1_color = {
        type: 'linear',
        x: 0.5,
        y: 1,
        x2: 1,
        y2: 0.5,
        colorStops: [{
          offset: 0, color: params.p1_color[0]
        }, {
          offset: 0.8, color: params.p1_color[1]
        }]
      }
    } else {
      p1_color = params.p1_color
    }
  }
  return {
    title: {
      text: title,
      top: 'middle',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    angleAxis: {
      clockwise: false,
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      max: 100,
      startAngle: 0
    },
    radiusAxis: {
      clockwise: false,
      type: 'category',
      data: ['a'],
      z: 1,
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    polar: {
      radius: ['100%', '60%']
    },
    series: [
      {
        type: 'bar',
        hoverAnimation: false,
        coordinateSystem: 'polar',
        barWidth: 17, // 宽度
        roundCap: true,
        barCategoryGap: '40%',
        data: [p1],
        itemStyle: {
          barBorderRadius: 20,
          color: p1_color
        }
      }],
    tooltip: {
      show: false
    }
  }
}

export function getBlendOptions (params) {
  return {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,0,0,0.7)',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#aaa'
        }
      },
      formatter: '{b}<br />{a0} : {c0} <br />{a1} : {c1} <br />{a2} : {c2}%'
    },
    color: ['#0788FD', '#07E0FD'],
    toolbox: {
      show: false
    },
    barCategoryGap: '50',
    //  图表距边框的距离
    grid: {
      top: '30%',
      left: '30',
      right: '0',
      bottom: '3%',
      containLabel: true
    },
    legend: {
      show: false,
      x: 'right',
      y: 'top',
      // data: ['完整性', '唯一性', '合格率'],
      itemWidth: 20,
      itemHeight: 5,
      itemRadius: 10,
      itemGap: 20,
      textStyle: {
        color: '#fff'
      }
    },
    textStyle: {
      color: '#fff'
    },
    xAxis: [
      {
        type: 'category',
        data: params.xName,
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#114b99'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '数量',
        min: 0,
        // max: 5000000,
        // interval: 1000000,
        axisLabel: {
          formatter: '{value}'
        },
        axisLine: {
          show: false,
          lineStyle: {
            // 设置y轴颜色
            color: '#114b99'
          }
        }
      },
      {
        type: 'value',
        name: '百分比',
        min: 0,
        max: 100,
        interval: 20,
        axisLabel: {
          formatter: '{value} %'
        },
        axisLine: {
          show: false,
          lineStyle: {
            // 设置y轴颜色
            color: '#114b99'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#114b99'
          }
        }
      }
    ],
    series: params.data
  }
}

export function getLineOptions (params) {
  return {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,0,0,0.7)',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#aaa'
        }
      },
      textStyle: {
        align: 'left'
      },
      formatter: '{b}<br />{a0} : {c0} <br />{a1} : {c1}%'
    },
    textStyle: {
      color: '#fff'
    },
    color: ['#FFE348', '#00CCED'],
    //  图表距边框的距离
    grid: {
      top: '26%',
      left: '4%',
      right: '0',
      bottom: '0',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: params.xName,
      axisLine: {
        lineStyle: {
          color: '#114b99'
        }
      }
    },
    yAxis: [
      {
        type: 'value',
        name: '数量',
        axisLine: {
          show: false,
          lineStyle: {
            color: '#114b99'
          }
        }
      },
      {
        type: 'value',
        name: '百分比',
        min: 0,
        max: 100,
        interval: 20,
        axisLabel: {
          formatter: '{value} %'
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#114b99'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#114b99'
          }
        }
      }
    ],
    series: params.data
  }
}

export function getCommonOptions (params) {
  return {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,0,0,0.7)',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#aaa'
        }
      }
    },
    color: ['#0788FD', '#07E0FD'],
    toolbox: {
      show: false
    },
    barCategoryGap: '50',
    //  图表距边框的距离
    grid: {
      top: '30%',
      left: '30',
      right: '0',
      bottom: '3%',
      containLabel: true
    },
    legend: {
      show: false,
      x: 'right',
      y: 'top',
      itemWidth: 20,
      itemHeight: 5,
      itemRadius: 10,
      itemGap: 20,
      textStyle: {
        color: '#fff'
      }
    },
    textStyle: {
      color: '#fff'
    },
    xAxis: [
      {
        type: 'category',
        data: params.xName,
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#114b99'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '数值',
        axisLabel: {
          formatter: '{value}'
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#114b99'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#114b99'
          }
        }
      }
    ],
    series: params.data
  }
}
