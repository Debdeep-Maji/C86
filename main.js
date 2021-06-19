window.addEventListener("keydown", my_key_down);

function my_key_down(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("Shift and P pressed together.");
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_height").innerHTML = block_image_height;
        document.getElementById("current_width").innerHTML = block_image_width;
    }
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("Shift and M pressed together.");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_height").innerHTML = block_image_height;
        document.getElementById("current_width").innerHTML = block_image_width;
    }
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }

    if (keyPressed == '39') {
        right();
        console.log("right");
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    
    if (keyPressed == '87') {
        new_image('wall.jpg');
        console.log("w");
    }

    if (keyPressed == '71') {
        new_image('ground.png');
        console.log("g");
    }

    if (keyPressed == '76') {
        new_image('light_green.png');
        console.log("l");
    }

    if (keyPressed == '84') {
        new_image('trunk.jpg');
        console.log("t");
    }

    if (keyPressed == '82') {
        new_image('roof.jpg');
        console.log("r");
    }

    if (keyPressed == '89') {
        new_image('yellow_wall.png');
        console.log("y");
    }

    if (keyPressed == '68') {
        new_image('dark_green.png');
        console.log("d");
    }

    if (keyPressed == '85') {
        new_image('different.png');
        console.log("u");
    }

    if (keyPressed == '67') {
        new_image('cloud.jpg');
        console.log("c");
    }

}