import {ErrorType} from '../../types/error-type';

export function makeErrorMessage(error : ErrorType) : string {
  let detailsMessages : string[] = [];
  error.details.map((detail) => {
    detailsMessages = detailsMessages.concat(detail.messages);
  });
  const messageString = detailsMessages.join('\n');
  return messageString;
}
