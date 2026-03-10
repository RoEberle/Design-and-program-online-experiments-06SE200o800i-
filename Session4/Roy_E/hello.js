/* this is…hello.js
<- this is JS comment
*/

// Method 2 <- this is also JS comment

console.log("Hello, World 2!")

/* age = [18-35]; participated = false; normal vision = true; cognitive impairment: false */

function EligibilityCriteria (age, hasParticipatedBefore, hasNormalVisionOrNot, hasCognitiveImpairment){
    if (age >= 18 && age <= 35 && hasParticipatedBefore === false && hasNormalVisionOrNot === true && hasCognitiveImpairment === false) {
            alert("Participant is eligible for the experiment.");
        } else {
            alert("Participant is not eligible for the experiment!");
        }
};

    let ageInput = 25; // or 17                                         
    let hasParticipatedBefore = false; // or True
    let hasNormalVisionOrNot = true;
    let hasCognitiveImpairment = false;
    console.log("age:", ageInput, "participated before?", hasParticipatedBefore, "normal vision:",hasNormalVisionOrNot, "cognitive impairment:",hasCognitiveImpairment)
    // will this be eligible?
    EligibilityCriteria(ageInput, hasParticipatedBefore, hasNormalVisionOrNot, hasCognitiveImpairment);

    ageInput = 17;                                         
    hasParticipatedBefore = false; // or True
    hasNormalVisionOrNot = true;
    hasCognitiveImpairment = false;
    console.log("age:", ageInput, "participated before?", hasParticipatedBefore, "normal vision:",hasNormalVisionOrNot, "cognitive impairment:",hasCognitiveImpairment)
    // will this be eligible?
    EligibilityCriteria(ageInput, hasParticipatedBefore, hasNormalVisionOrNot, hasCognitiveImpairment);

    ageInput = 25;                                         
    hasParticipatedBefore = true; 
    hasNormalVisionOrNot = true;
    hasCognitiveImpairment = false;
    console.log("age:", ageInput, "participated before?", hasParticipatedBefore, "normal vision:",hasNormalVisionOrNot, "cognitive impairment:",hasCognitiveImpairment)
    // will this be eligible?
    EligibilityCriteria(ageInput, hasParticipatedBefore, hasNormalVisionOrNot, hasCognitiveImpairment);

    ageInput = 25;                                         
    hasParticipatedBefore = false; 
    hasNormalVisionOrNot = true;
    hasCognitiveImpairment = false;
    console.log("age:", ageInput, "participated before?", hasParticipatedBefore, "normal vision:",hasNormalVisionOrNot, "cognitive impairment:",hasCognitiveImpairment)
    // will this be eligible?
    EligibilityCriteria(ageInput, hasParticipatedBefore, hasNormalVisionOrNot, hasCognitiveImpairment);

