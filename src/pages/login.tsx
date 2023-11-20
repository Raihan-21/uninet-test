import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

const login = () => {
  return (
    <Box minHeight={"100vh"}>
      <Flex justifyContent={"center"} alignItems={"center"} height={"100%"}>
        <Box borderRadius={10} border={"1px solid black"} height={"100%"}>
          <Text fontWeight={"bold"} padding={10}>
            Login
          </Text>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input />
          </FormControl>
        </Box>
      </Flex>
    </Box>
  );
};

export default login;
