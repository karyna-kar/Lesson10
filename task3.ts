// Добавить в задачу 1 валидацию на то, чтобы любая сторона была больше 0, если например ширина меньше 0 - выводим ошибку: ${sideName} must be greater than 0`

// Написать класс Square, Rectangle и Triangle

// Перечисление типов фигур
enum FigureType {
  Square = "square",
  Rectangle = "rectangle",
  Triangle = "triangle",
}

// Абстрактный класс Figure
abstract class Figure {
  // Добавление защитного свойства type при создании класса
  constructor(protected readonly type: string) {}

  // Добавление публичного метода получения type
  getType(): string {
    return this.type;
  }

  // Добавление публичных абстрактный методов для фигур - получение площади и периметра
  abstract getArea(): number;
  abstract getPerimeter(): number;

  // Добавление публичного метода описание класса
  getDescription(): string {
    return this.constructor.name;
  }

  //Добавление публичного метода проверки значения стороны
  checkSideValue(value: number, sideName: string) {
    if (value <= 0) {
      throw new Error(`${sideName} must be greater than 0`);
    }
  }
}

// Класс Square (квадрат)
class Square extends Figure {
  static readonly SIDE = "side";
  //  Добавление приватного свойства side
  constructor(private readonly side: number) {
    // Указание типа при создании класса
    super(FigureType.Square);
    //Проверка стороны
    this.checkSideValue(side, Square.SIDE);
  }

  // Получение площади
  getArea(): number {
    return this.side ** 2;
  }

  // Получение периметра
  getPerimeter(): number {
    return this.side * 4;
  }

  // Получение описания
  getDescription(): string {
    return `Square with side ${this.side}`;
  }
}

// Класс Rectangle (прямоугольник)
class Rectangle extends Figure {
  static readonly WIDTH = "width";
  static readonly HEIGHT = "height";
  //  Добавление приватных свойств ширина и высоты
  constructor(
    private readonly width: number,
    private readonly height: number,
  ) {
    // Указание типа при создании класса
    super(FigureType.Rectangle);
    //Проверка сторон
    this.checkSideValue(width, Rectangle.WIDTH);
    this.checkSideValue(height, Rectangle.HEIGHT);
  }

  // Получение площади
  getArea(): number {
    return this.height * this.width;
  }

  // Получение периметра
  getPerimeter(): number {
    return (this.height + this.width) * 2;
  }

  // Получение описания
  getDescription(): string {
    return `Rectangle with width ${this.width} and height ${this.height}`;
  }
}

//Класс Triangle
class Triangle extends Figure {
  static readonly SIDE1 = "side1";
  static readonly SIDE2 = "side2";
  static readonly SIDE3 = "side3";

  constructor(
    private readonly side1: number,
    private readonly side2: number,
    private readonly side3: number,
  ) {
    // Указание типа при создании класса
    super(FigureType.Triangle);
    //Проверка сторон
    this.checkSideValue(side1, Triangle.SIDE1);
    this.checkSideValue(side2, Triangle.SIDE2);
    this.checkSideValue(side3, Triangle.SIDE3);

    if (side1 >= side2 + side3 || side2 >= side1 + side3 || side3 >= side1 + side2) {
      throw new Error("Invalid triangle: sum of any two sides must be greater than the third");
    }
  }
  // Получение площади
  getArea(): number {
    const p = this.getPerimeter() / 2;
    return Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
  }

  // Получение периметра
  getPerimeter(): number {
    return this.side1 + this.side2 + this.side3;
  }

  // Получение описания
  getDescription(): string {
    return `Triangle with side1 ${this.side1}, side2 ${this.side2} and side3 ${this.side3}`;
  }
}

// Пример использования
const square = new Square(5);
console.log(square.getArea()); // 25
console.log(square.getPerimeter()); // 20
console.log(square.getType()); // square
console.log(square.getDescription()); // Square with side 5

console.log("-----------");

const rectangle = new Rectangle(4, 6);
console.log(rectangle.getArea()); // 24
console.log(rectangle.getPerimeter()); // 20
console.log(rectangle.getType()); // rectangle
console.log(rectangle.getDescription()); // Rectangle with width 4 and height 6

console.log("-----------");

const triangle = new Triangle(3, 4, 5);
console.log(triangle.getArea()); // 6
console.log(triangle.getPerimeter()); // 12
console.log(triangle.getType()); // triangle
console.log(triangle.getDescription()); // Triangle with side1 3, side2 4 and side3 5
