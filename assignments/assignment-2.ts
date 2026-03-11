// Customer Info
let customerName :string = "John Doe";
let creditScore :number = 720;
let income :number = 55000.0;
let isEmployed : boolean = true;
let debtToIncomeRatio:number = 35.0;


function customerEligibleForLoan(
  customerName:string,
  creditScore: number,
  income: number,
  isEmployed: boolean,
  debtToIncomeRatio: number
): void {

  if (creditScore > 750) {
    console.log(customerName + " Loan Approved");
  }

  else if (creditScore >= 650 && creditScore <= 750) {

    if (income >= 50000) {

      if (isEmployed) {

        if (debtToIncomeRatio < 40) {
          console.log(customerName + " Loan Approved");
        } else {
          console.log(customerName + " Loan Denied (DTI is high)");
        }

      } else {
        console.log(customerName + " Loan Denied (Customer is unemployed)");
      }

    } else {
      console.log(customerName + " Loan Denied (Income is less than 50000)");
    }

  }

  else {
    console.log(customerName + " Loan Denied (Low Credit Score)");
  }
}

// Function call
customerEligibleForLoan(customerName, creditScore, income, isEmployed, debtToIncomeRatio);