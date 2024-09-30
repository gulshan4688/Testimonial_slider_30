// we will start with an array to list the names ,paras and img links for the testimonials

const imgEl = document.querySelector("img");
const usernameEl = document.querySelector(".username");
const textEl = document.querySelector(".text");
const testimonials = [
  {
    name: "Kendrick lamar",
    imglink:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimonia:
      "This project exceeded my expectations in every way. The attetive features, and seamless. I've seen immediate results after incorporating it into my Highly recommend!.",
  },
  {
    name: "Honey Singh",
    imglink:
      "https://images.unsplash.com/photo-1611695434398-4f4b330623e6?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimonia:
      "Impressive design and functionality! It’s streamlined my work process, saving time and effort. Highly recommended for anyone seeking efficiency and ease of use.",
  },
  {
    name: "Raftar",
    imglink:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimonia:
      "A true game-changer! The project offers an intuitive interface and powerful features. It has greatly improved my productivity and workflow",
  },
];

let idx = 0;
updateTestimonial();
function updateTestimonial() {
  const { name, imglink, testimonia } = testimonials[idx];
  imgEl.src = imglink;
  textEl.innerText = testimonia;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 2000);
}
