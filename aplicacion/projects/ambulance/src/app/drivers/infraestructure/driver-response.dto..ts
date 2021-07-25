import { DriverModel } from '../domain/driver.model';

export interface DriverResponse {
  nombre: string;
}

export const mappingDriverResponse = (
  data: Partial<DriverModel> | Partial<DriverModel>[]
): DriverResponse | DriverResponse[] => {
  const isArray = Array.isArray(data);

  if (isArray) {
    return (data as Partial<DriverModel>[]).reduce(
      (accum: DriverResponse[], value: any) => {
        accum.push({ nombre: value.name });
        return accum;
      },
      []
    ) as DriverResponse[];
  } else {
    return { nombre: (data as any).name };
  }
};
