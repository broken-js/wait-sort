/**
 * Sorts an array of numbers by waiting patiently
 * @param {number[]} numbers An array of numbers to sort
 * @returns {Promise<number[]>} A promise of sorted numbers…
 */
export default async function waitSort(numbers) {
  const sorted = [];
  await Promise.all(
    numbers.map(
      (number) =>
        new Promise((resolve) => {
          setTimeout(() => {
            sorted.push(number);
            resolve();
          }, number);
        }),
    ),
  );
  return sorted;
}
