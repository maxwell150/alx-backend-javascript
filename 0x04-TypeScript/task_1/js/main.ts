interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [prop: string]: any;
};


interface Directors extends Teacher {
    numberOfReports: number;
  }
