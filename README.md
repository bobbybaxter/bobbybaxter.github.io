# Personal Bio Site
One-page locally hosted site to work on my Personal Bio Site.

## Screenshots
![image of personal bio website](https://raw.githubusercontent.com/bobbybaxter/personal-bio-site/master/images/personal-bio-site-screenshot.png)

## Getting Started
Clone the repo:
```
$git clone https://github.com/bobbybaxter/personal-bio-site
```

### Prerequisites
Download HTTP Server, to be able to serve the site locally in your browser:
```
$npm install -g http-server
```

## Running
Browse to the personal-bio-site/ directory and run HTTP Server by typing the following command into the terminal:
```
$ hs -p 5000
```

In your web browser, copy and paste this:

 `localhost:5000`

## Known Issues
- Hover animation on project items still shows image on right side, in part based on `.img-fluid`'s `max-width: initial`
- Scrolling to the right shows the blue background

## Working Notes
- 03/24/19 - Updated Navbar functionality based on assignment
  - added `eventListeners` function that iterates through all elements with `nav-item`, then runs `handlePageClick` upon click event.
  - `handlePageClick` determines which page corresponds to the navbar item that was clicked and displays that page, while also hiding the other pages.  i know there has to be a more eloquent way to loop through the pages and cut my code down a bit, but i needed to make sure i got it functioning before refactoring.
  - the `pageLoad` function hides the pages i don't want showing when the page first loads.
  - at the end, my `init` function runs `pageLoad()`, `eventListeners()`, then `createProjectCards()`
  - added the template CSS file and cleaned my customized CSS file of duplicates. *when i first styled the page, i didn't know that you should link the template .css file then your customized CSS file afterwards in `index.html`. i rewrote the pieces that i thought i needed.  woof.*
  - cleaned up JS file of commented out scraps of code that were obsolete
- 03/11/19 - Played around with my styling, based on the [Stylish Portfolio](https://startbootstrap.com/previews/stylish-portfolio/) Bootstrap template as a stretch goal from the base assignment.
  - changed the layout based on the requirements of my assignment
  - found new background and portfolio/project images, and changed the technologies icons
  - gutted the sidebar nav used in the template and built my own top nav bar because i didn't yet understand how the jQuery slide-in animation worked
  - adjusted the project captions to properly fit over the images
  - adjusted the images with `.image-fluid` to properly fit in the div at the largest media query
  - swapped the bottom buttons to correspond to my needs

- 03/09/19 - Based on the requirements, completed the following:
  - created a new directory via the console
  - added a README file and pushed up to Github
  - set up my HTML, CSS, and JS documents, then pushed to Github
  - created a new branch and built out my Projects section based on the required specs
