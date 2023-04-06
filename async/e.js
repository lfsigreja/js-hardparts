 /* CHALLENGE 1 */

function sayHowdy() {
    console.log('Howdy');
  }
  
  function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
  }
  // After thinking it through, uncomment the following line to check your guess!
  // testMe(); // what order should these log out? Howdy or Partnah first?
  
  
  /* CHALLENGE 2 */
  
  function delayedGreet() {
    setTimeout(sayHowdy, 3000)
  }
  // Uncomment the following line to check your work!
//   delayedGreet(); // should log (after 3 seconds): welcome
  
  
  /* CHALLENGE 3 */
  
  function helloGoodbye() {
    function goodbye() {
        console.log('good bye');
    }

    setTimeout(goodbye, 3000);
    console.log('hello');
  }
  // Uncomment the following line to check your work!
//   helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye
  
  
  /* CHALLENGE 4 */
  
  function brokenRecord() {
    function hiAgain() { console.log('hi again') }
    setInterval(hiAgain, 1000)
  }
  // Uncomment the following line to check your work!
//   brokenRecord(); // should log (every second): hi again
  
  
  /* CHALLENGE 5 */
  
  function limitedRepeat() {
    function hiForNow() { console.log('hi for now') }
    function stopInterval() { clearInterval(id)}
    let id = setInterval(hiForNow, 1000) 
    setTimeout(stopInterval, 5500)
  }
  // Uncomment the following line to check your work!
//   limitedRepeat(); // should log (every second, for 5 seconds): hi for now
  
  
  /* CHALLENGE 6 */
  
  function everyXsecsForYsecs(f, interval, duration) {
    let counter = 0
    let id = setInterval(() => {
        f()
        counter += interval
        if (counter >= duration) { clearInterval(id) }
    }, interval)
  }
  // Uncomment the following lines to check your work!
  // function theEnd() {
  //   console.log('This is the end!');
  // }
  // everyXsecsForYsecs(theEnd, 2000, 10000); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
  
  
  /* CHALLENGE 7 */
  
  function delayCounter(target, wait) {
    let current = 1
    function counter () {
      let id = setInterval(() => {
        console.log(current);
        current++
        if (target < current) {
          clearInterval(id);
        }
      }, wait)
    }
    return counter
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const countLogger = delayCounter(3, 1000)
  // countLogger();
  // After 1 second, log 1
  // After 2 seconds, log 2
  // After 3 seconds, log 3
  
  /* CHALLENGE 8 */
  
  function promised (val) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(val)
      }, 2000)
    })
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const createPromise = promised('wait for it...');
  // createPromise.then((val) => console.log(val)); 
  // will log "wait for it..." to the console after 2 seconds
  
  /* CHALLENGE 9 */
  
  class SecondClock {
    constructor(cb) {
      this.cb = cb
      this.seconds = 0;
    }
    
    start() {
      this.id = setInterval( () => {
        this.cb(++this.seconds % 60)
      }, 1000)
    }
    
    reset() {
      this.seconds = 0
      clearInterval(this.id)
    }
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const clock = new SecondClock((val) => { console.log(val) });
  // console.log("Started Clock.");
  // clock.start();
  // setTimeout(() => {
  //     clock.reset();
  //     console.log("Stopped Clock after 6 seconds.");
  // }, 6000);
  
  /* CHALLENGE 10 */
  
  function debounce(callback, interval) {
    let duration = 0
    let id
    return function(){
      if(duration <= 0) {
        duration = interval
        clearInterval(id)
        id = setInterval(() => {duration -= 100}, 100)
        return callback()
      }
    }
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // function giveHi() { return 'hi'; }
  // const giveHiSometimes = debounce(giveHi, 3000);
  // console.log(giveHiSometimes()); // -> 'hi'
  // setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
  // setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
  // setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'
  
  