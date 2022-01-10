function styckyNavigation() { var e = document.querySelector(".section-hero"); const t = new IntersectionObserver(e => { e = e[0]; console.log(e), e.isIntersecting ? document.body.classList.remove("sticky") : document.body.classList.add("sticky") }, { root: null, threshold: 0, rootMargin: "-80px" }); t.observe(e) } function navToggle() { const e = document.querySelector(".header"); e.addEventListener("click", () => { e.classList.toggle("nav-open") }) } function getFullYear() { const e = document.querySelector(".year"); e.textContent = (new Date).getFullYear() } function smoothScroll() { const e = document.querySelectorAll("a:link"); e.forEach(n => { n.addEventListener("click", e => { e.preventDefault(); const t = n.getAttribute("href"); if ("#" === t && window.scrollTo({ top: 0, behavior: "smooth" }), "#" !== t && t.startsWith("#")) { const o = document.querySelector(t); o.scrollIntoView({ behavior: "smooth" }) } }) }) } function checkFlexGap() { var e = document.createElement("div"); e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e); var t = 1 === e.scrollHeight; e.parentNode.removeChild(e), t || document.body.classList.add("no-flexbox-gap") } window.onload = () => { styckyNavigation(), smoothScroll(), checkFlexGap(), navToggle(), getFullYear() };

// window.onload = () => {
//   styckyNavigation();
//   smoothScroll();
//   checkFlexGap();
//   navToggle();
//   getFullYear();
// };

// function styckyNavigation() {
//   const sectionHeroEl = document.querySelector('.section-hero');
//   const options = {
//     root: null, // The element that is used as the viewport for checking visibility of the target.
//     threshold: 0, // Percentage of the target for being executed the callback of the observer
//     rootMargin: '-80px', // It is executed 80px before ending the header section
//   };

//   const obs = new IntersectionObserver((entries) => {
//     const ent = entries[0];
//     console.log(ent);
//     if (!ent.isIntersecting) {
//       document.body.classList.add('sticky');
//     } else {
//       document.body.classList.remove('sticky');
//     }
//   }, options);
//   obs.observe(sectionHeroEl);
// }

// function navToggle() {
//   const btnNav = document.querySelector('.header');
//   btnNav.addEventListener('click', () => {
//     btnNav.classList.toggle('nav-open');
//   });
// }

// function getFullYear() {
//   const yearEl = document.querySelector('.year');
//   yearEl.textContent = new Date().getFullYear();
// }

// function smoothScroll() {
//   const allLinks = document.querySelectorAll('a:link');

//   allLinks.forEach((link) => {
//     link.addEventListener('click', (e) => {
//       e.preventDefault();
//       const href = link.getAttribute('href');
//       // Scroll back to top
//       if (href === '#') {
//         window.scrollTo({
//           top: 0,
//           behavior: 'smooth',
//         });
//       }

//       if (href !== '#' && href.startsWith('#')) {
//         const sectionEl = document.querySelector(href);
//         sectionEl.scrollIntoView({ behavior: 'smooth' });
//       }
//     });
//   });
// }

// // Fixing flexbox gap missing in some Safari versions
// function checkFlexGap() {
//   var flex = document.createElement('div');
//   flex.style.display = 'flex';
//   flex.style.flexDirection = 'column';
//   flex.style.rowGap = '1px';

//   flex.appendChild(document.createElement('div'));
//   flex.appendChild(document.createElement('div'));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);

//   if (!isSupported) document.body.classList.add('no-flexbox-gap');
// }
