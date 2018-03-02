var i_instrument = 0;
var input_data_time = [0, 0, 0, 0, 0, 0, 0];
var input_data_weight = [0, 0, 0, 0, 0, 0, 0];
var data_time = [0.9, 0.8, 0.1, 1.0, 2.2, 1.5, 1.1];
var data_weight = [3, 1, 5, 8, 8, 2, 7];

if (sessionStorage.getItem("i_instrument") != null) {
    i_instrument = sessionStorage.getItem("i_instrument");
}

function draw() {
    if (i_instrument > 0) {
        for (j = 0; j < i_instrument; j++) {
            input_data_time[j] = data_time[j];
            input_data_weight[j] = data_weight[j];
            localStorage.setItem('is_new', "False");
        }
        // Exercise charts
        document.getElementById("exercise_progress_1_old").style.display = "none";
        document.getElementById("exercise_progress_1_new").style.display = "block";
        document.getElementById("exercise_progress_2_old").style.display = "none";
        document.getElementById("exercise_progress_2_new").style.display = "block";
        document.getElementById("random_1").innerHTML = Math.ceil(1000 * (2 + Math.random()));
        document.getElementById("random_2").innerHTML = Math.ceil(50 *  (1 + Math.random()));
        document.getElementById("random_3").innerHTML = Math.ceil(250 * (2 + Math.random()));
        // Learn Insturment charts
        document.getElementById("histogram5").style.opacity = "1.0";
        document.getElementById("histogram6").style.opacity = "1.0";

    } else {
        document.getElementById("exercise_progress_1_new").style.display = "none";
        document.getElementById("exercise_progress_2_new").style.display = "none";
    }
    sessionStorage.setItem("i_instrument", i_instrument);

    // initialize echarts instance
    var myChart5 = echarts.init(document.getElementById('histogram5'));
    var myChart6 = echarts.init(document.getElementById('histogram6'));

    // set up config and data for chart

    // Learn Instrument
    var option5 = {
        title: {
            text: "Past Week's Practice",
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
    
    var option6 = {
        title: {
            text: "Number of Pieces",
            x: 'center'
        },
        tooltip: {},
        legend: {
            left: 'left',
            data:['Pieces']
        },
        xAxis: {
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {},
        series: [{
            name: 'Pieces',
            type: 'bar',
            data: input_data_weight
        }]
    };

    // use the config and data specified above to show chart
    myChart5.setOption(option5);
    myChart6.setOption(option6);
}


function new_entry() {
    i_instrument++;
    draw();
    var habit_name_instrument = localStorage.getItem("habit_name_instrument");
    if (habit_name_instrument != document.getElementById("new_habit_name").value) {
        localStorage.setItem("habit_name_instrument", "No Name");
    }
}

function habit_name(ele) {
    if(event.key === 'Enter') {
        localStorage.setItem("habit_name_instrument", ele.value);
        document.getElementById("log_new_entry").click();
    }
}
