export const generateID = () => {
  let randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return randLetter + Date.now();
}


const weekday = [
  "Sunday 🖖",
  "Monday 💪😀",
  "Tuesday 😜",
  "Wednesday 😌☕️",
  "Thursday 🤗",
  "Friday 🍻",
  "Saturday 😴",
];



const randomWordArray = [
  "Oh my, it's ",
  "Whoop, it's ",
  "Happy ",
  "Seems it's ",
  "Awesome, it's ",
  "Have a nice ",
  "Happy fabulous ",
  "Enjoy your "
]

export const randomQuote =
  randomWordArray[Math.floor(Math.random() * randomWordArray.length)] + weekday[(new Date()).getDay()] ;
