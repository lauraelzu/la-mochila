const cards = document.querySelectorAll(".card");
let current = 0;

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function showCard(index){
  cards.forEach(card => {
    card.classList.remove("active","flipped");
  });
  cards[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  if(!cards[current].classList.contains("flipped")){
    cards[current].classList.add("flipped");
  } else {
    current = (current + 1) % cards.length;
    showCard(current);
  }
});

prevBtn.addEventListener("click", () => {
  if(cards[current].classList.contains("flipped")){
    cards[current].classList.remove("flipped");
  } else {
    current = (current - 1 + cards.length) % cards.length;
    showCard(current);
  }
});
