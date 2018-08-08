document.addEventListener("DOMContentLoaded", init)

function init() {
  let counterId = startCounter()
  clickable()
  leaveComment()
  manipulateCounter()

  function increment() {
    const counter = document.querySelector('#counter')
    counter.innerText = ++counter.innerText
  }

  function clickable() {
    const play = document.querySelector('#pause')
    play.onclick = toggle
  }

  function toggle() {
    // let isPaused = false;
    const play = document.querySelector('#pause')
    const counter = document.querySelector('#counter')
    let currentTime = counter.innerText
    if (play.innerText === 'pause') {
      play.innerText = 'play'
      clearInterval(counterId)
      document.querySelectorAll('button').forEach(function(button) {
        button.disabled = true
      })
      document.querySelector('#pause').disabled = false
    } else {
      play.innerText = 'pause'
      counter.innerText = currentTime
      counterId = startCounter()
      document.querySelectorAll('button').forEach(function(button) {
        button.disabled = false
      })
    }
  }

  function startCounter() {
    return setInterval(increment, 1000)
  }

  function leaveComment() {
    const button = document.querySelector('#submit')
    button.addEventListener('click', function(event){
      event.preventDefault()
      document.querySelector('#comment-form')
      const p = document.createElement('p')
      const input = document.querySelector('input')
      p.innerText = input.value
      list.append(p)
      input.value = ''
    })
  }

  function manipulateCounter() {
    let counter = document.querySelector('#counter')

    document.querySelectorAll('button').forEach(function(button) {
      switch (true) {
        case (button.id === "-"):
        // button.onclick= console.log('cicked')
          button.onclick = (counter.innerText = --counter.innerText)
          break;

        case (button.id === "+"):
          button.onclick = (counter.innerText = ++counter.innerText)
          // button.onclick= console.log('cicked')
          break;
        }
      })
    }

}
