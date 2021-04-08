# CBC-Work-Day-Scheduler

This is my submission for UCSD's Coding Bootcamp Homework #5.

## Objective

The objective of this homework is to use all the jQuery and other third party APIs learned over the week and create the function for the work day scheduler provided

## Links

Github: https://github.com/Damaximum/CBC-Work-Day-Scheduler

Webpage: https://damaximum.github.io/CBC-Work-Day-Scheduler/

## Screenshots

Calendar Example:
![Alt text](./screenshots/Webpage.png?raw=true "Calendar Example")

## Process

The process for this homework was quite straightforward thanks especially to the fact that a lot of things were pre-made for the homework. (Esp the CSS). The process for this homework was basically just following the acceptence criteria that was given as part of the instructions. 

### Current Day

The first acceptance criteria was to have the current day displayed on page load. As part of one of the class activities, we went over something like this, or rather exaclty this, so I just used the same code for that. (I may have gone a bit overboard and set it up so that it reflects an updating current time.)

### Timeblocks

The next was mostly HTML, but it was to build time blocks with the Standard Business hours (9-5). So i created a block with the hour, a text box and a button. Then the rest was using bootstrap to try to make it look nice and like the provided example.

The text box covers another acceptance criteria, which is to be able to enter an event into the timeblock.

### Current Hour Timeblocks

This was where the Javascript comes into play. The acceptance criteria looked for the time block to reflect the current hour (with a premade CSS theme). For this I started with getting the current hour. This was rather simple since I could use Method and just have it print out the hour. Then I discovered the use of the jQuery selector. With this and proper labeling (with the respective IDs in the HTML) I managed to get the Javascript to cycle through the HTML with the IDs and check its data attribute (labeled 'time') and to set a class (for the CSS theme) by comparing (using '==' since Method outputs a string and I had inputed an integer/number) time to the current hour.

### Save Button

The save button was a similar situation after I thought things through. Using jQuery selectors again, and properly labeling the buttons, I was able to create one onclick function for each of the buttons. Using code I made for the last homework, I was able to save the text into an array of objects (with the hour and text as attributes of an object) and save the array to the localStorage.

### Recall/Persistent Information

For this one I got help from my TA. This also used the jQuery selector (MVP) to match to one of the IDs I had setup before and to apply the saved text to the textbox, allowing a quick and efficient loading of saved information in the correct textbox.