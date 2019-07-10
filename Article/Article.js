// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // this.collapseButton = domElement.querySelector('.collapseButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'Expand';
    // this.collapseButton.innerText = 'collapse';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
    // this.collapseButton.addEventListener('click', () => this.expandArticle());

  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    this.domElement.classList.contains('article-open') == true ? this.expandButton.innerText = 'Collapse' : this.expandButton.innerText = 'Expand';
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

// query all articles
let articles = document.querySelectorAll('.article');

// loop over each article and create a new instance of Article
articles.forEach(article => new Article(article));

// Right-clicking deletes content
// context menu event must be applied to window, not specific object
// window.addEventListener('contextmenu', (e) => {
//   e.target.style.display = 'none'
// })