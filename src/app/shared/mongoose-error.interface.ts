export interface MongooseError {
  errors: Errors;
  _message: string;
  message: string;
  name: string;
}

interface Errors {
  email: MoError;
  mobileNumber: MoError;
}

interface MoError {
  message: string;
  name: string;
  properties: Properties;
  kind: string;
  path: string;
  value: string;
  '$isValidatorError': boolean;
}

interface Properties {
  message: string;
  type: string;
  path: string;
  value: string;
}
