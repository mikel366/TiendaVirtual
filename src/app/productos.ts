export interface Productos {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    images:      string[];
    creationAt:  Date;
    updatedAt:   Date;
    category:    Category;
}

export interface Category {
    id:         number;
    name:       Name;
    image:      string;
    creationAt: Date;
    updatedAt:  Date;
}

export enum Name {
    Bicycleq12 = "Bicycleq12",
    Electronics = "Electronics",
    Esma = "esma",
    Shoes = "Shoes",
    SomeCategory = "Some Category",
    Tes = "tes",
    Test = "test",
    Tests = "Tests",
}
