export interface IMeta {
  limit: number;
  page: number;
  size: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IDProps = {
  params: any;
};

export interface IUser {
  id: string;
  name: string;
  email: string;
  contactNo: string;
  address: string;
  profileImg: string;
  permanentAddress: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IAdmin {
  id: string;
  name: string;
  email: string;
  contactNo: string;
  address: string;
  profileImg: string;
  permanentAddress: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IFAQ {
  id: string;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
