/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("section");
const navBarList = document.querySelector("#navbar__list");
const links = document.querySelectorAll('a');




/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

// build the nav

function createListItem(id, name) {
	const listItem = document.createElement("li");
	const anchor = document.createElement("a");
	anchor.textContent = name; 
	anchor.href = "#" + id;
	listItem.appendChild(anchor);
	navBarList.appendChild(listItem);
}

function createNav() {
	sections.forEach((section) =>
		createListItem(section.id, section.dataset.nav)
	);
}

// Add class 'active' to section when near top of viewport

function activeClassAssign() {

	sections.forEach((section) =>
			window.addEventListener("scroll", function(){
				if (section.getBoundingClientRect().top < window.innerHeight &&
					section.getBoundingClientRect().bottom > window.innerHeight) {
					section.classList.add("your-active-class");
				} else {
					section.classList.remove("your-active-class");
				}
			})
		);
}






/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

createNav();

document.querySelector(".navbar__menu").appendChild(navBarList);

// Scroll to anchor ID using scrollIntoView event

links.forEach((link) => 
	link.addEventListener('click', function(e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	})
); 


// Set sections as active

activeClassAssign();



