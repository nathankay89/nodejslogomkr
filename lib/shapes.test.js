const { Circle, Triangle, Square } = require('./shapes');

test('Circle render method generates valid SVG', () => {
    const circle = new Circle('red');
    expect(circle.render()).toMatch('<circle cx="150" cy="100" r="50" fill="red" />');
});

test('Triangle render method generates valid SVG', () => {
    const triangle = new Triangle('blue');
    expect(triangle.render()).toMatch('<polygon points="150,50 100,150 200,150" fill="blue" />');
});

test('Square render method generates valid SVG', () => {
    const square = new Square('green');
    expect(square.render()).toMatch('<rect x="100" y="50" width="100" height="100" fill="green" />');
});
