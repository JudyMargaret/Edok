import { Injectable } from '@angular/core';
import { IBankdata } from '../assets/Data/bankdata';

@Injectable({
  providedIn: 'root'
})
export class BankdataserviceService {

  constructor() { }
  getBankData(): IBankdata[] {
    return [{
      accountId: 244668,
      accountName: "Pakaphong",
      accountSurname: "Chamnansilp",
      moneyAmount: 22924,
    }, {
      accountId: 244668,
      accountName: "Pakaphong",
      accountSurname: "Chamnansilp",
      moneyAmount: 22924,
    }, {
      accountId: 244668,
      accountName: "Pakaphong",
      accountSurname: "Chamnansilp",
      moneyAmount: 22924,
    }]
  }
}
