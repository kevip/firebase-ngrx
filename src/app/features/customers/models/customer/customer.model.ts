import { ICustomer } from '../../commons/interfaces/customer.interface';

export class CustomerModel {
  age: number;
  firstName: string;
  lastName: string;
  dob: string;

  constructor(request: ICustomer) {
    this.age = this.calculateAge(request.dob);
    this.firstName = request.firstName;
    this.lastName = request.lastName;
    this.dob = request.dob;
  }

  private calculateAge(dob: string): number {
    const diffMs = Date.now() - (new Date(dob)).getTime();
    const ageDt = new Date(diffMs);
    return Math.abs(ageDt.getUTCFullYear() - 1970);
  }

}
