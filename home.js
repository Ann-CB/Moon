const lunarMonth = 29.53058867;

const knownNewMoon = new Date("2000-01-06T18:14:00Z");

const today = new Date();

const days =
(today - knownNewMoon) /
1000 /
60 /
60 /
24;

const moonAge =
((days % lunarMonth) + lunarMonth) %
lunarMonth;

const illumination =
(1 - Math.cos((2 * Math.PI * moonAge) / lunarMonth)) / 2;

const percent =
Math.round(illumination * 100);

let phase = "";
let emoji = "";

if (moonAge < 1.84566){
    phase = "New Moon";
    emoji = "🌑";
}
else if (moonAge < 5.53699){
    phase = "Waxing Crescent";
    emoji = "🌒";
}
else if (moonAge < 9.22831){
    phase = "First Quarter";
    emoji = "🌓";
}
else if (moonAge < 12.91963){
    phase = "Waxing Gibbous";
    emoji = "🌔";
}
else if (moonAge < 16.61096){
    phase = "Full Moon";
    emoji = "🌕";
}
else if (moonAge < 20.30228){
    phase = "Waning Gibbous";
    emoji = "🌖";
}
else if (moonAge < 23.99361){
    phase = "Last Quarter";
    emoji = "🌗";
}
else if (moonAge < 27.68493){
    phase = "Waning Crescent";
    emoji = "🌘";
}
else{
    phase = "New Moon";
    emoji = "🌑";
}

document.getElementById("moonIcon").innerHTML = emoji;

document.getElementById("phaseName").innerHTML = phase;

document.getElementById("illuminationText").innerHTML =
percent + "% Illuminated";

document.getElementById("moonAge").innerHTML =
"Moon Age: " + moonAge.toFixed(1) + " days";

setTimeout(() => {
    document.getElementById("fill").style.width = percent + "%";
},200);