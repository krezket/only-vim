let ctrlPressed = false;
let dKey = false;

document.addEventListener("keydown", function(event) {
    if (event.key ==="n") {
        console.log("n pressed");
    }; 
});

document.addEventListener("keydown", function(event) {
    if (event.key === "d" && !dKey) {
        dKey = 'hello';
        console.log("d:", dKey);
    };

    if (dKey === 'hello' && event.key === 'Control') {
        console.log('nope')
    };

    if (event.key === 'Control' && dKey === false) {
        ctrlPressed = true;
        dKey = true;
        console.log("ctrl down:", ctrlPressed);
        console.log("d:", dKey);
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
        dKey = false;
        // console.log("released");
        console.log("ctrl up:", ctrlPressed);
        console.log("d:", dKey);
    };

    if (event.key === "d") {
        dKey = false;
        console.log("d:", dKey);
    };
});
