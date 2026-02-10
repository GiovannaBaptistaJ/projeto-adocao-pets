// Frequently asked questions
const questions = document.querySelectorAll(
  ".frequently-questions-block button",
);

function questionOpenned(e) {
  const question = e.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("active");
  const active = answer.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function questionsEvent(question) {
  question.addEventListener("click", questionOpenned);
}

questions.forEach(questionsEvent);
