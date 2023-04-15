export type NumberFormat = {
  value: number;
  symbol: string;
};

const SI_UNIT: NumberFormat[] = [
  { value: 1, symbol: '' },
  { value: 1e4, symbol: 'k' },
  { value: 1e6, symbol: 'M' },
  { value: 1e9, symbol: 'B' },
  { value: 1e12, symbol: 'T' }
];

/**
 *
 * @param count string value to be transformed
 * @returns the transformed number with base 10 value.
 */

export function transformNumber(count: string): string {
  return Number.parseInt(count, 10).toLocaleString();
}

/**
 * The function returns the round format of the number received
 * For Eg: if the number is 10000, then it will display as 10K and extra 0 after decimal will be ignored.
 */
export const roundFormatter = (number_: number, roundOff?: boolean): string => {
  const regex = /\.0+$|(\.\d*[1-9])0+$/;
  let i: number;
  for (i = SI_UNIT.length - 1; i > 0; i--) {
    if (number_ >= SI_UNIT[i].value) {
      break;
    }
  }
  const convertedNumber = (number_ / SI_UNIT[i].value).toFixed(2).replace(regex, '$1');
  const finalNumber =
    i < 1
      ? roundOff
        ? Number(convertedNumber).toLocaleString()
        : transformNumber(convertedNumber.toString())
      : convertedNumber;
  return finalNumber + SI_UNIT[i].symbol;
};