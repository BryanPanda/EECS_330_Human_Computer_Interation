var input_data_time = [0, 0, 0, 0, 0, 0, 0];
var data_time = [0.9, 1.8, 2.1, 2.5, 2.2, 2.0, 0.7];
var input_data_habit = [{value:0, name: 'example'},];
var data_habit = [{value:310, name:'Read'},{value:234, name:'Exercise'},
{value:135, name:'Learn Instrument'}];

function draw() {
    var is_new = localStorage.getItem("is_new");
    var habit_name = sessionStorage.getItem("habit_name");
    var habit_name_instrument = sessionStorage.getItem("habit_name_instrument");
    var habit_name_read = sessionStorage.getItem("habit_name_read");
    var instrument = sessionStorage.getItem("i_instrument") == null || sessionStorage.getItem("i_instrument") == 0;
    var exercise = sessionStorage.getItem("i") == null || sessionStorage.getItem("i") == 0;
    var read = sessionStorage.getItem("i_read") == null || sessionStorage.getItem("i_read") == 0;
    if (exercise && instrument & read) {
        is_new = "True";
    }
    if (is_new == "False") {
        document.getElementById("histogram").style.opacity = "1.0";
        document.getElementById("histogram2").style.opacity = "1.0";
        document.getElementById("home_old_progress").style.display = "none";
        input_data_time = data_time;
        input_data_habit = data_habit;
        document.getElementById("created_habit").innerHTML = habit_name;
        document.getElementById("created_habit_instrument").innerHTML = habit_name_instrument;
        document.getElementById("created_habit_read").innerHTML = habit_name_read;
    } else {
        document.getElementById("home_new_progress").style.display = "none";
    }

    if (exercise) {
        document.getElementById("exercise_div").style.display = "none";
    } else {
        document.getElementById("current_habit").innerHTML = "directions_bike";
    }

    if (instrument) {
        document.getElementById("instrument_div").style.display = "none";
    } else {
        document.getElementById("current_habit_instrument").innerHTML = "music_note";
    }

    if (read) {
        document.getElementById("read_div").style.display = "none";
    } else {
        document.getElementById("current_habit_read").innerHTML = "book";
    }

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
            data: input_data_time
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
            data: ['Exercise','Read','Learn Instrument']
        },
        series : [
        {
            name: 'habit breakdown',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data: input_data_habit,

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
