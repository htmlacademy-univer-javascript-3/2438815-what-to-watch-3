

export type ErrorType = {
  errorType: string;
  message: string;
  details: ErrorDetails[];
}

type ErrorDetails = {
  property: string;
  value: string;
  messages: string[];
}

