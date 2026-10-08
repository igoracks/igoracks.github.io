const wave = document.getElementById("wave");

if (wave) {
  const bars = 64;

  for (let i = 0; i < bars; i++) {
    const bar = document.createElement("span");

    const center = Math.abs(i - bars / 2) / (bars / 2);
    const height = 22 + (1 - center) * 48 + ((i * 17) % 25);

    bar.style.setProperty("--height", `${Math.round(height)}px`);
    bar.style.setProperty(
      "--speed",
      `${0.55 + ((i * 13) % 65) / 100}s`
    );
    bar.style.setProperty(
      "--delay",
      `${-((i * 7) % 80) / 100}s`
    );

    wave.appendChild(bar);
  }
}

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const animated = document.querySelectorAll(
  ".release, .news article, .bio > div:last-child, .contact"
);

animated.forEach((el) => {
  el.classList.add("fade");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12
  }
);

animated.forEach((el) => {
  observer.observe(el);
});
