const app = document.getElementById('app');

const contact = "<a href='m90khan@gmail.com'>here</a>"
const typewriter = new Typewriter(app, {
    loop: false

});

// const myName = Khan Mohsin
// const workAs = Web Developer
// let Seeking = Job
// if (YOU === still interested){
// // then take a look at my video resume below to know more about me.
// Video Resume: https://www.khanweb.site/about.html
// }else if (YOU === still not convinced){
// // Please take a moment to review my enclosed resume and my personal website
// Website: https://www.khanweb.site
// }else{
// // If you have any question, please send me an email.
// Thank you for your time and consideration.
// }
const intro = 'Hi There'
const myName = 'Khan Mohsin'
const email = 'hello@khanweb.site';
const workAs = 'Web Developer'
let seek = 'Job'
let you = 'your Company'
let condition = ['still interested', 'still not convinced']
const thankYou = 'Thank you for your time and consideration.'
const hireMe = () =>{
if ( you === condition[0]){
console.log(` // then take a look at my video resume below to know more about me.`)
const videoResume = 'https://www.khanweb.site/about.html'
console.log(videoResume);
}else if (you === condition[1]){
console.log(`// Please take a moment to review my enclosed resume and my personal website`);
const myWebsite= 'https://www.khanweb.site'
console.log(myWebsite);
} else {
console.log(` // If you have any question, please send me an email at ${email}. \n${thankYou}`)
}
}
typewriter.typeString(`<h1>const intro = '${intro}'<h1>`)
    .pauseFor(2000)
    .typeString(  `// Lets start first with an little intrdoctoin`)
    .deleteChars(7)
    .typeString(`<strong>oduction</strong> about me`)
    .typeString(  ` <h3>const myName = '${myName}'<h3>`)
    .typeString(  ` <h3>const email = '${email}'<h3>`)
    .typeString(  ` <h3>const workAs = '${workAs}'<h3>`)
    .typeString(  ` <h3>let seek = '${seek}'<h3>`)
    .typeString(  ` <h3>let condition = [${condition}]<h3>`)
    .typeString(  ` <h3>let you = ${you}</h3>`)
    .typeString(  ` <h3>const hireMe = () =>{ <h3>`)
    .typeString(  ` <h3>if ( you === '${condition[0]}'){<h3>`)
    .typeString(  ` // then take a look at my video resume below to know more about me.`)
    .typeString(  ` <h3>const videoResume = 'https://www.khanweb.site/about.html'<h3>`)
    .typeString(  ` <h3>}else if (you === '${condition[0]}'){<h3>`)
    .typeString(`// Please take a moment to review my resume and my personal wbeiste`)
                 .deleteChars(7)
                 .typeString(`<strong>website</strong>`)
    .pauseFor(2500)
    .typeString(` <h3>const myWebsite= 'https://www.khanweb.site'</h3> ` )
    .typeString(` <h3>} else {</h3>` )
    .typeString(` // If you have any question, please send me an email at ${email}.` )
    .typeString(` <h3>${thankYou}</h3>` )
    .typeString(` <h3>}</h3>` )
    .typeString(` <h3>}</h3>` )
    .pauseFor(2500)
    .typeString(` <h3>hireme();</h3>` )
    .typeString(` <h2>What? You don't think my code works</h2>` )
    .typeString(` <h2>Look into the console</h2>` )
    .start();


    console.log(`${intro}\nMy name is ${myName}.\nMy email is ${email}.\nI am a ${workAs} and currently\nlooking for a ${seek}\nin ${you}\nso hireMe=${hireMe}`)
