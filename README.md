<h1>BookFinder App</h1>

For my milestone two project as part of the Code Institute's Full stack developer programme, I have built a book searching application, the BookFinder app. The BookFinder app has been built using primarily JavaScript, jQuery and the Google Books API. The BookFinder app allows you to search Google Books entire catalogue of books. It will also allow you to read any book available via the Google Books API, using the Embedded Viewer API.

<h2>UX</h2>
My website is geared towards book lovers and those that love to read. The purpose of my website is two-fold and it can be used for both purposes in tandem, or just one purpose on its own. The first purpose of the app is to give the end user the ability to search for a book based on author, title or subject, utilising the Google Books API search functionality. And the second purpose is to allow the end user to read that book, utilising the Google Books Embedded Viewer API. 

I built my project based off of two User Stories: a user searching for more details on a book and a user who wishes to find and read a book online.

As someone who is looking for more details of a book, that I might only have some information of, I want to be able to search based on the information I know, book title, author etc, and have the book shown to me in the search results. I want to easily be able to see the basic and defining details on the book, the title, author, the publisher etc.

As a user who wishes to search for books and read them online, I want to be able to search for a book's title or author. I want to be able to see all results populated from these keywords and I want to be able to easily read the book without having to leave the Book Finder site. 

The wireframes I created when mocking up the idea for my project can be found here: https://github.com/KarenK11/BookFinderApp/tree/master/assets/wireframes

<h2>Features</h2>

_Existing Features_

- The header image and title, Book Finder, tells the user exactly what the purpose of the application is. 

- The search bar allows users to input their queries on the books they wish to search for.

- The submit button allows users to submit their search queries through.

- The search results presents users with the results of their search query and allows them to view more details on the books they have searched for. 

- The "Read More" button allows users to read any book of their choosing within a separate page, utilising the Google Books API.

- The application's footer provides the user with the email address of the creator of the application(me), for contact. It also provides the end user with my Github profile and social links. 
_Existing Features

_Features Left to Implement_

Another feature idea I would like to implement in the future would be a starring/favouriting system, whereby the end user could star their favourite books and refer back to their favourites list at any stage.

<h2>Technologies Used</h2>

HTML: https://html.com/. Used to build the skeleton structure of my application.

CSS: https://developer.mozilla.org/en-US/docs/Web/CSS. Used to style my application.

Bootstrap: https://getbootstrap.com/. Used to make my project responsive and mobile first and to add additional styling.

Font Awesome: https://fontawesome.com/. Used to add icons to my application. 

JQuery: The project uses JQuery to simplify DOM manipulation: https://jquery.com/.

JavaScript: This project uses JavaScript for interactivity. https://www.javascript.com/. 

Google Books API: This project's search functionality is powered by the Google Books API: https://developers.google.com/books.
  
<h2>Testing</h2>
I have thoroughly tested my site and can confirm that it works well and will do so for my intended users. The following error displays in the console;

_main.js:57 Uncaught TypeError: Cannot read property 'identifier' of undefined_

It does not interfere with the search results however. 

_Book Searcher_

A prospective book searcher comes on to my application and enters their search query in the search bar, as instructed by the placeholder text. They press the submit button and view their search results.

_Book Reader_

A prospective book reader comes on to my application and enters their search query in the search bar, as instructed by the placeholder text. They press the submit button and view their search results. They choose the book they were looking for and click the "Read More" button. They are brought to a separate page that holds the Google Books Embedded Viewer and from there they can read their book. 

<h2>Deployment</h2>
In order to deploy my project to my hosting platform of choice, GitHub Pages, I went to the settings tab within my UserCentricFrontendDevMilestone project and scrolled down to the GitHub pages section. I then toggled the "source" to "master" which provided me with the following link to my published site: https://karenk11.github.io/BookFinderApp/

<h2>Credits</h2>
Acknowledgements
I used the Google Books API docs for inspiration on creating a book finder application, utilising the Google Books Embedded Viewer. 

