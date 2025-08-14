import Header from "@/components/header";
import { Footer } from "@/components/footer";
import AuthHanlder from "@/handlers/auth-handler";
import { Outlet } from "react-router-dom";


export const  PublicLayout = () => {
  return (
    <div className="w-full">
        {/*handler to store user data*/}
        <AuthHanlder />
        <Header />


        <Outlet />

        
        <Footer />
    </div>
  );
};
