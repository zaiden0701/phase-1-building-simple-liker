// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {activeHeart()})

const modal = document.querySelector('#modal')
console.log(modal)
modal.classList.add('hidden')

 const heart = document.querySelectorAll('span.like-glyph')
 heart.forEach(activeHeart)

  function activeHeart(hearts){
    hearts.addEventListener('click', (e) => {
      mimicServerCall()
      .then((response) => {
        if (e.target.innerText === EMPTY_HEART) {
          e.target.classList.add('activated-heart')
          e.target.innerText === FULL_HEART
        }
        else {
          e.target.classList.remove('activated-heart')
          e.target.innerText === EMPTY_HEART
        }
      })
      .catch(function(){
        setTimeout(() => {modal, 3000})
      })
    })
  }

//   .then(() => {
//   if (heart.target.innerHTML === EMPTY_HEART) {
//     heart.target.classList.add('activated heart')
//     heart.target.innerHTML === FULL_HEART
//   }
//   else {
//     heart.target.classList.remove('activated heart')
//     heart.target.innerHTML === EMPTY_HEART
//   }
// })

// document.getElementsById('').hidden

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}