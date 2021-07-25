import { Token } from '../domain/token.interface';
4;

export const mappingLogin = (data: any): Token => {
  return {
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
  };
};
