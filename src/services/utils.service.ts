import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {

  getTimeDate(): string {
    const dateOb = new Date();
    const date = ('0' + dateOb.getDate()).slice(-2);
    const month = ('0' + (dateOb.getMonth() + 1)).slice(-2);
    const year = dateOb.getFullYear();
    const hours = ('0' + dateOb.getHours()).slice(-2);
    const minutes = ('0' + dateOb.getMinutes()).slice(-2);
    const seconds = ('0' + dateOb.getSeconds()).slice(-2);

    return `[${year}-${month}-${date} ${hours}:${minutes}:${seconds}]`;
  }

}
