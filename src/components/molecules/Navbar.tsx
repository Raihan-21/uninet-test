import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { deleteCookie } from "cookies-next";
import { useDispatch } from "react-redux";
import { setIsLoggedIn, setToken } from "@/store/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import MobileMenu from "../organisms/MobileMenu";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 400);

  const logout = useCallback(() => {
    deleteCookie("uninet-token");
    dispatch(setIsLoggedIn(false));
    dispatch(setToken(""));
    router.push("/login");
  }, []);
  const updateMedia = () => {
    setIsMobile(window.innerWidth < 400);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <Box padding={5}>
      <Flex justifyContent={"space-between"}>
        <Text fontWeight={"bold"}>Uninet Media Sakti</Text>
        {isMobile ? (
          <MobileMenu />
        ) : (
          <>
            <Flex columnGap={5}>
              <Link href="/">Blog</Link>
              <Link href="/bills">Bills</Link>
            </Flex>
            <Button onClick={logout}>Logout</Button>{" "}
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
