// ────────── Dialogue + metadata ──────────
const dialogueList = [
    {
        image: "/assets/images/pages/01.jpg",
        dialogue: "“Ashley, could you at least let us tell us next time you use all of the garlic?”",
        character: "Mom",
        speed: "30"
    },
    {
        image: "/assets/images/pages/01.jpg",
        dialogue: "“You need garlic? Why didn't you just say so~?”",
        character: "Ashley",
        speed: "30"
    },
    {
        image: "/assets/images/pages/02.jpg",
        dialogue: "“Hhnnn~!”",
        character: "Ashley",
        speed: "30",
        sound: "/assets/sound/sfx_brap3.mp3"
    },
    {
        image: "/assets/images/pages/03.jpg",
        dialogue: "“Oh- Oh my god... What is the matter with you?! That smells terrible, Ashley!”",
        character: "Mom",
        speed: "30"
    },
        {
        image: "/assets/images/pages/03.jpg",
        dialogue: "“Ugh. Forget I even asked!”",
        character: "Mom",
        speed: "30"
    },
    {
        image: "/assets/images/pages/03.jpg",
        dialogue: "(“Why do I even bother with you...”)",
        character: "Mom",
        speed: "30"
    }
];

// ────────── ? ──────────
let currentIndex = 0;
let atEnd = false;

// Containers, not the data
const diaChrText = document.getElementById("diaText");
const diaChrName = document.getElementById("diaName");
const comicPage = document.getElementById("comicPage");

const audioEvent = new Audio();

// Dialogue etadata ---> real data
const chrColor = {
    "Mom":      "#C7C86B",
    "Ashley":   "#D17CB7"
};

const chrVoice = {
    "Mom":      "/assets/sound/txt_mom.mp3",
    "Ashley":   "/assets/sound/txt_ashley.mp3"
};

const brapNo = Math.floor(Math.random() * 3) + 1; // UNUSED or now

// ────────── ? ──────────


// ────────── ? ──────────
function showDialogue(index) {
    if (index < dialogueList.length) {
        const entry = dialogueList[index];

        // Dialogue color (from character metadata)
        diaChrText.style.color = chrColor[entry.character] || "#FF0000";

        // Replace text + image on progress

        diaChrText.textContent = entry.dialogue; // no longer used, replaced by ut/dr/banjocazooie text scroll
        diaChrName.textContent = entry.character;
        comicPage.src = entry.image;

        // (Optional) `sound` handler
        audioEvent.pause(); // Stop audio-event after progressing + if one is already playing

        if (entry.sound) {
            audioEvent.src = entry.sound;
            audioEvent.play();
        }

    } else { // When at the end:
        diaChrName.textContent = "";
        diaChrText.textContent = "Restart?";
        comicPage.src = "";

        atEnd = true;
    }
}

// Makes the magic happen
showDialogue(currentIndex);

// ────────── ? ──────────
document.getElementById("diaText").addEventListener("click", () => {
    if (atEnd) {
        currentIndex = 0;
        atEnd = false;
    } else {
        currentIndex++; // Increate index / move to next page
    }
    showDialogue(currentIndex);
    brapNo = Math.floor(Math.random() * 3) + 1; // Re-rolls the brap no
    console(brapNo);
});
