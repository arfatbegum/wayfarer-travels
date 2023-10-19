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

export interface ICategory {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IService {
  [x: string]: any;
  id: string;
  name: string;
  validFrom: string;
  validTill: string;
  location: string;
  price: number;
  person: number;
  availableQunatity: number;
  duration: string;
  description: string;
  facilities: string;
  whyChooseUs: string;
  image: string;
  updatedAt: string;
  __v: number;
}

export interface IBooking {
  id: string;
  userId: string;
  serviceId: string;
  paymentInfoId: string;
  status: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface INews {
  id: string;
  userId: string;
  contentType: string;
  title: string;
  content: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IFAQ {
  [x: string]: any;
  id: string;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IReview {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IFeedback {
  id: string;
  userId: string;
  suggestions: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
