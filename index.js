import chalk from 'chalk';
// import prompt from 'prompt-sync';
import randomColor from 'randomcolor';
import readlineSync from 'readline-sync';

const hues = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'pink',
  'monochrome',
];

const luminosities = ['bright', 'light', 'dark'];

let userHue = process.argv[2];
let userLum = process.argv[3];

let outputColor;

// if no arguments are given, choose random
if (!userHue) {
  outputColor = randomColor();
}

// if the first argument is 'ask', play user input logic
if (userHue === 'ask') {
  userHue = readlineSync.question('What is your favorite color? ');
  if (!hues.includes(userHue)) {
    console.log(
      "That is not a supported hue. Choose 'red', 'orange', 'yellow', 'green', 'blue',  'purple', 'pink' or even 'monochrome'!",
    );
    process.exit();
  }
  userLum = readlineSync.question('What is your favorite luminosity? ');
  if (!luminosities.includes(userLum)) {
    console.log(
      "That is not a supported lumninosity. Choose 'bright', 'light' or 'dark'!",
    );
    process.exit();
  }
}

// check if there is a hue argument and if it is part of the list
if (userHue && hues.includes(userHue)) {
  outputColor = randomColor({ hue: userHue });
} else if (userHue && !hues.includes(userHue)) {
  console.log(
    "That is not a supported hue. Choose 'red', 'orange', 'yellow', 'green', 'blue',  'purple', 'pink' or even 'monochrome'!",
  );
  process.exit();
}

// check if there is a luminosity argument and if it is part of the list
if (userLum && luminosities.includes(userLum)) {
  outputColor = randomColor({ hue: userHue, luminosity: userLum });
} else if (!userLum) {
  outputColor = randomColor({ hue: userHue, luminosity: 'random' });
} else {
  console.log(
    "That is not a supported lumninosity. Choose 'bright', 'light' or 'dark'!",
  );
  process.exit();
}

const output = `######################################
######################################
######################################
#####                            #####
#####          ${outputColor}           #####
#####                            #####
######################################
######################################
######################################`;

console.log(chalk.hex(outputColor).bold(output));
