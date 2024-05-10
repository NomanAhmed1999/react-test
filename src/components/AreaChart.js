import React from "react";
import ReactECharts from 'echarts-for-react';


const AreaChart = () => {

    const getOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['Jan 1', 'Jan 7', 'Jan 14', 'Jan 21', 'Jan 30']
        },
        toolbox: false,
        grid: {
            left: '3%',
            right: '4%',
            bottom: '30%',
            top: '2%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Jan 1', 'Jan 7', 'Jan 14', 'Jan 21', 'Jan 30']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            }
        ]
    };


    return (
        <div className="w-[600px] h-[200px] transition-all duration-1000 sxxl:w-[1000px]">
            <ReactECharts
                option={getOption}
            />
        </div>
    )
}

export default AreaChart;