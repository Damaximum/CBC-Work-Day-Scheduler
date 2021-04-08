var timeText = JSON.parse(localStorage.getItem('timeText')) || [];




// Function for current day
function currentDay () {
    var currentDay = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
    $('#currentDay').html(currentDay)
};

currentDay();
setInterval(currentDay, 1000);

// Getting the current hour
var currentTime = moment().format('H');

// Checking current hour to hour of box
$('*[id*="hour"]').each(function() {
    var sectionTime = $(this).data('time');
    if (sectionTime == currentTime) {
        $(this).addClass('present');
    } else if (sectionTime < currentTime) {
        $(this).addClass('past');
    } else {
        $(this).addClass('future');
    };
});

// Save button functionality
$('*[id*="saveButton"]').each(function() {
    $(this).on('click', function() {
        var textInput = $(this).siblings('.description').val();
        var blockHour = $(this).siblings('.description').data('time')
        // console.log(blockHour)

        timeText.push({
            hour: blockHour,
            text: textInput
        }); 

        timeText.sort(function(a, b) {
            return parseFloat(b.hour) - parseFloat(a.hour);
        });
// console.log(timeText);
        localStorage.setItem('timeText', JSON.stringify(timeText));
    });
});

// Loading up saved information
for (var i = 0; i < timeText.length; i++) {
    $(`[data-time=${timeText[i].hour}]`).val(timeText[i].text)
};