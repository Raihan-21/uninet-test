import BlankLayout from "@/components/templates/blank";
import { setIsLoggedIn, setToken } from "@/store/auth";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { ReactElement, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

const register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const submitForm = useCallback(
    async (e: any) => {
      e.preventDefault();
      try {
        const res = await axios.post(
          "https://reqres.in/api/register",
          formData
        );
        dispatch(setIsLoggedIn(true));
        dispatch(setToken(res.data.token));
        router.push("/");
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
        </Box>
      </Flex>
    </Box>
  );
};

register.Layout = (page: ReactElement) => <BlankLayout>{page}</BlankLayout>;

export default register;
