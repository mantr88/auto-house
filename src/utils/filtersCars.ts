import { Cars, Mark, Price } from "../ui/CardList/CardList.types";

export const filtersCars = (
  cars: Cars,
  filterByMark: Mark,
  filterByPrice: Price,
  startMileage: number,
  endMileage: number
) => {
  let filteredCars = [...cars];

  if (filterByMark) {
    const normalizeFilterByMark = filterByMark.toLowerCase();

    filteredCars = filteredCars.filter((car) =>
      car.make.toLowerCase().includes(normalizeFilterByMark)
    );
  }

  if (filterByPrice) {
    filteredCars = filteredCars.filter((car) => {
      return Number(car.rentalPrice.slice(1)) <= filterByPrice;
    });
  }

  if (startMileage) {
    filteredCars = filteredCars.filter((car) => car.mileage >= startMileage);
  }

  if (endMileage) {
    filteredCars = filteredCars.filter((car) => car.mileage <= endMileage);
  }

  return filteredCars;
};
