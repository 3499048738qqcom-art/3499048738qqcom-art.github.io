/* =====================================================
   ANGRY PASSERBY
   Interactive Effects
===================================================== */


/* =====================================================
   1. 鼠标跟随光晕
===================================================== */

const glow = document.querySelector(".cursor-glow");

window.addEventListener("pointermove", (event) => {

  if (!glow) return;

  glow.style.left = `${event.clientX}px`;

  glow.style.top = `${event.clientY}px`;

});


/* =====================================================
   2. 滚动出现动画
===================================================== */

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


document
  .querySelectorAll(".reveal")
  .forEach((element) => {

    revealObserver.observe(element);

  });


/* =====================================================
   3. 导航栏自动高亮
===================================================== */

const sections =
  document.querySelectorAll(
    "main section[id]"
  );


const navLinks =
  document.querySelectorAll(
    ".nav a"
  );


function updateNavigation() {

  let currentSection = "home";


  sections.forEach((section) => {

    const sectionTop =
      section.getBoundingClientRect().top;


    if (sectionTop <= 160) {

      currentSection =
        section.id;

    }

  });


  navLinks.forEach((link) => {

    const target =
      link.getAttribute("href");


    link.classList.toggle(
      "active",
      target === `#${currentSection}`
    );

  });

}


window.addEventListener(
  "scroll",
  updateNavigation,
  {
    passive: true
  }
);


updateNavigation();


/* =====================================================
   4. 鼠标悬停项目时增加轻微效果
===================================================== */

const projectCards =
  document.querySelectorAll(
    ".project-card"
  );


projectCards.forEach((card) => {

  card.addEventListener(
    "mousemove",
    (event) => {

      const rect =
        card.getBoundingClientRect();


      const x =
        ((event.clientX - rect.left) /
          rect.width - 0.5) * 4;


      const y =
        ((event.clientY - rect.top) /
          rect.height - 0.5) * -4;


      card.style.transform =
        `perspective(900px)
         rotateX(${y}deg)
         rotateY(${x}deg)`;

    }
  );


  card.addEventListener(
    "mouseleave",
    () => {

      card.style.transform = "";

    }
  );

});


/* =====================================================
   5. 防止页面加载时动画闪烁
===================================================== */

window.addEventListener(
  "load",
  () => {

    document.body.classList.add(
      "page-loaded"
    );

  }
);