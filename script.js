const wave = document.getElementById("wave");

if (wave) {
  const bars = 74;

  for (let i = 0; i < bars; i++) {
    const bar = document.createElement("span");

    const distance =
      Math.abs(i - bars / 2) /
      (bars / 2);

    const peak =
      14 +
      (1 - distance) * 42 +
      ((i * 19) % 19);

    bar.style.setProperty(
      "--height",
      `${Math.round(peak)}px`
    );

    bar.style.setProperty(
      "--speed",
      `${0.5 + ((i * 11) % 60) / 100}s`
    );

    bar.style.setProperty(
      "--delay",
      `${-((i * 9) % 90) / 100}s`
    );

    wave.appendChild(bar);
  }
}


/* CURRENT YEAR */

const year =
  document.getElementById("year");

if (year) {
  year.textContent =
    new Date().getFullYear();
}


/* CURSOR LIGHT */

const cursorLight =
  document.getElementById("cursorLight");

window.addEventListener(
  "pointermove",
  (event) => {

    if (!cursorLight) {
      return;
    }

    cursorLight.style.left =
      `${event.clientX}px`;

    cursorLight.style.top =
      `${event.clientY}px`;

  }
);


/* SCROLL REVEAL */

const revealTargets =
  document.querySelectorAll(
    `
    .release-row,
    .manifesto-main,
    .news-card,
    .bio-copy,
    .contact
    `
  );


revealTargets.forEach(
  (element) => {

    element.classList.add(
      "reveal"
    );

  }
);


const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "visible"
            );

          }

        }
      );

    },

    {
      threshold: 0.12
    }

  );


revealTargets.forEach(
  (element) => {

    observer.observe(
      element
    );

  }
);
