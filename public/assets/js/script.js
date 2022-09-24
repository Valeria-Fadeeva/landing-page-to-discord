const scroll_button = document.querySelector("input.scroll_button");

scroll_button.addEventListener('click', function() {
    document.querySelector("div.second_block").scrollIntoView({behavior: "smooth"});
});

const scroll_button_2 = document.querySelector("input.scroll_button_2");

scroll_button_2.addEventListener('click', function() {
    document.querySelector("div.third_block").scrollIntoView({behavior: "smooth"});
});


const dating_button = document.querySelector("input.dating_button");

dating_button.addEventListener('click', function() {
    window.open("https://valeria_fadeeva.t.me", "_blank");
});


const study_button = document.querySelector("input.study_button");

study_button.addEventListener('click', function() {
    window.open("https://discord.gg/cY68zDnnqF", "_blank");
});


const work_button = document.querySelector("input.work_button");

work_button.addEventListener('click', function() {
    window.open("https://valeria_fadeeva_me.t.me", "_blank");
});


const buttons = document.querySelectorAll("input.discord_button");

for(i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        window.open("https://discord.gg/cY68zDnnqF", "_blank");
    });
}
