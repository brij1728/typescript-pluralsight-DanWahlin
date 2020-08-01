export interface AccountInfo<TRouteNumber, TBankNumber> {
  //using generic types
  routingNumber: TRouteNumber;
  bankNumber: TBankNumber;
}

export interface DepositWithdrawal {
  deposit(amount: number): void;
  withdrawal(amount: number): void;
}

export interface AccountSetting {
  it: number;
  title: string;
  balance: number;
  interestRate?: number;
  accountInfo?: AccountInfo<string, number>;
}

export interface Account extends AccountSetting, DepositWithdrawal {}
