function shout(string){
  return string.toUpperCase();
}

var uppercase= "HELLO!";

function whisper(string){
  return string.toLowerCase();
}

function sayHiToGrandma(string) {
  if ((string)===uppercase) {
    return 'YES INDEED!'
  } 
  else if ((string)===lowercase) {
    return "I can't hear you!"
  }
  else if ((string)==="I love you, Grandma") {
    return "I love you, too."
  }
}