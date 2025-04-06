import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Header from "./component/Header/header";
import Footer from "./component/Footer/footer";
import SignIn from "./component/LoginSignup/SignIn";
import SignUp from "./component/LoginSignup/SignUp";
import 'bootstrap-icons/font/bootstrap-icons.css';


const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Header />
      
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/" element={
          <>
            <SignedIn>
              <Home />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        } />
      </Routes>
      
      <Footer />
    </ClerkProvider>
  );
}

export default App;
