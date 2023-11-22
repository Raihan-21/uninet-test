import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const SectionTitle = ({
  title,
  withButton = false,
  buttonText,
  buttonTextColor,
  buttonColor,
  onButtonClick,
}: {
  title: string;
  withButton?: boolean;
  buttonText?: string;
  buttonTextColor?: string;
  buttonColor?: string;
  onButtonClick?: () => void;
}) => {
  return (
    <Flex justifyContent={"space-between"} width={"100%"} marginBottom={5}>
      <Text fontWeight={"bold"} fontSize={"x-large"}>
        {title}
      </Text>
      {withButton && (
        <Button
          onClick={onButtonClick}
          background={buttonColor}
          color={buttonTextColor}
        >
          {buttonText}
        </Button>
      )}
    </Flex>
  );
};

export default SectionTitle;
