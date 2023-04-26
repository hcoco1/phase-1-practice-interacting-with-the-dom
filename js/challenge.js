//See the timer increment every second once the page has loaded.
let intervalID;
//document.addEventListener("DOMContentLoaded", (event) => {
  intervalID = setInterval(starCount, 1000);
//});

let textCounter = document.querySelector("#counter");
let divComments = document.querySelector("#list");
let likesCounter = document.querySelector("ul");
let minusBtn = document.querySelector("#minus");
let plusBtn = document.querySelector("#plus");
let heartBtn = document.querySelector("#heart");
let pauseBtn = document.querySelector("#pause");
let commentInput = document.querySelector("#comment-form");
console.log(commentInput)
let submitBtn = document.querySelector("#submit");
let count = 0;

function starCount() {
  count += 1;
  textCounter.textContent = count;
}

//Manually increment and decrement the counter using the
//plus and minus buttons.

minusBtn.addEventListener("click", () => {
  textCounter.textContent = count - 1;
});

plusBtn.addEventListener("click", () => {
  textCounter.textContent = count + 1;
});

/* "Like" an individual number of the counter.
 I should see the count of the number of "likes"
  associated with that number displayed. */

let counterObj = {};
heartBtn.addEventListener("click", (e) => {
  if (textCounter.innerText in counterObj) {
    counterObj[textCounter.innerText] += 1;
  } else {
    counterObj[textCounter.innerText] = 1;
  }

  /*
The heartBtn event listener listens for a click event on a button and updates a counterObj object with the number of times a text appears on the page. The counterObj object is initialized as an empty object at the beginning of the code.
When the button is clicked, the event listener checks if the text in the textCounter element is already a key in the counterObj object. If it is, the event listener increments the value of the key by 1. If it is not, the event listener adds the text as a new key to the counterObj object with a value of 1.
The purpose of this code is to keep track of the number of times each text appears on the page. This can be useful for analytics or for tracking user behavior.
*/

  const likesresult = document.createElement("li");
  if (counterObj[textCounter.innerText] === 1) {
    likesresult.innerText = `${textCounter.innerText} was liked ${
      counterObj[textCounter.innerText]
    } time`;
  } else {
    likesresult.innerText = `${textCounter.innerText} was liked ${
      counterObj[textCounter.innerText]
    } times`;
  }
  likesCounter.appendChild(likesresult);
  //console.log(counterObj);
});

/* Pause the counter, which should:
    -pause the counter
    -disable all buttons except the pause button
    -switch the label on the button from "pause" to "resume"
    Click the "resume" button to restart the counter and re-enable the buttons.
     */

pauseBtn.addEventListener("click", () => {
  if (pauseBtn.innerText === "pause") {
    clearInterval(intervalID);
    document.querySelector("#minus").disabled = true;
    document.querySelector("#plus").disabled = true;
    document.querySelector("#heart").disabled = true;
    pauseBtn.innerText = "resume";
  } else {
    intervalID = setInterval(starCount, 1000);
    document.querySelector("#minus").disabled = false;
    document.querySelector("#plus").disabled = false;
    document.querySelector("#heart").disabled = false;
    pauseBtn.innerText = "pause";
  }
});

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    //console.log(e)
    const ulCommnet = document.createElement('ul')
    divComments.appendChild(ulCommnet)
    const liCommnet = document.createElement('li')
    ulCommnet.appendChild(liCommnet)
    liCommnet.innerText = commentInput[0].value

})


