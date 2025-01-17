/////////////////////menu///////
function toggleMenu() {
  const menu = document.getElementById("menu");
  const hamburger = document.getElementById("hamburger");
  const [line1, line2, line3] = hamburger.children;
  line1.style.backgroundColor = 'white'
    line3.style.backgroundColor = 'white'
  if (menu.classList.contains("scale-0")) {
 
    menu.classList.remove("scale-0");
    menu.classList.add("scale-100"); 
    line1.classList.add("rotate-45", "translate-y-1.5");
    line2.classList.add("opacity-0");
    line3.classList.add("-rotate-45", "-translate-y-1.5");
  } else {
    menu.classList.remove("scale-100");
    menu.classList.add("scale-0");
    line1.classList.remove("rotate-45", "translate-y-1.5");
    line2.classList.remove("opacity-0");
    line3.classList.remove("-rotate-45", "-translate-y-1.5");
  }
}



/////////////////video////////////////////
const vid = document.querySelector('#vid')
vid.autoplay = true;
vid.muted = true;
vid.loop = true;
vid.play();
////////////////Accordion////////////////////
function toggleAccordion(button) {

  const content = button.nextElementSibling;

  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    button.querySelector('span:last-child').textContent = '−';
  } else {
    content.classList.add('hidden'); 
    button.querySelector('span:last-child').textContent = '+'; 
  }
}
//////////////// click to box////////////////////
document.querySelectorAll('.sec').forEach((section) =>{
  const spans = section.querySelectorAll(".box span");
  const contents = section.querySelectorAll(".content");
  const img = section.querySelectorAll(".fig > img");

  spans[0].classList.add("active");
  contents[0].classList.add("active");
  img[0].style.display = 'block'

spans.forEach((span, index) => {
  span.addEventListener("click", () => {

    spans.forEach(s => s.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));
    img.forEach(imge => imge.style.display = 'none');


    span.classList.add("active");
    contents[index].classList.add("active");
    img[index].style.display = "block";
  });
});
})
/////////////////////////////////////end//////////

const names = ['bangkok','pattaya','phuket','chaingam']
let i = 0

let front = 0
let behind = 0
const span = document.querySelector('#demo')
x = setInterval(() => {
    if (i < names.length) {
        if (front < names[i].length) {
            front++
            span.innerHTML = names[i].slice(0, front)
        } else if (front == names[i].length) {
            behind = names[i].length
            front++
        } else {
            if (behind > 0) {
                behind--
                span.innerHTML = names[i].slice(0, behind)
            } else {
                if (i < names.length) {
                    i++
                    front = 0
                }

            }
        }
    } else {
        i = 0;
        front = 0
    }

}, 80);
//////////////backtik///////
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.accordion-btn');
  const contents = document.querySelectorAll('.accordion-content');
  const headers = document.querySelectorAll('.accordion-header');

  if (buttons.length > 0 && contents.length > 0) {
    buttons[0].classList.add('active');
    contents[0].classList.remove('dis');
  }
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      contents.forEach(content => content.classList.add('dis'));

      button.classList.add('active');
      contents[index].classList.remove('dis');
    });
  });

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const icon = header.querySelector('.toggle-icon');

      if (body.classList.contains('dis')) {
        body.classList.remove('dis');
        icon.textContent = '-';
      } else {
        body.classList.add('dis');
        icon.textContent = '+';
      }
    });
  });
});

////////////////////sec7////////
document.addEventListener("DOMContentLoaded", ()=> {
  if (localStorage.getItem("name")) {
    document.getElementById("name").value = localStorage.getItem("name");
  }
  if (localStorage.getItem("email")) {
    document.getElementById("email").value = localStorage.getItem("email");
  }
  if (localStorage.getItem("phone")) {
    document.getElementById("phone").value = localStorage.getItem("phone");
  }

  document.getElementById("contactForm").addEventListener("submit", (event)=> {
    event.preventDefault();
    let isValid = true;
    // Name validation (letters only, no scripts)
    const name = document.getElementById("name").value;
    const nameRegex = /^[A-Za-z\s]+$/;
    const scriptRegex = /<script.*?>.*?<\/script>/i;
    if (scriptRegex.test(name) || !nameRegex.test(name)) {
      document.getElementById("nameError").classList.remove("hidden");
      isValid = false;
    } else {
      document.getElementById("nameError").classList.add("hidden");
    }
    // Email validation
    const email = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (scriptRegex.test(email) || !emailRegex.test(email)) {
      document.getElementById("emailError").classList.remove("hidden");
      isValid = false;
    } else {
      document.getElementById("emailError").classList.add("hidden");
    }
    // Phone number validation
    const phone = document.getElementById("phone").value;
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (scriptRegex.test(phone) || !phoneRegex.test(phone)) {
      document.getElementById("phoneError").classList.remove("dis");
      isValid = false;
    } else {
      document.getElementById("phoneError").classList.add("dis");
    }

    // Privacy checkbox validation
    const privacy = document.getElementById("privacy");
    if (!privacy.checked) {
      alert("You must agree to the Privacy Policy.");
      isValid = false;
    }

    if (isValid) {
      // Store form data in localStorage
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);
      alert("Form submitted successfully and data saved!");
    }
  });
});


///////////// loding///////////////
window.addEventListener('load',()=> {
  const spinner = document.getElementById('loading-spinner');
  spinner.style.display = 'none';
});
/////////////////////