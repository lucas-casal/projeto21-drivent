import { ApplicationError } from '@/protocols';

export function badRequest(): ApplicationError {
  return {
    name: 'badRequestError',
    message: 'There is a problem with the given CEP',
  };
}
