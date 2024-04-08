export interface IProduct{
    _id?: number;
    name: string;
    price: number;
    image: string;
    description: string;
    discount: number;
    featured: boolean;
    quantity: number;
    category: string;
    countInStock: number;
}