/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const header = document.querySelector('.header');

header.appendChild(menuComponent(menuItems));


// step 1: write a function & pass an array as only input argument
function menuComponent(array) {
  // define new elements
  const menu = document.createElement('div');
  const menuUl = document.createElement('ul');
  // const students = document.createElement('li');
  // const faculty = document.createElement('li');
  // const whatsNew = document.createElement('li');
  // const techTrends = document.createElement('li');
  // const music = document.createElement('li');
  // const logOut = document.createElement('li');

  // step 2.1: iterate over the array
  array.forEach(item => {
    const newMenuItem = document.createElement('li');
    // step 2.2: create a list item <li> element
    newMenuItem.textContent = item;
    // step 2.3: adding the li items to ul (menuUl)
    menuUl.appendChild(newMenuItem);
  })


  //setup structure of elements
  menu.appendChild(menuUl);
  // menuUl.appendChild(students);
  // menuUl.appendChild(faculty);
  // menuUl.appendChild(whatsNew);
  // menuUl.appendChild(techTrends);
  // menuUl.appendChild(music);
  // menuUl.appendChild(logOut);


  // set class name
  menu.classList.add('menu');

  // set text content

  // Step 3: Using a DOM selector, select the menu button currently on the DOM.
  const menuButton = document.querySelector('.menu-button');
  
  // Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  })

  return menu;
}