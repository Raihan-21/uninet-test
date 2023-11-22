import { setIsLoggedIn, setToken } from "@/store/auth";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { ReactElement, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BlankLayout from "@/components/templates/blank";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import Link from "next/link";

const Login = () => {
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
      } catch (error: any) {
        toast({ title: error.response.data.error, status: "error" });
        // throw error;
      }
    },
    [formData]
  );
  return (
    <Box height={"100vh"}>
      <Flex justifyContent={"center"} alignItems={"center"} height={"100%"}>
        <Box
          borderRadius={10}
          border={"1px solid black"}
          padding={5}
          minWidth={"330px"}
        >
          <Text fontWeight={"bold"} fontSize={20} marginBottom={6}>
            Login
          </Text>
          <form onSubmit={submitForm}>
            <VStack spacing={5}>
              <FormControl isRequired>
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
              <FormControl isRequired>
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
                <Button
                  type="submit"
                  backgroundColor={"darkcyan"}
                  color={"white"}
                  marginTop={4}
                >
                  Login
                </Button>
              </FormControl>
            </VStack>
          </form>
          <Box marginTop={3}>
            <Text>Don't have an account yet? Register </Text>
            <Link href="/register">
              <Text color={"blue"} textDecoration={"underline"}>
                Here
              </Text>
            </Link>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
Login.Layout = (page: ReactElement) => {
  return <BlankLayout>{page}</BlankLayout>;
};

export default Login;
