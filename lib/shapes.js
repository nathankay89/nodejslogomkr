class Shape {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }
    
    render() {
        return ''; // Base class render method, should be overridden by subclasses
    }
}

class Circle extends Shape {
    constructor(color) {
        super('circle', color);
    }
    
    render() {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super('triangle', color);
    }
    
    render() {
        return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(color) {
        super('square', color);
    }
    
    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}

module.exports = {
    Circle,
    Triangle,
    Square
};
