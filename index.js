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

if (!userHue) {
  outputColor = randomColor();
}

if (userHue === 'ask') {
  userHue = readlineSync.question('What is your favorite color? ');
  if (!hues.includes(userHue)) {
    console.log(
      "That is not a supported hue. Choose 'red', 'orange', 'yellow', 'green', 'blue',  'purple', 'pink' or even 'monochrome'!",
    );
    process.exit();
  }
  userLum = readlineSync.question('What is your favorite luminosity? ');
  console.log(
    "That is not a supported lumninosity. Choose 'bright', 'light' or 'dark'!",
  );
  process.exit();
}
if (userHue && hues.includes(userHue)) {
  outputColor = randomColor({ hue: userHue });
} else {
  console.log(
    "That is not a supported hue. Choose 'red', 'orange', 'yellow', 'green', 'blue',  'purple', 'pink' or even 'monochrome'!",
  );
  process.exit();
}
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

const output = `
######################################
######################################
######################################
#####                            #####
#####          ${outputColor}           #####
#####                            #####
######################################
######################################
######################################
`;

console.log(chalk.hex(outputColor).bold(output));
