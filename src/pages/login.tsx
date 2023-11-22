import { setIsLoggedIn, setToken } from "@/store/auth";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { ReactElement, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BlankLayout from "@/components/templates/blank";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";

const login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const toast = useToast();

  const token = useSelector((state: any) => state.auth.token);
  const dispatch = useDispatch();
  const router = useRouter();

  const submitForm = useCallback(
    async (e: any) => {
      e.preventDefault();
      try {
        const res = await axios.post("https://reqres.in/api/login", formData);
        toast({ title: "Login success", status: "success" });
        dispatch(setIsLoggedIn(true));
        dispatch(setToken(res.data.token));
        setCookie("uninet-token", res.data.token);
        setTimeout(() => {
          router.push("/");
        }, 500);
      } catch (error) {
        throw error;
      }
    },
    [formData]
  );
  return (
    <Box minHeight={"100vh"}>
      <Flex justifyContent={"center"} alignItems={"center"} height={"100%"}>
        <Box borderRadius={10} border={"1px solid black"} height={"100%"}>
          <Text fontWeight={"bold"} padding={10}>
            Login
          </Text>
          <form onSubmit={submitForm}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                value={formData.email}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
              />
              <Button type="submit">Login</Button>
            </FormControl>
          </form>
          <Text>{token}</Text>
        </Box>
      </Flex>
    </Box>
  );
};
login.Layout = (page: ReactElement) => {
  return <BlankLayout>{page}</BlankLayout>;
};

export default login;
