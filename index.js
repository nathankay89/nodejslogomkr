const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

async function main() {
    const answers = await inquirer.prompt([
        { type: 'input', name: 'text', message: 'Enter up to three characters:' },
        { type: 'input', name: 'textColor', message: 'Enter text color (keyword or hexadecimal number):' },
        { type: 'list', name: 'shape', message: 'Choose a shape:', choices: ['circle', 'triangle', 'square'] },
        { type: 'input', name: 'shapeColor', message: 'Enter shape color (keyword or hexadecimal number):' },
    ]);

    const { text, textColor, shape, shapeColor } = answers;

    let selectedShape;
    if (shape === 'circle') {
        selectedShape = new Circle(shapeColor);
    } else if (shape === 'triangle') {
        selectedShape = new Triangle(shapeColor);
    } else if (shape === 'square') {
        selectedShape = new Square(shapeColor);
    } else {
        console.log('Invalid shape choice.');
        return;
    }

    const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${selectedShape.render()}
    <text x="150" y="100" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
</svg>`;

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
}

main();
