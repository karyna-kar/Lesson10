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
}

// Класс Square (квадрат)
class Square extends Figure {
  //  Добавление приватного свойства side
  constructor(private readonly side: number) {
    // Указание типа при создании класса
    super(FigureType.Square);
  }

  // Получение площади
  getArea(): number {
    return 0;
  }

  // Получение периметра
  getPerimeter(): number {
    return 0;
  }

  // Получение описания
  getDescription(): string {
    return "";
  }
}

// Класс Rectangle (прямоугольник)
class Rectangle extends Figure {
  //  Добавление приватных свойств ширина и высоты
  constructor(
    private readonly width: number,
    private readonly height: number,
  ) {
    // Указание типа при создании класса
    super(FigureType.Rectangle);
  }

  // Получение площади
  getArea(): number {
    return 0;
  }

  // Получение периметра
  getPerimeter(): number {
    return 0;
  }

  // Получение описания
  getDescription(): string {
    return "";
  }
}

//Класс Triangle

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

// const triangle = new Triangle(3, 4, 5);
// console.log(triangle.getArea()); // 6
// console.log(triangle.getPerimeter()); // 12
// console.log(triangle.getType()); // triangle
// console.log(triangle.getDescription()); // Triangle with side1 3, side2 4 and side3 5
