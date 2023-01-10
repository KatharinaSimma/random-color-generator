import chalk from 'chalk';
import randomColor from 'randomcolor';

const userHue = process.argv[2];
const userLum = process.argv[3];

let outputColor;

if (!userHue) {
  outputColor = randomColor();
} else if (userHue) {
  outputColor = randomColor({ hue: userHue });
} else if (userHue && userLum) {
  outputColor = randomColor({ hue: userHue, luminosity: userLum });
} else {
  console.log('Something went wrong. Try again!');
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
