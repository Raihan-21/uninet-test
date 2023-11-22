import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hasCookie, getCookie } from "cookies-next";
import { setIsLoggedIn, setToken } from "@/store/auth";
import Navbar from "../molecules/Navbar";

const DefaultLayout = ({ children }: { children: any }) => {
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const hasToken = hasCookie("uninet-token");
    const cookieToken = getCookie("uninet-token");
    if (hasToken) {
      dispatch(setIsLoggedIn(true));
      dispatch(setToken(cookieToken));
    } else {
      router.replace("/login");
    }

    setIsLoading(false);
  }, []);

  // const checkAuth = () => {
  //     if(!isLoggedIn) router.replace('/login')
  //     return
  // }
  return (
    <>
      {!isLoading && (
        <div>
          <Navbar />
          {children}
        </div>
      )}
    </>
  );
};

export default DefaultLayout;
