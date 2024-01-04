export function sumArray(input: number[]) {
  let counter = 0;
  for (let index = 0; index < input.length; index += 1) {
    counter += input[index];
  }
  return counter;
}
export function calculateStepsOver20Years(input: number) {
  return input * 20;
}
