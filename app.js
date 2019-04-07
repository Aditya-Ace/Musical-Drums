window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#FF5733",
        "#900C3F",
        "#DAF7A6",
        "#FFC300",
        "#581845",
        "#DC7633"
    ]



    //Let's play the sounds
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubble(index);
        })
    })

    //Let's create bubbles when you play sounds
    const createBubble = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function () {
            visual.removeChild(this);
        })
    };
});