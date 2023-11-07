// "use client"
// import { useState } from 'react';
// import { useQueryClient, useMutation } from '@tanstack/react-query';
// import client from './client';
// import {toast} from 'react-toastify'
// import { useAtom } from 'jotai';
// import { authorizationAtom } from './client/authorization-atom';
// import { useToken } from '@/lib/hooks/use-token';

// export function useLogin() {
//   const [isAuthorized, setAuthorized] = useAtom(authorizationAtom);
//   const { setToken, setRefreshToken } = useToken();
//   let [serverError, setServerError] = useState<string | null>(null);
  
//   const { mutate, isLoading } = useMutation(client.users.login, {
//     onSuccess: (data) => {
//       // check if user has received token from the api
//       if (!data.token.access_token) {
//         // if not give an error message
//         setServerError('The credentials do not match.');
//         return;
//       }
  
//       //  here we set the access token from the api jwt to the cookies
//       setToken(data.token.access_token);
  
//       // we also set the refresh tokens here
//       setRefreshToken(data.token.refresh_token);
  
//       // then the user is authenticated
//       setAuthorized(true);
//       toast.success('You are logged in!', {autoClose:3500, position: 'top-center'})
//     },
//     onError: (error: Error) => {
//       console.log(error.message);
//       setServerError(error.message)
//     },
//   });
  
//   return { mutate, isLoading, serverError, setServerError, isAuthorized };
// }


// export function useLogout() {
//   const queryClient = useQueryClient();
//   const { setToken } = useToken();
//   const [_, setAuthorized] = useAtom(authorizationAtom);

//   return useMutation(client.users.logout, {
//     onSuccess: (data) => {
//       if (data) {
//         setToken('');
//         setAuthorized(false);
//         toast.error('You are now logged out!', {autoClose: 3500, position: 'top-center'})
//       }
//     },
//     onSettled: () => {
//       queryClient.clear();
//     },
//   });
// }