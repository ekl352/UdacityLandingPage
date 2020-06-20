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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
  //dynamically create a navigation menu based on the sections of the page. 
  //Keep in mind: where is the text from each navigation item coming from and where are you anchoring to? 
 	// How're you going to add each navigation item to your menu (there are several ways to do this)


const sections = document.querySelectorAll("section");
const navBarList = 
document.querySelector("#navbar__list");

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

createNav();


document.querySelector(".navbar__menu").appendChild(navBarList);



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

activeClassAssign();



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active