




// Function for current day
function currentDay () {
    var currentDay = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
    $('#currentDay').html(currentDay)
};

currentDay();
setInterval(currentDay, 1000);