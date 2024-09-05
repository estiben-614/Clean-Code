(() => {
    class Person{

        // Manera lenta

        // public name: string;
        // public apellido: string;
        // public birthdate: Date;

        // constructor(name: string, apellido: string, birthdate: Date){
        //     this.name=name;
        //     this.apellido=apellido;
        //     this.birthdate=birthdate;
        // }


        //Manera rapida

        constructor(
            public name: string,
            public apellido: string,
            public birthdate: Date){
            this.name=name;
            this.apellido=apellido;
            this.birthdate=birthdate;
        };

    }

    class User extends Person{
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            apellido: string,
            birthdate: Date,
        ){
            super(name, apellido, birthdate);
            this.lastAccess = new Date();
        }
    }

    class UserSettings extends User {
      constructor(
        public workingDirectory: string,
        public lastOpenFolder: string,
        email: string,
        role: string,
        name: string,
        apellido: string,
        birthdate: Date
      ) {
        super(email, role, name, apellido, birthdate);
        this.workingDirectory = workingDirectory;
        this.lastOpenFolder = lastOpenFolder;
      }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'fernando@google.com',
        'Admin',
        'Estiben',
        'Fernandez',
        new Date('1985-10-21')
    );

    console.log({ userSettings });

    const person1 = new Person('Estiben', 'Fernández', new Date())
    console.log({person1})
})()