let ctrlPressed = false;

document.addEventListener("keydown", function(event) {
    if (event.key ==="n") {
        console.log("n pressed");
    }; 
});

document.addEventListener("keydown", function(event) {
    if (event.key === 'Control') {
        ctrlPressed = true;
        // console.log("pressed");
    }
    if (ctrlPressed && event.key ==="d") {
        event.preventDefault();
        console.log("ctrl + d pressed");
    }; 
});

document.addEventListener("keydown", function(event) {
    if (ctrlPressed) {
        if (event.key === "u") {
            event.preventDefault();
            console.log("ctrl + u pressed");
        };
    }; 
});

document.addEventListener("keyup", function(event) {
    if (event.key === "Control") {
        ctrlPressed = false;
        // console.log("released");
    }
})
