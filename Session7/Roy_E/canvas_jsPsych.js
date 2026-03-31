/*  we will do canvas drawing using jsPsych
 instruction (right arrow key) -> fixation (1s) ->  bunny (until response by pressing spacebar) -> feedback (thumbs up for 1s) -> draw a smily face */

// const { initJsPsych } = require("jspsych");

// 7.2.1.1  finish step 0,1 in html x
// 7.2.1.2  finish step 2,4 in jsPsych x
// 7.2.3:  given a drawBunnyfn, make a trial to draw the bunny after fixation x
// 7.2.4: draw a smily face (A circle as the face, two smaller circles as the eyes, one semi circle as the mouth); make it run after end
// plus 1: draw an easter egg (with some decoration) next to the bunny 

//step 2:  initiate jsPsych
const jsPsych = initJsPsych();
// step 3: building timeline 
const timeline = [];
// instruction 
const instruction = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<h2 id='instruction'> Please press the <strong>space bar</strong> as soon as the stimulus appears. </h2>
               <p> press right arrow key to start! </p>
    `,
    choices: ['ArrowRight']
}
timeline.push(instruction);

// 7.2.2 make the trial_duration randomly selected from 1s, 2s or 3s
// fixation 
const fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "+",
    choices: "NO_KEYS",
    trial_duration: Math.floor(Math.random() * 3 + 1) * 1000
}
timeline.push(fixation);
console.log(`Fixation duration: ${fixation.trial_duration} ms`)

const drawBunnyfn = function (canvas){
    
    const context = canvas.getContext("2d");
   
    // The following is the block of drawing a bunny

    
       let x = canvas.width/2;
       let y = canvas.height/2;
   
       context.clearRect(0, 0, canvas.width, canvas.height);
   
       // COLORS
       const fur = "#F2F2F2";
       const stroke = "#B0B0B0";
       const blush = "#F8C8DC";
       const nose = "#E89CA9";
     
       // EARS (Left & Right)
       context.beginPath();
       context.ellipse(x - 20, y - 50, 10, 30, 0, 0, 2 * Math.PI);
       context.fillStyle = fur;
       context.fill();
       context.strokeStyle = stroke;
       context.stroke();
     
       context.beginPath();
       context.ellipse(x + 20, y - 50, 10, 30, 0, 0, 2 * Math.PI);
       context.fill();
       context.stroke();
     
       // HEAD
       context.beginPath();
       context.arc(x, y, 40, 0, 2 * Math.PI);
       context.fillStyle = fur;
       context.fill();
       context.stroke();
     
       // EYES
       context.beginPath();
       context.arc(x - 20, y - 10, 5, 0, 2 * Math.PI);
       context.arc(x + 20, y - 10, 5, 0, 2 * Math.PI);
       context.fillStyle = "#444";
       context.fill();
     
       // BLUSH (under eyes)
       context.beginPath();
       context.arc(x - 30, y + 10, 7, 0, 2 * Math.PI);
       context.arc(x + 30, y + 10, 7, 0, 2 * Math.PI);
       context.fillStyle = blush;
       context.fill();
     
       // NOSE
       context.beginPath();
       context.moveTo(x - 5, y + 10);
       context.lineTo(x + 5, y + 10);
       context.lineTo(x, y + 18);
       context.closePath();
       context.fillStyle = nose;
       context.fill();

}

const smile = function (c){
    const ctx = c.getContext('2d');
    // face
    ctx.beginPath();
    ctx.arc(250, 300, 100, 0, 2 * Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    //left exe
    ctx.beginPath();
    ctx.arc(220, 270, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    // right eye
    ctx.beginPath();
    ctx.arc(280, 270, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    //mouth
    ctx.beginPath();
    ctx.moveTo(200, 320);
    ctx.quadraticCurveTo(250, 350, 300, 320);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.lineWidth = 10;
}
const drawBunnyTrial = {
    type: jsPsychCanvasKeyboardResponse,
    canvas_size: [600,600],
    stimulus: drawBunnyfn,
    prompt: 'This is a bunny. Wait for 5 seconds and admire it!',
    choices: 'NO_KEYS',
    trial_duration: 5000
}
timeline.push(drawBunnyTrial);

const smiley = {
    type: jsPsychCanvasKeyboardResponse,
    canvas_size: [600,600],
    stimulus: smile,
    choices: 'NO_KEYS',
    trial_duration: 3000
}

timeline.push(smiley);

const end = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<h2>👍<h2>",
    choices: "NO_KEYS",
    trial_duration: 1000
}
timeline.push(end)

// step 4: run the timline
jsPsych.run(timeline)


