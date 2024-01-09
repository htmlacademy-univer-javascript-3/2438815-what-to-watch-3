import {StatusCodes} from 'http-status-codes';

export const STATUS_CODE_MAPPING: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};
