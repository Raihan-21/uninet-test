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
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { ReactElement, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

const Register = () => {
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
    <Box height={"100vh"}>
      <Flex justifyContent={"center"} alignItems={"center"} height={"100%"}>
        <Box
          borderRadius={10}
          border={"1px solid black"}
          padding={5}
          minWidth={"330px"}
        >
          <Text fontWeight={"bold"} fontSize={20} marginBottom={6}>
            Register
          </Text>
          <form onSubmit={submitForm}>
            <VStack spacing={5}>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
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
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      password: e.target.value,
                    }))
                  }
                />
              </FormControl>
            </VStack>
            <Button
              type="submit"
              backgroundColor={"darkcyan"}
              color={"white"}
              marginTop={4}
            >
              Register
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

Register.Layout = function Layout(page: ReactElement) {
  <BlankLayout>{page}</BlankLayout>;
};

export default Register;
