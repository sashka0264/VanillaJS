const required = (value) => (value ? null : 'Field is required'),
  maxLengthCreator = (maxLength) => (value) => (value.length > maxLength ? `Max length is ${maxLength} symbols` : null),
  minLengthCreator = (minLength) => (value) => (value.length < minLength ? `Min length is ${minLength} symbols` : null),

  emailValidator = (value) => {
    const perfect = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return (!perfect.test(value)) ? 'invalid email' : null;
  };

export {
  required, maxLengthCreator, minLengthCreator, emailValidator,
};
