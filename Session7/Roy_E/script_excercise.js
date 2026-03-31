

const jsPsych = initJsPsych();


// Canvas Functions
function circle (c) {
    var ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.arc(250, 300, 50, 0, 2 * Math.PI);
    ctx.fillstyle = 'black';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function mutli (c) {
    var ctx = c.getContext('2d');
    
}

// Trials

const Intro = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: 'This is the intro screen. Press enter to continue.',
    choice: 'enter'
}

const Fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<h1>X</h1>',
    choices: "NO_KEYS",
    trial_duration: 1000
}

const CanvasTrial1 = {
    type: jsPsychCanvasKeyboardResponse,
    canvas_size: [500, 500],
    stimulus: circle,
    prompt: 'This is a circle.',
    choices: 'NO_KEYS',
    trial_duration: 3000
}

const CanvasTrial2 = {
    type: jsPsychCanvasKeyboardResponse,
    canvas_size: [500, 500],
    stimulus: circle,
    prompt: 'These are more circles.',
    choices: 'NO_KEYS',
    trial_duration: 3000
}

const timeline = [Intro, Fixation, CanvasTrial1, CanvasTrial2];

jsPsych.run(timeline);

