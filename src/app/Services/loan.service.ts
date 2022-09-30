import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from '../Models/Loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http:HttpClient) {
    this.url = "https://localhost:7239/api/Loans";
   }

   url:string;

  //  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  //  return this.http.post<BillingModel>('http://localhost:28721/api/CustomerModule/GenerateBill',  
  //  bill, httpOptions);
   
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

  createLoan(loan:Loan){  
    return this.http.post(this.url, loan, this.httpOptions)
    
  }
}
