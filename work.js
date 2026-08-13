//  Work Subtitle
const textElement = document.getElementById("changingText");

const texts = [
    "🎨 MY ART",
    "✏️ MY DESIGN",
    "💡 MY IDEAS",
    "🖌️ MY CREATIONS",
    "🚀 MY WORK"
];

let currentIndex = 0;

textElement.addEventListener("animationiteration", () => {
    currentIndex++;

    if (currentIndex >= texts.length) {
        currentIndex = 0;
    }

    textElement.textContent = texts[currentIndex];
});

