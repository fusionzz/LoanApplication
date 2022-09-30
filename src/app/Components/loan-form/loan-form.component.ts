import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Loan } from 'src/app/Models/Loan';
import { LoanService } from 'src/app/Services/loan.service';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent implements OnInit {

  constructor(private fb:FormBuilder, private LoanService:LoanService) { }

  ngOnInit(): void {
  }

  maritalOptions = ["Single", "Married", "Civil Partner", "Seperated", "Widowed", "Divorced"]
  maxPurpose = 50

  LoanForm = this.fb.group({
    AccountNumber: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern("[0-9]*")]],
    PersonalDetails: this.fb.group({
      Name: ['', [Validators.required]],
      HomeAddress: ['', [Validators.required]],
      PreviousAddress: [''],
      HomeNumber: [''],
      Mobile: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      DOB: ['', [Validators.required]],
      MaritalStatus: ['Select One'],
      NumDependents: ['0']
    }),
    EmploymentDetails: this.fb.group({
      Employer: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      EmploymentType: ['', [Validators.required]],
      LengthOfService: ['', [Validators.required]],
      WorkEmail: ['', [Validators.email]],
      WorkPhone: ['']
    }),
    LoanDetails: this.fb.group({
      Amount: ['', [Validators.required, Validators.pattern("[0-9]*")]],
      LoanPurpose: ['', [Validators.required]]
    })
  });

  error = ""
  isError = false
  isSuccess = false

  onSubmit(){
    console.log("submitted");
    this.loan = <Loan>this.LoanForm.value;
    this.LoanService.createLoan(this.loan).subscribe(response => {
      this.isError = false
      this.error = ""
      this.isSuccess = true
    },
    error => {
      this.isError = true
      this.error = "There was an error"
    })
  }

  loan:Loan = new Loan();

}
