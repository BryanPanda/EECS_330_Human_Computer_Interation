var i = 0;
var input_data_time = [0, 0, 0, 0, 0, 0, 0];
var input_data_weight = [0, 0, 0, 0, 0, 0, 0];
var data_time = [0.9, 1.8, 2.1, 2.5, 2.2, 2.0, 0.7];
var data_weight = [190, 180, 150, 120, 167, 117, 182];

if (sessionStorage.getItem("i") != null) {
    i = sessionStorage.getItem("i");
}



function draw() {
    $( "#new_habit_name" ).change(function() {
        sessionStorage.setItem("habit_name", document.getElementById("new_habit_name").value);
    });

    if (i > 0) {
        for (j = 0; j < i; j++) {
            input_data_time[j] = data_time[j];
            input_data_weight[j] = data_weight[j];
            localStorage.setItem('is_new', "False");
        }
        document.getElementById("histogram3").style.opacity = "1.0";
        document.getElementById("histogram4").style.opacity = "1.0";
        document.getElementById("exercise_progress_1_old").style.display = "none";
        document.getElementById("exercise_progress_1_new").style.display = "block";
        document.getElementById("exercise_progress_2_old").style.display = "none";
        document.getElementById("exercise_progress_2_new").style.display = "block";
        document.getElementById("random_1").innerHTML = Math.ceil(1000 * (2 + Math.random()));
        document.getElementById("random_2").innerHTML = Math.ceil(50 * (1 + Math.random()));
        document.getElementById("random_3").innerHTML = Math.ceil(250 * (2 + Math.random()));
    } else {
        document.getElementById("exercise_progress_1_new").style.display = "none";
        document.getElementById("exercise_progress_2_new").style.display = "none";
    }
    sessionStorage.setItem("i", i);
    document.getElementById("new_habit_name").value = sessionStorage.getItem("habit_name");

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
            data: input_data_time
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
            data: input_data_weight
        }]
    };

    // use the config and data specified above to show chart
    myChart3.setOption(option3);
    myChart4.setOption(option4);
}

function new_entry() {
    var length = document.getElementById("length").value;
    var weight = document.getElementById("weight").value;
    var datepicker = $("#datepicker").val();
    if (length == "" || weight == "" || datepicker == "") {
        alert("Empty Entry!");
    } else {
        i++;
        draw();
        var habit_name = sessionStorage.getItem("habit_name");
        if (habit_name != document.getElementById("new_habit_name").value) {
            sessionStorage.setItem("habit_name", "No Name");
        }
        document.getElementById("length").value = "";
        document.getElementById("weight").value = "";
        document.getElementById("datepicker").value = "";
    }
}

function habit_name(ele) {
    if(event.key === 'Enter') {
        // sessionStorage.setItem("habit_name", ele.value);
        document.getElementById("log_new_entry").click();
    }
}