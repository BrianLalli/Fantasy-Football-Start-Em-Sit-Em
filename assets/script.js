// Hello everyone! If you're wondering how I made this small function, I simply made two arrays. One of the arrays contained a list of adjectives, while the other contained a list of objects. Then, I wrote a function to choose one random adjective and one random object and then put them together. I hope you enjoy using the Random Name Generator! //

var adjective = [
  "Excited",
  "Anxious",
  "Overweight",
  "Demonic",
  "Jumpy",
  "Misunderstood",
  "Squashed",
  "Gargantuan",
  "Broad",
  "Crooked",
  "Curved",
  "Deep",
  "Even",
  "Excited",
  "Anxious",
  "Overweight",
  "Demonic",
  "Jumpy",
  "Misunderstood",
  "Squashed",
  "Gargantuan",
  "Broad",
  "Crooked",
  "Curved",
  "Deep",
  "Even",
  "Flat",
  "Hilly",
  "Jagged",
  "Round",
  "Shallow",
  "Square",
  "Steep",
  "Straight",
  "Thick",
  "Thin",
  "Cooing",
  "Deafening",
  "Faint",
  "Harsh",
  "High-pitched",
  "Hissing",
  "Hushed",
  "Husky",
  "Loud",
  "Melodic",
  "Moaning",
  "Mute",
  "Noisy",
  "Purring",
  "Quiet",
  "Raspy",
  "Screeching",
  "Shrill",
  "Silent",
  "Soft",
  "Squeaky",
  "Squealing",
  "Thundering",
  "Voiceless",
  "Whispering",
];
var object = [
  "Taco",
  "Operating System",
  "Sphere",
  "Watermelon",
  "Cheeseburger",
  "Apple Pie",
  "Spider",
  "Dragon",
  "Remote Control",
  "Soda",
  "Barbie Doll",
  "Watch",
  "Purple Pen",
  "Dollar Bill",
  "Stuffed Animal",
  "Hair Clip",
  "Sunglasses",
  "T-shirt",
  "Purse",
  "Towel",
  "Hat",
  "Camera",
  "Hand Sanitizer Bottle",
  "Photo",
  "Dog Bone",
  "Hair Brush",
  "Birthday Card",
];
var list;

function generator() {
  document.getElementById("name").innerHTML =
    adjective[Math.floor(Math.random() * adjective.length)] +
    " " +
    object[Math.floor(Math.random() * object.length)];
}

// async function fetchData(url) {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     } catch (error) {
//       console.error('Unable to fetch data:', error);
//     }
//   }

//   function fetchNames(nameType) {
//     return fetchData(`https://www.randomlists.com/data/names-${nameType}.json`);
//   }

//   function pickRandom(list) {
//     return list[Math.floor(Math.random() * list.length)];
//   }

//   async function generateName(gender) {
//     try {
//       const response = await Promise.all([
//         fetchNames(gender || pickRandom(['male', 'female'])),
//         fetchNames('surnames')
//       ]);

//       const [firstNames, lastNames] = response;

//       const firstName = pickRandom(firstNames.data);
//       const lastName = pickRandom(lastNames.data);

//       return `${firstName} ${lastName}`;
//     } catch(error) {
//       console.error('Unable to generate name:', error);
//     }
//   }
