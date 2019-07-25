export default interface Client {
    id?: string;
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    balance: number;
    address?: string;
}
