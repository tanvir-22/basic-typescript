interface Baseaccount {
  readonly id: number;
  name: string;
  deposit(amount: number): void;
  withdraw(amount: number): void;
  status(): void;
}

class Account implements Baseaccount {
  protected limit: boolean = false;
  protected limitamount = 0;
  constructor(
    public readonly id: number,
    public name: string,
    protected balance: number,
  ) {}

  deposit(amount: number): void {
    this.balance += amount;
  }
  withdraw(amount: number): void {
    if (this.balance < amount) {
      throw new Error("insufficient balance");
    }
    if (this.limit && amount > this.limitamount) {
      throw new Error(`your can't withdraw more than $${this.limitamount}`);
    }

    this.balance -= amount;
  }
  status(): void {
    console.log(
      `account no: ${this.id}, account holder : ${this.name} has a balance of $${this.balance}`,
    );
  }
}
class Studentaccount extends Account {
  limit: boolean = true;
  limitamount: number = 10000;
}
class Savingsaccount extends Account {
  limit: boolean = true;
  limitamount: number = 50000;
}
class Currentaccount extends Account {}

const studentObj1 = new Studentaccount(1, "jamil", 50000);
studentObj1.status();
studentObj1.deposit(3400);
studentObj1.status();
studentObj1.withdraw(5000);
studentObj1.status();
studentObj1.withdraw(200000);
studentObj1.status();
