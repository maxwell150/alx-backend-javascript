interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

let student1: Student = {
    firstName: "David",
    lastName: "Rogers",
    age: 19,
    location: 'Nairobi' 
};

let student2: Student  = {
    firstName: "Anthony",
    lastName: "Muikaria",
    age: 22,
    location: 'Eldoret' 
};

let studentsList: Student[] = [student1, student2];

let table = document.createElement('table');
document.body.appendChild(table);

studentsList.map((item: Student) => {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    let td1 = document.createElement('td');
    td1.innerHTML = item.firstName;
    tr.appendChild(td1);
    let td2 = document.createElement('td');
    td2.innerHTML = item.location;
    tr.appendChild(td2);

    return tr;
});
