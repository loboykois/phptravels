export interface FormDataDemo {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
}

export enum FakeDataDemoForm {
  firstName = "test one",
  lastName = "test two",
  businessName = "test tree",
  email = "test@outlook.com",
}

export function defineEquationOperator(equation: string, num1: number, num2: number) {
  const arr: string[] = equation.split(" ");
  const mathOperators: string[] = ["+", "-", "*", "/"];
  const operator: [] = [];
  let result: number = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < mathOperators.length; j++) {
      if (arr[i] === mathOperators[j]) {
        operator.push(arr[i]);
      }
    }
  }

  switch (operator.join()) {
    case "*":
      result = num1 * num2;
      break;
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }

  return result;
}
