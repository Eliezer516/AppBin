import { defineMiddleware } from "astro:middleware";
import { getSession } from 'auth-astro/server';

const protectedRoutes = [
   "/",
   "/editor"
 ];

 export const onRequest = defineMiddleware(async ( request, next) => {
   const { locals, url, cookies, redirect } = request
//   if (protectedRoutes.some(protectedRoute => protectedRoute === url.pathname)) {
//     const session = await getSession(request)
//     console.log(session)
//     if(!session) {
//       return redirect("/login")
//     }
//   }
   next()
   },
 );