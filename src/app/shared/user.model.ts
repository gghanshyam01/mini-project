export class User {
  constructor(
    private firstName: string,
    private lastName: string,
    private emailId: string,
    private mobileNumber: string,
    private genderType: string,
    private dateOfBirth: string,
    private isAnAdmin: boolean,
    private imageUrl: string
  ) {}

  public get fullName(): string {
    return this.firstName + this.lastName;
  }

  public get email(): string {
    return this.emailId;
  }

  public get mobileNo(): string {
    return this.mobileNumber;
  }

  public get gender(): string {
    return this.genderType;
  }

  public get dob(): string {
    return this.dateOfBirth;
  }

  public get isAdmin(): boolean {
    return this.isAnAdmin;
  }

  public get imagePath(): string {
    return this.imageUrl;
  }
}
