const jsPsych = initJsPsych();

const hello_trial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Hello World!"
}

const timeline = []; 

      // Define your trials using the imported plugin.
      const trial1 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: 'Trial 1',
        choices: "ALL_KEYS"
      };
     

      const trial2 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: 'Trial 2',
        choices: "ALL_KEYS"
      };
     

      const trial_end = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: 'End',
        choices: "NO_KEYS"
      };
     
      timeline.push(
        trial1,
        trial2,
        trial_end
      )

jsPsych.run([hello_trial, timeline]);