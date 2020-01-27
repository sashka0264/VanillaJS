const required = (value) => {
  if (value) return undefined;
  return "Field is required";
};

const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined;
};

const minLengthCreator = (minLength) => (value) => {
  if (value.length < minLength) return `Min length is ${minLength} symbols`;
  return undefined;
};

const emailValidator = (value) => {
  const perfect = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
  if (!perfect.test(value)) {
    return 'invalid email'
  } 
  return undefined;
}


export {required, maxLengthCreator, minLengthCreator, emailValidator};