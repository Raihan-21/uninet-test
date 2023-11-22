import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import MobileMenu from "../organisms/MobileMenu";
import DesktopMenu from "../organisms/DesktopMenu";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 400);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 400);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <Box padding={5}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontWeight={"bold"}>Uninet Media Sakti</Text>
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </Flex>
    </Box>
  );
};

export default Navbar;
