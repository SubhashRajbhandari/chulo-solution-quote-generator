const quotes = {
    science: [
      "The important thing is not to stop questioning. Curiosity has its own reason for existing. - Albert Einstein",
      "Science is a way of thinking much more than it is a body of knowledge. - Carl Sagan",
      "Somewhere, something incredible is waiting to be known. - Carl Sagan",
      "The best thing about science is that it's true whether or not you believe in it. - Neil deGrasse Tyson",
      "The science of today is the technology of tomorrow. - Wernher von Braun",
      "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life. - Bill Gates"
    ],
    inspiration: [
        "We cannot solve problems with the kind of thinking we employed when we came up with them.  — Albert Einstein",
        "Learn as if you will live forever, live like you will die tomorrow. — Mahatma Gandhi", 
        "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together. —Diane McLaren"
    ]
  };

  let currentCategory = "science";
  let currentQuoteIndex = 0;
  let fontSize = 16;

  const quoteElement = document.getElementById("quote");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const randomBtn = document.getElementById("randomBtn");
  const categorySelect = document.getElementById("categorySelect");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const increaseFontBtn = document.getElementById("increaseFontBtn");
  const decreaseFontBtn = document.getElementById("decreaseFontBtn");

  function displayQuote() {
    quoteElement.textContent = quotes[currentCategory][currentQuoteIndex];
  }
  
  function showNextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes[currentCategory].length;
    displayQuote();
  }
  
  function showPrevQuote() {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
    displayQuote();
  }
  
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes[currentCategory].length);
    currentQuoteIndex = randomIndex;
    displayQuote();
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  
  function increaseFontSize() {
    fontSize += 2;
    quoteElement.style.fontSize = `${fontSize}px`;
  }
  
  function decreaseFontSize() {
    fontSize = Math.max(fontSize - 2, 12);
    quoteElement.style.fontSize = `${fontSize}px`;
  }

  prevBtn.addEventListener("click", showPrevQuote);
  nextBtn.addEventListener("click", showNextQuote);
  randomBtn.addEventListener("click", showRandomQuote);
  categorySelect.addEventListener("change", () => {
    currentCategory = categorySelect.value;
    showNextQuote();
  });
  darkModeToggle.addEventListener("change", toggleDarkMode);
  increaseFontBtn.addEventListener("click", increaseFontSize);
  decreaseFontBtn.addEventListener("click", decreaseFontSize);
  
  displayQuote();