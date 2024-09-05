(() => {
  type Gender = "M" | "F";
  type PersonProps = {
    name: string;
    gender: Gender;
    birthdate: Date;
  };
  type UserProps = {
    email: string;
    role: string;
  } & PersonProps;

  type UserSettingProps = {
    workingDirectory: string;
    lastOpenFolder: string;
  } & UserProps;

  class Person {
    public name: string;
    public birthdate: Date;
    public gender: Gender;

    constructor({ name, birthdate, gender }: PersonProps) {
      this.name = name;
      this.birthdate = birthdate;
      this.gender = gender;
    }
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;
    constructor({ name, birthdate, email, gender, role }: UserProps) {
      super({ name, gender, birthdate });
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate,
    }: UserSettingProps) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/usr/home",
    lastOpenFolder: "/home",
    email: "fernando@google.com",
    role: "Admin",
    name: "Fernando",
    gender: "M",
    birthdate: new Date("1985-10-21"),
  });

  console.log({ userSettings });
})();
