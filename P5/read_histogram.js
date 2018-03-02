var i_read = 0;
var input_data_time = [0, 0, 0, 0, 0, 0, 0];
var input_data_weight = [0, 0, 0, 0, 0, 0, 0];
var data_time = [0.5, 1.1, 0.7, 2.5, 2.2, 1.3, 0.7];
var data_weight = [8, 17, 5, 3, 16, 10, 8];

if (sessionStorage.getItem("i_read") != null) {
    i_read = sessionStorage.getItem("i_read");
}

function draw() {
    if (i_read > 0) {
        for (j = 0; j < i_read; j++) {
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
        document.getElementById("histogram7").style.opacity = "1.0";
        document.getElementById("histogram8").style.opacity = "1.0";

    } else {
        document.getElementById("exercise_progress_1_new").style.display = "none";
        document.getElementById("exercise_progress_2_new").style.display = "none";
    }
    sessionStorage.setItem("i_read", i_read);

    // initialize echarts instance
    var myChart7 = echarts.init(document.getElementById('histogram7'));
    var myChart8 = echarts.init(document.getElementById('histogram8'));

    // set up config and data for chart
    var option7 = {
        title: {
            text: "Past Week's Reading",
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
    
    var option8 = {
        title: {
            text: "Number of Pages",
            x: 'center'
        },
        tooltip: {},
        legend: {
            left: 'left',
            data:['Pages']
        },
        xAxis: {
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {},
        series: [{
            name: 'Pages',
            type: 'bar',
            data: input_data_weight
        }]
    };

    // use the config and data specified above to show chart
    myChart7.setOption(option7);
    myChart8.setOption(option8);
}


function new_entry() {
    i_read++;
    draw();
    var habit_name_read = localStorage.getItem("habit_name_read");
    if (habit_name_read != document.getElementById("new_habit_name").value) {
        localStorage.setItem("habit_name_read", "No Name");
    }
}

function habit_name(ele) {
    if(event.key === 'Enter') {
        localStorage.setItem("habit_name_read", ele.value);
        document.getElementById("log_new_entry").click();
    }
}
