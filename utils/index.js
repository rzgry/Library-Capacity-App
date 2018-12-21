/* eslint-disable import/prefer-default-export */

export function uuid() {
  let i;
  let random;
  let uuidStr = '';

  /* eslint-disable no-bitwise */
  /* eslint-disable no-nested-ternary */
  for (i = 0; i < 32; i += 1) {
    random = (Math.random() * 16) | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuidStr += '-';
    }
    uuidStr += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16);
  }
  /* eslint-enable no-bitwise */
  /* eslint-enable no-nested-ternary */

  return uuidStr;
}
