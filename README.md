# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My Process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
We took up this challenge as one of the tasks to practice HTML & CSS within the [Space Ya Tech - SYT](https://spaceyatech.com/) mentorship sessions. SYT is the fastest growing Africa Open-Source Community Looking To Change The Way Young Africans Get Started In Technology. One way SYT does this is through its mentorship, and I am excited to be a part of the current cohort (as of February 2023). 

### The challenge

Users should be able to:
- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Github repo code](https://github.com/samoina/sunnyside)
- Live Site URL: [Netlify Link](https://clinquant-torrone-f95ee0.netlify.app/)

## My process
I took up this challenge a second time (because the last time I did not complete it!)This time, however, with the motivation of doing it a a group challenge, I was able to complete it and even write this README. I first did the HTML and CSS before finishing with the small bit of Javascript required to toggle my mobile menu.

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla Javascript

### What I learned
1. I had already started the project when one of the mentors highlighted the importance of giving proper classes for CSS. That is when I first heard about the BEM naming convention which I even wrote on [this blogpost](https://samoinalives.wordpress.com/2023/02/28/using-the-bem-naming-convention/). This undoubtedly took me a few tries to get, but it is so much better than the haphazard ways I would name my classes. As a result, my code features classes such as 'mobileMenu', a child element would look something like 'mobileMenu__item', and if adding a modification 'mobileMenu__item--highlight '. See the code snippet below from my HTML

```html
 <ul class="mobileMenu mobileMenu--hidden">
        <div class="mobileMenu__div">
          <div class="mobileMenu__div--arrow"></div>
        </div>
        <li class="mobileMenu__item p-1">About</li>
        <li class="mobileMenu__item p-1">Service</li>
        <li class="mobileMenu__item p-1">Projects</li>
        <li class="mobileMenu__item mobileMenu__item--highlight m-5 p-1">CONTACT</li>
      </ul>
```

2. I also saw the importance of adding a utilities.css file to handle repetitive styling such as padding, flex and margins.

3. I learned that to display different images, depending on certain criteria, my best bet would be to use the picture element as it provides multiple sources for the img element. This had been a bit problematic for me because I was wondering how to tweak the image sources without clunky code.


```html
<picture>
        <!-- Image source when screen is wider than 375px -->
        <source media="(min-width: 375px)" srcset="images/desktop/image-transform.jpg" sizes="">
        <!-- Default image source for mobile responsive -->
        <img src="images/mobile/image-transform.jpg" alt="Image with yellow background">
      </picture>
```

4. I needed to re-order the elements in the main section and wasn't sure how to do that since I had already used Flex. On mobile the sections stacked ontop of each other in a column. On desktop, they would need to span into two columns. This necessitated my creating a 2D approach with flex for the MAIN section descendants. I set flex-grow and flex-shrink to 0, then controlling this using % (shortand: flex). The last value is the flex basis - the initial size occupied before space is distributed as below.

```css
 .main >* {
    flex: 0 0 50%;
  }

```

5. The mobile menu, set to fixed, appeared very absurd if it remained in position as the user scrolled down. I needed to make the menu disappear on scrolling down and appear on scrolling up. I found an incredibe resource from CSS Tricks that shared an in-depth approach to doing this. (link in the Resources below). I also learned that one can use the throttle function to limit multiple function calls to a pre-specified time interval. 

### Useful resources
- [BEM Naming Convention](https://getbem.com/introduction/) is a great resource for anyone who'd like a way to name their classes and keep track of them. I loved this approach and look forward to using it in my code.

- Jemima Abu wrote a fantastic resource on [Creating a smart navbar](https://css-tricks.com/creating-a-smart-navbar-with-vanilla-javascript/) using vanilla Javascript. This helped me understand some bits of the scroll event on the window, as well as introduced me to the throttle function which i incorporated in this code. 

- Website - [Samoina Lives](https://samoinalives.wordpress.com/)
- Frontend Mentor - [@samoina](https://www.frontendmentor.io/profile/samoina)
- Twitter - [@samoina](https://www.twitter.com/samoina)

## Acknowledgments
Special thanks to the Space Ya Tech mentors for providing some insight and encouragement to getting this task done. 
