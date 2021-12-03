class Employee {
    constructor(name, id, department) {
        this.name = name;
        this.id = id;
        this.department = department;
    }

    getDetail() {
        return (
            `Hi, my name is ${this.name} with ID ${this.id}.\nI'm in the department ${this.department}`
        );
    }
}

class Secretary extends Employee {
    constructor(name, id, department) {
        super(name, id, department);
    }

    getDetail() {
        return `${super.getDetail()}.\nMy role is Secretary`;
    }

    printDocument() {
        return `All right, give me 5 minutes and I'll give the document to you as soon as possible.`;
    }

    sendDocument() {
        return `All right, I'll give it to you via email.`;
    }
}

class Manager extends Employee {
    constructor(name, id, department, responsibility) {
        super(name, id, department);
        this.responsibility = responsibility;
    }

    getDetail() {
        return `${super.getDetail()}.\nMy role is Manager with responsibility ${this.responsibility}`;
    }

    management() {
        return `Here my management functions:\nplanning, organizing, leading and controlling`;
    }
}

class Developer extends Employee {
    constructor(name, id, department, backendTool, frontendTool) {
        super(name, id, department);
        this.backendTool = backendTool;
        this.frontendTool = frontendTool;
    }

    getDetail() {
        return `${super.getDetail()}.\nMy role is Developer.\nI'm using ${this.backendTool} as backend and ${this.frontendTool} as frontend.`;
    }
}

const Fariz = new Secretary('Fariz Afif', 1234, 'Social');
const Afif = new Manager('Fariz Afif', 5678, 'Science', 'Manage Project');
const Ais = new Developer('Fariz Afif', 91011, 'Project', 'Javascript', 'HTML')
const farizAfif = new Employee('Fariz Afif', 1234, 'Marketing')


console.log(Fariz.getDetail());
console.log(Fariz.printDocument())
console.log(Fariz.sendDocument())
console.log(Afif.getDetail());
console.log(Afif.management())
console.log(Ais.getDetail());
console.log(farizAfif.getDetail());
