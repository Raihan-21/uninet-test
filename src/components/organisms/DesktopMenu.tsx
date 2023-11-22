import { Box, Flex, Link, Button } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { deleteCookie } from "cookies-next";
import { useDispatch } from "react-redux";
import { setIsLoggedIn, setToken } from "@/store/auth";
import { useRouter } from "next/router";
const DesktopMenu = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const logout = useCallback(() => {
    deleteCookie("uninet-token");
    dispatch(setIsLoggedIn(false));
    dispatch(setToken(""));
    router.push("/login");
  }, []);
  return (
    <>
      <Flex columnGap={5}>
        <Link href="/">Blog</Link>
        <Link href="/bills">Bills</Link>
      </Flex>
      <Button onClick={logout} backgroundColor={"red.600"} color={"white"}>
        Logout
      </Button>{" "}
    </>
  );
};

export default DesktopMenu;
