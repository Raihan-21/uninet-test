import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { deleteCookie } from "cookies-next";
import { useDispatch } from "react-redux";
import { setIsLoggedIn, setToken } from "@/store/auth";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const logout = useCallback(() => {
    deleteCookie("uninet-token");
    dispatch(setIsLoggedIn(false));
    dispatch(setToken(""));
    router.push("/login");
  }, []);
  return (
    <Box padding={5}>
      <Flex justifyContent={"space-between"}>
        <Text fontWeight={"bold"}>Uninet Media Sakti</Text>
        <Flex columnGap={5}>
          <Link href="/">Blog</Link>
          <Link href="/bills">Bills</Link>
        </Flex>
        <Button onClick={logout}>Logout</Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
