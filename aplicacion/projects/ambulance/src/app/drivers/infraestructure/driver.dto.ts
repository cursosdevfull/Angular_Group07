import { DriverModel } from '../domain/driver.model';

export const mappingDriver = (
  data: any | any[]
): DriverModel | DriverModel[] => {
  const isArray = Array.isArray(data);

  if (isArray) {
    return data.reduce((accum: DriverModel[], value: any) => {
      accum.push({ id: value.id, name: value.nombre });
      return accum;
    }, []) as DriverModel[];
  } else {
    return { id: data.id, name: data.nombre };
  }
};
