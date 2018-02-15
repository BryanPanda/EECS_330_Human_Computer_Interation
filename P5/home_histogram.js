function draw() {
    // initialize echarts instance 
    var myChart = echarts.init(document.getElementById('histogram'));
    var myChart2 = echarts.init(document.getElementById('histogram2'));

    // set up config and data for chart
    var histogram = {
        title: {
            text: "Past Week's Habits",
            x: 'center'
        },
        tooltip: {},
        legend: {
            left: 'left',
            data:['Hours']
        },
        xAxis: {
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {},
        series: [{
            name: 'Hours',
            type: 'bar',
            // data: [5, 20, 36, 10, 10, 20, 14]
            data: [0, 0, 0, 0, 0, 0, 0]
        }]
    };

    var pie = {
        title : {
            text: 'Habit Breakdown',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['Exercise','Read','Learn Instrument','Paint','Practise a new skill']
        },
        series : [
        {
            // name: 'habit breakdown',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
            {value:0, name: 'example'},
            ],

            // data:[
            // {value:335, name:'Practise a new skill'},
            // {value:310, name:'Read'},
            // {value:234, name:'Exercise'},
            // {value:135, name:'Learn Instrument'},
            // {value:1350, name:'Paint'}
            // ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
        ]
    };

    // use the config and data specified above to show chart
    myChart.setOption(histogram);
    myChart2.setOption(pie);
}

        
