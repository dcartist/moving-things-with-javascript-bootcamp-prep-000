// const app = "I don't do much."
var dodger = document.getElementById('dodger')

function moveDodgerRight(){
  document.addEventListener('keydown', function(e) {
    if (e.which === 39) {
      var rightNumbers = dodger.style.left.replace('px', '')
      var right = parseInt(rightNumbers, 10)
      if (right > 0) {
        dodger.style.right = `${right - 1}px`
      }
    }
  })
}

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

$(document).ready(function() {
  // code to be executed goes here
  document.addEventListener('keydown', function(e) {
    if (e.which === 37) {
      moveDodgerLeft()
    }else if (e.which === 39){
      moveDodgerRight()
    }
  })
});
