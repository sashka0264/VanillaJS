const required: (x: string) => string | null = (value) => (value ? null : 'Field is required'),
  maxLengthCreator: (x: number) => (y: string) => string | null = (maxLength) => (
    value,
  ) => (value.length > maxLength ? `Max length is ${maxLength} symbols` : null),
  minLengthCreator: (x: number) => (y: string) => string | null = (minLength) => (
    value,
  ) => (value.length < minLength ? `Min length is ${minLength} symbols` : null),
  emailValidator: (x: string) => string | null = (value) => {
    const perfect = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return (!perfect.test(value)) ? 'invalid email' : null;
  };

export {
  required, maxLengthCreator, minLengthCreator, emailValidator,
};
