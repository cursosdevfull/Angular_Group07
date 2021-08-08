import { UserModel } from '../domain/user.model';

export interface ResultPage {
  records: UserModel | UserModel[];
  totalRecords: number;
}
