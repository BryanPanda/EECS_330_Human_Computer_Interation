var i = 0;
var input_data_time = [0, 0, 0, 0, 0, 0, 0];
var input_data_weight = [0, 0, 0, 0, 0, 0, 0];
var data_time = [0.9, 1.8, 2.1, 2.5, 2.2, 2.0, 0.7];
var data_weight = [190, 180, 150, 120, 167, 117, 182];

if (sessionStorage.getItem("i") != null) {
    i = sessionStorage.getItem("i");
}

function draw() {
    if (i > 0) {
        for (j = 0; j < i; j++) {
            input_data_time[j] = data_time[j];
            input_data_weight[j] = data_weight[j];
            localStorage.setItem('is_new', "False");
        }
        document.getElementById("histogram3").style.opacity = "1.0";
        document.getElementById("histogram4").style.opacity = "1.0";
    }
    sessionStorage.setItem("i", i);

    // initialize echarts instance 
    var myChart3 = echarts.init(document.getElementById('histogram3'));
    var myChart4 = echarts.init(document.getElementById('histogram4'));
    // set up config and data for chart
    var option3 = {
        title: {
            text: "Past Week's Exercise",
            x: 'center'
        },
        // tooltip: {},
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
            data: input_data_time
        }]
    };

    var option4 = {
        title: {
            text: "Weight Over The Past Week",
            x: 'center'
        },
        // tooltip: {},
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
            data: input_data_weight
        }]
    };

    // use the config and data specified above to show chart
    myChart3.setOption(option3);
    myChart4.setOption(option4);
}


function new_entry() {
    i++;
    draw();
    var habit_name = localStorage.getItem("habit_name");
    if (habit_name != document.getElementById("new_habit_name").value) {
        localStorage.setItem("habit_name", "No Name"); 
    }
}

function habit_name(ele) {
    if(event.key === 'Enter') {
        localStorage.setItem("habit_name", ele.value);   
        document.getElementById("log_new_entry").click();
    }
}