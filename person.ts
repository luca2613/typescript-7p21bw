export class Person {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;

  constructor(first: string, middle: string, last: string, age: number) {
    this.firstName = first;
    this.middleName = middle;
    this.lastName = last;
    this.age = age;
  }

  getFullName() {
    return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
  }
  getBirthdayYear() {
    return 2022 - this.age;
  }
}
