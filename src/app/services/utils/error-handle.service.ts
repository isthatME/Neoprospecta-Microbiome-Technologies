import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService {

  constructor() { }

  handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Ocorreu um erro: ${err.error.message}`;
    } else {
      errorMessage = `Resposta do servidor:  ${err.status}: ${err.body?.error}`;
    }
    return errorMessage;
  }
}
