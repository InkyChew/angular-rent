import { IReview } from "./review";
import { Property, Room } from "./room"

export class User {
    id: number = 0;
    name: string = '';
    username: string = '';
    email: string = '';
    gender?: number; // 0: fm, 1: m
    description?: string;
    reviews: IReview[] = [];
}

export class Debit extends User {
    equipments: string = '';
    features: string = '';
    favorites: Room[] = [];
}

export class Credit extends User {
    properties: Property[] = [];
}

export class Landlord extends Credit {
    
}

export class Employee extends Credit {
    companyId: number | null = null;
    staffId: string = '';
    certificates: Certificate[] = [];
}

export class Company {
    id: number = 0;
    name: string = '';
    description?: string;
    phone: string = '';
    manager: Employee = new Employee();
    employees: Employee[] = [];
}

export class Certificate {
    name: string = '';
    link: string = '';
    creditId: number;

    constructor(cId: number) {
        this.creditId = cId;
    }
}

export class Schedule {
    time: string = new Date().toISOString();
    type: number = 1;
}