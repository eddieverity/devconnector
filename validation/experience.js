const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  // This is for if fields left blank, they're put in as empty strings for isEmpty function to run
  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if(Validator.isEmpty(data.title)) {
    errors.title = 'Job title field is required';
  }
 
  if(Validator.isEmpty(data.company)) {
    errors.company = 'Company field is required';
  }

  if(Validator.isEmpty(data.from)) {
    errors.from = 'From date field is required';
  } 


  return {
    errors: errors,
    isValid: isEmpty(errors)
  }
}