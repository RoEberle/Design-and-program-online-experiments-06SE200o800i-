document.getElementById("domBtn").onclick = function(){
    alert(`This was called via dom.`);
};


document.addEventListener("keydown", function(event) {
    switch(event.key){
        case "r":
            alert(`r-key was pressed - event listener`);
            break;
        case "R":
            alert(`R-key was pressed - event listener`);
            break;
        default:
            alert(`no valid key was presses`);
            break;
    };
}
);



