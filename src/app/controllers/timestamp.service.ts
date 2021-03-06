import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimestampService {

  constructor() { }

  getNow(format: boolean) {
    let now = Date.now();
    if (format === true) {
      return this.formatStamp(now);
    } else {return now};
  }

  formatStamp(stamp: number) {
    let date = new Date(stamp);
    let day = this.checkIfNeedZero(date.getUTCDate().toString());
    let month = this.checkIfNeedZero((date.getMonth() + 1).toString());
    let year = date.getFullYear();
    let hour = this.checkIfNeedZero(date.getHours().toString());
    let minutes = this.checkIfNeedZero(date.getMinutes().toString());
    return day + '/' + month + '/' + year + ' - ' + hour + ':' + minutes;
  }

  checkIfNeedZero(n: string) {
    (n.length > 1) ? n : n = '0' + n;
    return n;
  }
}
