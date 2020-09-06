
//page load message
window.addEventListener('load', function (event){
    alert('Page Loaded - Lambda School keeps getting more exciting!')
  });

//h2 mouse hover
const titles = document.querySelectorAll('h2')

titles.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.color = 'limegreen';
        element.style.fontSize = '9.6rem';
    })
});

titles.forEach(element => {
    element.addEventListener('mouseleave', () => {
        element.style.color = 'black';
        element.style.fontSize = '3.2rem';
    })
});

//keydown
const body = document.querySelector('body')

body.addEventListener('keydown', () => {
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
})

body.addEventListener('keyup', () => {
    event.target.style.backgroundColor = 'white';
    event.target.style.color = "black";
    alert('That was WILD!');
})

// test stopPropagation

const header = document.querySelector('header')

header.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'purple';
    alert('you have clicked on the header AND you will see purple!')
})

const divInHeader = document.querySelector('header div')

divInHeader.addEventListener('click', (event) => {
    event.stopPropagation()
    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'black';
    alert('this is a div inside the header and it is going to turn yellow!')
})

//p mouseover
const paragraph = document.querySelectorAll('p')

paragraph.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.color = 'orange';
    })
});

paragraph.forEach(element => {
    element.addEventListener('mouseout', () => {
        element.style.color = 'black';
    })
});

//button
const button = document.querySelectorAll('.btn')

button.forEach(element => {
    element.addEventListener('dblclick', () => {
        element.style.color = 'red';
    })
});

button.forEach(element => {
    element.addEventListener('click', () => {
        element.style.color = 'black';
    })
});

//nav
const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(element => {
    
    element.addEventListener('mouseover', () => {
        element.style.transform = 'scale(1.6)';
        element.style.backgroundColor = 'yellow';
    })
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)';
        element.style.backgroundColor = 'white';
    })
});

navLinks.forEach(element => {
        element.addEventListener('click', () => {
            element.style.transform = 'scale(10)';
        })
});

navLinks.forEach(element => {
    element.addEventListener('dblclick', () => {
        element.style.transform = 'scale(1)';
        element.style.color = 'orange';
    })
});
//prevent Default
const navbar = document.querySelector('nav');

navbar.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
})


//img right click
const img = document.querySelectorAll('img')

img.forEach(element => {
    element.addEventListener('auxclick', () => {
        element.style.transform = 'scale(1.2)';
        //notice how the alert appears before the image is scaled up
        alert('you should NOT have done that!');
    })
});

//h4 wheel - try scrolling up and down starting Fun in the Sun!

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('h4');
  el.onwheel = zoom;



/* The below code works but just gets in the way with lots of alerts when scrolling. Didn't get the once option object working  */
/* 

window.addEventListener('scroll', () => {
  console.log('window.scrollY', window.scrollY)
  if (window.scrollY >= 345) {
    alert("scrolled")
  }
})

*/