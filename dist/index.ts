abstract class AClass {
  Numbers: number[];

  constructor(n: number) {
    this.Numbers = [...Array(n).keys()];
    this.Numbers = this.fill();
  }

  private fill(): number[] {
    return this.Numbers.map(() => Math.floor(Math.random() * 20));
  }

  private factor(n: number): number {
    return n > 1 ? n * this.factor(n - 1) : n;
  }

  protected factorial() {
    return this.Numbers.map(this.factor.bind(this));
  }

  abstract sort(): void;
}

class Class1 extends AClass {
  constructor(n: number) {
    super(n);
  }

  sort() {
    this.Numbers = this.Numbers.sort((a, b) => a - b);
    return super.factorial();
  }
}

class Class2 extends AClass {
  constructor(n: number) {
    super(n);
  }

  sort() {
    this.Numbers = this.Numbers.sort((a, b) => b - a);
    return super.factorial();
  }
}

// Интерфейс для тестирования результата

const result1 = document.querySelector(".result1")! as HTMLSpanElement;
const result2 = document.querySelector(".result2")! as HTMLSpanElement;
const input = document.querySelector(".input")! as HTMLInputElement;
const form = document.querySelector(".form")! as HTMLFormElement;

function handleSubmit(evt: Event) {
  if (+input?.value > 1) {
    evt.preventDefault();
    const arr1 = new Class1(+input?.value);
    const arr2 = new Class2(+input?.value);
    result1.textContent = `[${arr1.sort().join(", ")}]`;
    result2.textContent = `[${arr2.sort().join(", ")}]`;
  }
}

form.addEventListener("submit", handleSubmit);

// Тестирование c выводом в консоль

const arr1 = new Class1(5);
const arr2 = new Class2(5);

console.log(arr1.sort());
console.log(arr2.sort());
