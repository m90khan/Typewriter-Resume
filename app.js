const app = document.getElementById('app');

const contact = "<a href='m90khan@gmail.com'>here</a>"
const typewriter = new Typewriter(app, {
    loop: false

});

typewriter.typeString(`<h1>Hey There<h1>`)
    .pauseFor(2000)
    .typeString(  ` <h3>Lets start first with an little introduction about me<h3>`)
    .typeString(`I come from Pakistan where i completed my college studies then
                 I moved to China for my Bacheolrs`)
                 .deleteChars(9)
                 .typeString(`<strong>Bachelors</strong> in Electronics and Information Technology
                   and now I am in Germany for my Masters`)
    .pauseFor(2500)
    .typeString(` <h3>I am passionate about web development especially Front-End. I like the interaction while building things</h3> ` )
    .typeString(` <h3>Some of the skills are: </h3>` )
    .typeString(` <li>HTML5, CSS3 (Sass), Bootstrap JavaScript, React, jQuery, PHP, MySQL, Ajax, JSON, APIs</li>` )
    .typeString(` <li>Node.js, npm, webpack, polyfill, Babel, Git, CLI</li>` )
    .typeString(` <li>Convert HTML/CSS to WordPress Themes and understanding of Drupal</li>` )
    .typeString(` <li>Web Design, User Experience, Wireframing, Prototyping, Branding & Identity, Graphic Design</li>` )
    .typeString(` <li>UX tests to test the usability websites</li>` )
    .typeString(` <li>Analyze traffic and make necessary changes for a better user experience.</li>` )
    .typeString(` <li>Photoshop, Illustrator, XD, Afteraffects, Balsamiq, Axure RP, niice, fullstory, invision, Trello.</li>` )
    .typeString(` <li>I can speak English, Urdu, Punjabi, Deutsch and Mandarin.</li>` )
    .pauseFor(2500)
    .typeString(` <h2>Shoot me a message to start this journey together</h2>` )

      .start();
