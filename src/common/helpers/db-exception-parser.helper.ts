import { IError } from "../types";

const duplicateKey = (e: any): IError => {
  const { detail } = e;
  const regex = /Key \((.*?)\)=\((.*?)\) already exists\./g;
  const match = regex.exec(detail);
  const [, key, value] = match;
  return {
    [key]: `${value} already exists`,
  };
};

export const DbExceptionParser = (e: any): IError => {
  const { code } = e;
  switch (code as string) {
    case '23505':
      return duplicateKey(e);
    default:
      return {
        message: e.message,
      };
  }
};