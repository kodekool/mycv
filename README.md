# Welcome to my online resume 😁

In this repository, I created and designed my resume using BootStrap5, HTML, CSS and Javascript. There is a page that contains five sections about myself. IT contains significant details about me, IT-Skills, Education, Work experience and Online course certification. 

As a result of responsive design, my CV can be viewed on both desktop computers and mobile devices. Once the user scrolls down, the user will see an arrow icon at the right-bottom of the screen which allows them to navigate back to the top of the page. The scroll-up button works with the function in JavaScript.

- The `navbar` is collapsable. It was modified by using the code from BootStrap5 
<img src="https://user-images.githubusercontent.com/72558791/216346640-5ec82e53-a2b1-404d-a655-a1b520d8aae4.png" width="200" height="300">


- Starting with About me, there is a short introduction and a read more button to see more details.
![image](https://user-images.githubusercontent.com/72558791/216346720-6e1f1daa-1eae-4bd8-9b16-3aaab38512fc.png)
 ```HTML
 <button type="button" class="btn btn-secondary btn-lg px-4" 
         data-bs-toggle="collapse" data-bs-target="#collapseReadMore" 
         aria-expanded="false" aria-controls="collapseReadMore">Read More
</button>
```
- In the IT Skills section, my current skills were rated individually using a `progress-bar` with animation in CSS. 
![image](https://user-images.githubusercontent.com/72558791/216346839-1c728b0a-e9e7-419d-b358-a46f0f7b4530.png)
  - On Desktop, this section displays two columns but it will appears only one column on Mobile device.
  - The progress bar use ` @keyframe ` in CSS

- Both the Education, Work experience and Student project sections are created with a `table` class.

- In the last section, I presented my online certificate that I earned in the IT field using the `list-groups` template from Bootstrap.

