<<<<<<< HEAD
// import { defineMiddleware } from "astro:middleware";
// import { getSession } from 'auth-astro/server';

// const protectedRoutes = [
//   "/",
//   "/editor"
// ];

// export const onRequest = defineMiddleware(async ( request, next) => {
//   const { locals, url, cookies, redirect } = request
=======
import { defineMiddleware } from "astro:middleware";
import { getSession } from 'auth-astro/server';

const protectedRoutes = [
   "/",
   "/editor"
 ];

 export const onRequest = defineMiddleware(async ( request, next) => {
   const { locals, url, cookies, redirect } = request
>>>>>>> 2fbf1d70ec8ed10d5c00780977b635b6ced90dc0
//   if (protectedRoutes.some(protectedRoute => protectedRoute === url.pathname)) {
//     const session = await getSession(request)
//     console.log(session)
//     if(!session) {
//       return redirect("/login")
//     }
//   }
<<<<<<< HEAD
//   next()
//   },
// );
=======
   next()
   },
 );
>>>>>>> 2fbf1d70ec8ed10d5c00780977b635b6ced90dc0
