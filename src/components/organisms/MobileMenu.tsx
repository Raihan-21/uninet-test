import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link,
  Button,
  Text,
} from "@chakra-ui/react";
import React, { useCallback } from "react";

import { deleteCookie } from "cookies-next";
import { setIsLoggedIn, setToken } from "@/store/auth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { MdOutlineMenu } from "react-icons/md";
const MobileMenu = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const logout = useCallback(() => {
    deleteCookie("uninet-token");
    dispatch(setIsLoggedIn(false));
    dispatch(setToken(""));
    router.push("/login");
  }, []);
  return (
    <Box>
      <Menu>
        <MenuButton>
          <MdOutlineMenu />
        </MenuButton>
        <MenuList>
          <Link href="/">
            <MenuItem>Blog</MenuItem>
          </Link>
          <Link href="/bills">
            <MenuItem>Bills</MenuItem>
          </Link>
          <MenuItem onClick={logout}>
            <Box>
              <Text color={"red"}>Logout</Text>
            </Box>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MobileMenu;
