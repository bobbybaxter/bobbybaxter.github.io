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
