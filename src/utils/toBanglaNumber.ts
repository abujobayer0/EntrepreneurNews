export const toBanglaNumber = (number: number): string => {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return number
    .toString()
    .split('')
    .map((digit) => (/\d/.test(digit) ? banglaDigits[parseInt(digit)] : digit))
    .join('');
};
