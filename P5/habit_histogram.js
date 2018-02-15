function draw() {
    // initialize echarts instance 
    var myChart3 = echarts.init(document.getElementById('histogram3'));
    var myChart4 = echarts.init(document.getElementById('histogram4'));

    // set up config and data for chart
    var option3 = {
        title: {
            text: "Past Week's Exercise",
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

    var option4 = {
        title: {
            text: "Weight Over The Past Week",
            x: 'center'
        },
        tooltip: {},
        legend: {
            left: 'left',
            data:['lbs']
        },
        xAxis: {
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {},
        series: [{
            name: 'lbs',
            type: 'bar',
            // data: [5, 20, 36, 10, 10, 20, 14]
            data: [0, 0, 0, 0, 0, 0, 0]
        }]
    };

    // use the config and data specified above to show chart
    myChart3.setOption(option3);
    myChart4.setOption(option4);
}
