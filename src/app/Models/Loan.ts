import { EmploymentDetails } from "./EmploymentDetails";
import { LoanDetails } from "./LoanDetails";
import { PersonalDetails } from "./PersonalDetails";

export class Loan{
    LoanId?:number;
    AccountNumber?:number;
    PersonalDetails?:PersonalDetails;
    EmploymentDetails?:EmploymentDetails;
    LoanDetails?:LoanDetails;
}