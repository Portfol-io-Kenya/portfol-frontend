"use client"
import { useState } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import client from './client';
import {toast} from 'react-toastify'
import { useAtom } from 'jotai';
import { authorizationAtom } from './client/authorization-atom';
import { useToken } from '@/lib/hooks/use-token';
import { useRouter } from 'next/navigation';
import { RegisterCompanyInput, RegisterUserInput } from '@/types';

export function useLogin() {
  const [isAuthorized, setAuthorized] = useAtom(authorizationAtom);
  const { setToken, setRefreshToken } = useToken();
  let [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();
  
  const { mutate, isPending } = useMutation({
    mutationFn: client.users.login,
    onSuccess: (data) => {
      // check if user has received token from the api
      if (!data.token) {
        // if not give an error message
        setServerError('The credentials do not match.');
        return;
    }

    
  
    //  here we set the access token from the api jwt to the cookies
    setToken(data.token);
  
    // we also set the refresh tokens here
    setRefreshToken(data.refresh);
  
    // then the user is authenticated
    setAuthorized(true);
    router.push('/find-work/jobs')
    toast.success('You are logged in!', {autoClose:3500, position: 'top-center'})
    },
    onError: (error: any) => {
      console.log(error.response.data.message);
      setServerError(error.response.data.message)
    },
  });
  
  return { mutate, isPending, serverError, setServerError, isAuthorized };
}


export function useLogout() {
  const queryClient = useQueryClient();
  const { setToken } = useToken();
  const [_, setAuthorized] = useAtom(authorizationAtom);

  return useMutation({
    mutationFn: client.users.logout,
    onSuccess: (data) => {
      if (data) {
        setToken('');
        setAuthorized(false);
        toast.error('You are now logged out!', {autoClose: 3500, position: 'top-center'})
      }
    },
    onSettled: () => {
      queryClient.clear();
    },
  });
}

export function useRegister() {
    const { setToken } = useToken();
    const [_, setAuthorized] = useAtom(authorizationAtom);
    let [formError, setFormError] = useState<Partial<RegisterUserInput> | null>(
      null
    );
    const router = useRouter();

  
    const { mutate, isPending } = useMutation({
        mutationFn: client.users.register,
        onSuccess: (data) => {
            if (data) {
                toast.success('User successfully created.');
                router.push('/auth/verify')
                return;
            }
            
        },
      onError: (error) => {
        const {
          response: { data },
        }: any = error ?? {};
  
        setFormError(data);
      },
    });
  
    return { mutate, isPending, formError, setFormError };
  }

  export function useRegisterCompany() {
    const { setToken } = useToken();
    const [_, setAuthorized] = useAtom(authorizationAtom);
    let [formError, setFormError] = useState<Partial<RegisterCompanyInput> | null>(
      null
    );
    const router = useRouter();

  
    const { mutate, isPending } = useMutation({
        mutationFn: client.users.registerCompany,
        onSuccess: (data) => {
            if (data) {
                toast.success('Account successfully created.');
                router.push('/auth/verify')
                return;
            }
            
        },
      onError: (error) => {
        const {
          response: { data },
        }: any = error ?? {};
  
        setFormError(data);
      },
    });
  
    return { mutate, isPending, formError, setFormError };
  }