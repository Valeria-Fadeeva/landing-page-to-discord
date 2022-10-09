const scroll_buttons = document.querySelectorAll("input.scroll_button");

for(i = 0; i < scroll_buttons.length; i++) {
    scroll_buttons[i].addEventListener('click', function(e) {
        document.querySelector(e.target.attributes["data-target"].value).scrollIntoView({behavior: "smooth"});
    });
}


const dating_button = document.querySelector("input.dating_button");

dating_button.addEventListener('click', function() {
    window.open("https://valeria_fadeeva.t.me", "_blank");
});


const study_button = document.querySelector("input.study_button");

study_button.addEventListener('click', function() {
    window.open("https://discord.gg/725zXx7RhJ", "_blank");
});


const work_button = document.querySelector("input.work_button");

work_button.addEventListener('click', function() {
    window.open("https://valeria_fadeeva_me.t.me", "_blank");
});


const buttons = document.querySelectorAll("input.discord_button");

for(i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        window.open("https://discord.gg/725zXx7RhJ", "_blank");
    });
}
