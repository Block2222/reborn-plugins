/*
    fixed?
*/
ModAPI.require("player");

// handle message and teleport player
ModAPI.addEventListener("key", (e) => {
    if (e.key == 49) {
        let X = prompt("Teleporter v1\nInput an X-coordinate");
        let Y = prompt("Teleporter v1\nInput a Y-coordinate");
        let Z = prompt("Teleporter v1\nInput a Z-coordinate");
        ModAPI.player.setPosition({
            x: X,
            y: Y,
            z: Z
        });
    }
});