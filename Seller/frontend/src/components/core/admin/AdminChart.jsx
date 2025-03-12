import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts'

const LineChart = () => {
  const option = {
    title: {
      text: 'Sales Overview',
    },
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '5%',
      right: '5%',
      top: '10%',
      bottom: '5%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Sales',
        type: 'line',
        data: [150, 230, 224, 218, 135, 147, 260, 350, 400, 410, 600, 650],
        smooth: true, // Makes the line smooth
        lineStyle: {
          color: '#5470C6',
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(200, 200, 198, 0.5)', // Light blue
            },
            {
              offset: 1,
              color: 'rgba(255, 255, 255, 0.5)', // White
            },
          ]),
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />;
};

export default LineChart;
