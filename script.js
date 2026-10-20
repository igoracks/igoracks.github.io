const mouseGlow =
  document.getElementById("mouseGlow");

const megaTitle =
  document.getElementById("megaTitle");


/* MOUSE LIGHT */

window.addEventListener(
  "pointermove",
  (event) => {

    if (mouseGlow) {

      mouseGlow.style.left =
        `${event.clientX}px`;

      mouseGlow.style.top =
        `${event.clientY}px`;

    }

  }
);


/* TRUE 3D TITLE MOVEMENT */

if (megaTitle) {

  megaTitle.addEventListener(
    "pointermove",
    (event) => {

      const rect =
        megaTitle.getBoundingClientRect();

      const x =
        (
          event.clientX -
          rect.left
        ) /
        rect.width;

      const y =
        (
          event.clientY -
          rect.top
        ) /
        rect.height;

      const rotateY =
        (x - 0.5) * 10;

      const rotateX =
        (0.5 - y) * 8;


      megaTitle.style.transform =
        `
        perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateZ(45px)
        scale(1.025)
        `;

    }
  );


  megaTitle.addEventListener(
    "pointerleave",
    () => {

      megaTitle.style.transform =
        `
        perspective(800px)
        rotateX(0deg)
        rotateY(0deg)
        translateZ(0)
        scale(1)
        `;

    }
  );

}


/* CURRENT YEAR */

const year =
  document.getElementById("year");

if (year) {

  year.textContent =
    new Date().getFullYear();

}


/* SCROLL REVEALS */

const revealElements =
  document.querySelectorAll(
    `
    .feed-item,
    .music-card
    `
  );

revealElements.forEach(
  element => {
    element.classList.add("reveal");
  }
);

/* PROGRESS BARS */

const progressBars =
  document.querySelectorAll(".progress[data-progress]");

progressBars.forEach((bar) => {
  const value = Number(bar.dataset.progress || 0);
  requestAnimationFrame(() => {
    bar.style.width = `${Math.max(0, Math.min(100, value))}%`;
  });
});

const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(
        entry => {

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
      threshold: 0.1
    }

  );


revealElements.forEach(
  element => {

    observer.observe(
      element
    );

  }
);
