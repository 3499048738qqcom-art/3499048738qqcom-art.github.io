document.addEventListener("mousemove", function (e) {

  const x =
    (e.clientX / window.innerWidth - 0.5) * 12;

  const y =
    (e.clientY / window.innerHeight - 0.5) * 12;

  const stars =
    document.querySelector(".stars");

  stars.style.transform =
    `translate(${x}px, ${y}px)`;

});


