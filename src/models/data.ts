export interface Animal {
  name: string;
  type: string;
  age: number;
  location: string;
  desc: string;
  adopted: boolean;
  dateAdded:string;
  image: string;
  id: number;
}

export interface TypeArray {
  type: string;
}

export interface FormState {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
}
