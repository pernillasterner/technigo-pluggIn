// Import the 'Route' component from the 'react-router-dom' library.
import { Route } from "react-router-dom";
// Import various page components used as route elements.
import { Home } from "../pages/Home";
import { RegistrationForm } from "../components/RegistrationForm";
import { NotFound } from "../pages/NotFound";

// Define the 'routes' variable as a JSX expression.
const routes = (
  <>
    {/* Define a route for the root path ('/') that renders the 'Login' component. */}
    {/* <Route path="/" element={<Login />} /> */}
    {/* Define a route for the '/home' path that renders the 'Home' component. */}
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<RegistrationForm />} />
    {/* Define a catch-all route that matches any other path ('*') and renders the 'NotFound' component. */}
    <Route path="*" element={<NotFound />} />
  </>
);

// Export the 'routes' variable as the default export of this module.
export default routes;

// SUMMARY

// This file sets up routing for a React application using React Router. It imports the necessary components and defines routes for different URL paths, associating each path with a specific component to be rendered when that path is accessed. The catch-all route with the path "*" is used to handle routes that do not match any of the specified paths, rendering the "NotFound" component in such cases.

// import { Header } from "./components/Header";
// import { RegistrationForm } from "./components/RegistrationForm";
// import { Login } from "./components/Login";
// import { Play } from "./components/Play";
// import { Math } from "./components/Games/Math";
// import { Swedish } from "./components/Games/Swedish";
// import { English } from "./components/Games/English";
// import { Progress } from "./components/MyProgress";

// import { UserProvider } from "./contexts/UserContext";

// export const App = () => {
//   return (
//     <BrowserRouter>
//       <UserProvider>
//         <Header />
//         <main>
//           <Routes>
//             <Route path="/" element={<WelcomeText />} />
//             <Route path="/register" element={<RegistrationForm />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/play" element={<Play />} />
//             <Route path="/play/math" element={<Math />} />
//             <Route path="/play/swedish" element={<Swedish />} />
//             <Route path="/play/english" element={<English />} />
//             <Route path="/myprogress" element={<Progress />} />
//           </Routes>
//         </main>
//       </UserProvider>
//     </BrowserRouter>
//   );
// };
