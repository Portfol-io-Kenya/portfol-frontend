export interface SearchParamOptions {
  email: string;
  name: string;
  address: string;
  role: string;
  position: string;
  status: string;
  is_active: string;
}

export interface QueryOptions {
  page: number;
  limit: number;
}

export interface PaginatorInfo<T> {
  page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: any;
  next_page_url: string | null;
  path: string;
  items_per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface UserQueryOptions extends QueryOptions {
  sortedBy: string;
  orderBy: string;
  name: string;
  role: string;
  email: string;
  address: string;
}

export interface JobQueryOptions extends QueryOptions {
  sortedBy: string;
  orderBy: string;
  owner_id: string;
  name: string
}

export interface LoginUserInput {
  email: string;
  password: string;
}

export interface RegisterUserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ContactEmployerInput {
  email: string;
  subject: string;
  number: string;
  message: string;
}

export interface RegisterCompanyInput {
  name: string;
  email: string;
  password: string;
}
export interface AuthResponse {
  access: string;
  refresh: string;
  token: string;
}

export type User = {
  token: {
    access_token: string
    refresh_token: string
  }
  user: {
    _id: string
    id: string
    profileID: any[]
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    identityNumber: string
    dateOfBirth: string
    empStatus: string
    verified: boolean
    __v?: number
    createdAt: string
    updatedAt: string
    profileImage: string
    coverImage: string
    address: string
    blurb: string
  }
  message: string
}

export interface UpdateUserInput extends Partial<User> {
  id: string;
}

export type Tag = {

}

export type Skill = {
  _id: string
  skillName: string
  tags: any[]
  createdAt: string
  updatedAt: string
  __v: number
  id: string

}

export type Application = {


}

export type Company = { 
  _id: string
  name: string
  email: string
  jobPosts: any[]
  __v: number
  about: string
  contact: string
  location: string
  profileUrl: string
}

export type Job = {
  _id: string
  company: Company
  jobTitle: string
  jobType: string
  location: string
  salary: number
  vacancies: number
  experience: number
  detail: any[]
  application: any[]
  createdAt: string
  updatedAt: string
  __v: number
}

export type Id = string | number;

export type Column = {
  id: Id;
  title: string;
};

export type Task = {
  id: Id;
  columnId: Id;
  content: string;
  title?: string
  priority?: string
  date?: string
  views?: number
};


export interface UserPaginator extends PaginatorInfo<User> {}
export interface JobPaginator extends PaginatorInfo<Job> {}
