export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public mobileNumber: string,
    public gender: string,
    public dob: string,
    public isAdmin: boolean,
    public imageUrl: string
  ) {}

  // public get fullName(): string {
  //   return this.fName + this.lName;
  // }

  // public get firstName(): string {
  //   return this.fName;
  // }

  // public get lastName(): string {
  //   return this.lName;
  // }

  // public get email(): string {
  //   return this.emailId;
  // }

  // public get mobileNo(): string {
  //   return this.mobileNumber;
  // }

  // public get genderType(): string {
  //   return this.gender;
  // }

  // public get birthDate(): string {
  //   return this.dob;
  // }

  // public get isAnAdmin(): boolean {
  //   return this.isAdmin;
  // }

  // public get imagePath(): string {
  //   return this.imageUrl;
  // }
}
