export type Car = {
  id: string;
  year: number;
  make: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: number;
};

export type Cars = Car[];

export type Mark = string | undefined;
export type Price = number | undefined;

export type CardListProps = {
  cars: Cars;
  isLoading: boolean;
};
