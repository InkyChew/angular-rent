import { IReview } from "./review";

export class Property {
    id: number = 0;
    name: string = '';
    description?: string;
    city: string = '';
    county: string = '';
    address: string = '';
    rooms: Room[] = [];
    creditId: number;

    constructor(cId: number) {
        this.creditId = cId;
    }
}

export class Room {
    id: number = 0;
    name: string = '';
    description?: string;
    price: number = 0;
    waterFee?: string;
    electricityFee?: string;
    networkFee?: string;
    managementFee?: string;
    otherFee?: string;
    type: RoomType = RoomType.Suite;
    size: number = 0;
    count: number = 1;
    startAt: string = new Date().toISOString();
    period: number = 1;
    periodType: number = 1;
    equipments: RoomEqp[] = [];
    features: RoomFeature[] = [];
    medias: RoomMedia[] = [];
    updatedAt: string = new Date().toISOString();
    reviews: IReview[] = [];
    propertyId: number;

    constructor(pId: number) {
        this.propertyId = pId;
    }
}

export class Equipment {
    id: number = 0;
    name: string = '';
    // bed: number = 0;
    // closet: number = 0;
    // ac: number = 0;
    // water: number = 0;
    // chair: number = 0;
    // table: number = 0;
    // washer: number = 0;
    // firdge: number = 0;
}

export class RoomEqp {
    roomId: number;
    eqpId: number;
    count: number = 0;

    constructor(rId: number, eId: number) {
        this.roomId = rId;
        this.eqpId = eId;
    }
}

export class Feature {
    id: number = 0;
    name: string = '';
    // pet: boolean = false;
    // window: boolean = false;
    // allowance: boolean = false;
    // garbage: boolean = false;
    // manager: boolean = false;
    // gender: number = 2; // 0: fm, 1: m, 2: all
    // cook: number = 0; // 0: no, 1: no fire, 2: kitchen
}

export class RoomFeature {
    roomId: number;
    featureId: number;

    constructor(rId: number, fId: number) {
        this.roomId = rId;
        this.featureId = fId;
    }
}

export class RoomMedia {
    id: number = 0;
    source: string;
    roomId: number;

    constructor(src: string, rId: number) {
        this.source = src;
        this.roomId = rId;
    }
}

export enum RoomType {
    Studio = 1,
    Suite = 2,
    SharedSuite = 3
}