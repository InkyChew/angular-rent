import { IReview } from "./review";

export interface IProperty {
    id: number,
    city: string,
    county: string,
    address: string,
    rooms: IRoom[],
    landloardId: number,
}

export interface IRoom {
    id: number,
    name: string,
    description: string,
    price: number,
    type: RoomType,
    period: number,
    startAt: string,
    amenities: string,
    features: string,
    water?: string,
    elec?: string,
    net?: string,
    mng?: string,
    updatedAt: string,
    reviews: IReview[],
    propertyId: number,
}

export interface IRoomMedia {
    id: number,
    source: string,
    roomId: number,
}

export enum RoomType {
    Studio = 1,
    Suite = 2,
    SharedSuite = 3
}