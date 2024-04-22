import {
    LoginUserInput,
    AuthResponse,
    User,
    JobQueryOptions,
    JobPaginator,
    Job,
    RegisterUserInput,
    RegisterCompanyInput,
    Settings,
    Attachment
} from '@/types';
import { API_ENDPOINTS } from './api-endpoints';
import { HttpClient } from './http-client';

class Client {
    users = {
      login: (input: LoginUserInput) =>
        HttpClient.post<AuthResponse>(API_ENDPOINTS.LOGIN_URL, input),
      logout: () => HttpClient.post<boolean>(API_ENDPOINTS.LOGOUT, {}),
      register: (input: RegisterUserInput) =>
        HttpClient.post<AuthResponse>(API_ENDPOINTS.REGISTER, input),
      registerCompany: (input: RegisterCompanyInput) =>
        HttpClient.post<AuthResponse>(API_ENDPOINTS.REGISTER_COMPANY, input),
    };

    jobs = {
      all: (params?: Partial<JobQueryOptions>) =>
        HttpClient.get<JobPaginator>(
          API_ENDPOINTS.JOBS,
          params
        ),
      get: (profileId: string) =>
          HttpClient.get<Job>(`${API_ENDPOINTS.OPPORTUNITIES}/myopportunities/${profileId}`),
    };
    settings = {
      //FIXME: check this async function
      all: async () => HttpClient.get<Settings>(API_ENDPOINTS.SETTINGS),
      upload: (input: File[]) => {
        let formData = new FormData();
        input.forEach((attachment) => {
          formData.append('attachment[]', attachment);
        });
        return HttpClient.post<Attachment[]>(API_ENDPOINTS.UPLOADS, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      },
    };
}

export default new Client();