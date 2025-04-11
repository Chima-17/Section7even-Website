// Interaktion: Größe auswählen
const größenButtons = document.querySelectorAll(".größe");
größenButtons.forEach(button => {
  button.addEventListener("click", () => {
    größenButtons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

// Kaufen-Button
const kaufenButton = document.querySelector(".kaufen");
if (kaufenButton) {
  kaufenButton.addEventListener("click", () => {
    const selected = document.querySelector(".größe.selected");
    if (selected) {
      alert(`Größe ${selected.textContent} wurde in den Warenkorb gelegt!`);
    } else {
      alert("Bitte zuerst eine Größe auswählen!");
    }
  });
}
// Leichter Parallax-Effekt für Hero-Hintergrund
window.addEventListener("scroll", function () {
    const hero = document.querySelector(".hero");
    const scroll = window.scrollY;
    hero.style.backgroundPositionY = `${20 + scroll * 0.1}%`; // startet bei 20%, bewegt sich leicht
  });
  
