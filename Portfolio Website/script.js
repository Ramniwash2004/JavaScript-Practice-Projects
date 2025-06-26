// Scroll section active links Function
  window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav-link");

    sections.forEach((section) => {
      let top = window.scrollY;
      let offset = section.offsetTop - 100;
      let height = section.offsetHeight;
      let id = section.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  //toggle icon navbar
  let menuIcon=document.querySelector("#menu-icon");
  let navbar=document.querySelector(".navbar");
  menuIcon.onclick=()=>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("acive");
  };

  // remove toggle icon and navbar  when click navbar link
  window.onscroll=()=>{
    let header=document.querySelector("header");
    header.classList.toggle("sticky",window.scroll > 100);


    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("acive");
  };

  //scroll reveal
  ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:100
 });
 ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
 ScrollReveal().reveal('.home-img,.portfolio-box,.contact form', { origin:'bottom' });
 ScrollReveal().reveal('.home-content h1,.about-img', { origin:'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });

 //typed js
 let typed=new Typed('.multiple-text',{
    strings:['a Full Stack Developer','Doing DSA(C++)','The Coder','The Editor','The Leader','a Full Stack Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:true
 });

 //skill progress bar
 const resumeList = document.querySelectorAll('.resume-list');
 const resumeBoxs = document.querySelectorAll('.resume-box');

 resumeList.forEach((list,idx)=>{
  list.addEventListener("click",()=>{
    document.querySelector(".resume-list.active").classList.remove("active");
    list.classList.add("active");

    document.querySelector(".resume-box.active").classList.remove("active");
    resumeBoxs[idx].classList.add("active");
  });
 });