import SectionTitle from "@/components/molecules/SectionTitle";
import {
  Box,
  Button,
  Card,
  Collapse,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useCallback, useState } from "react";

import { FaChevronUp } from "react-icons/fa";

import { motion } from "framer-motion";

const Bills = () => {
  const [datas, setDatas] = useState({
    status: 1,
    message: "Sukses",
    data: {
      system_message: "SUCCESS",
      response: {
        additionaldata: {},
        billdetails: [
          {
            adminfee: "0.0",
            billid: "8",
            currency: "360",
            title: "TELKOMSEL 50rb - 50.149",
            totalamount: "50149.00",
            descriptions: null,
            body: {
              DENOM: 50000,
            },
          },
          {
            adminfee: "0.0",
            billid: "9",
            currency: "360",
            title: "TELKOMSEL 75rb - 74.050",
            totalamount: "74050.00",
            descriptions: null,
            body: {
              DENOM: 75000,
            },
          },
          {
            adminfee: "0.0",
            billid: "10",
            currency: "360",
            title: "TELKOMSEL 100rb - 96.264",
            totalamount: "96264.00",
            descriptions: null,
            body: {
              DENOM: 100000,
            },
          },
          {
            adminfee: "0.0",
            billid: "11",
            currency: "360",
            title: "TELKOMSEL 150rb - 146.600",
            totalamount: "146600.00",
            descriptions: null,
            body: {
              DENOM: 150000,
            },
          },
          {
            adminfee: "0.0",
            billid: "12",
            currency: "360",
            title: "TELKOMSEL 200rb - 194.900",
            totalamount: "194900.00",
            descriptions: null,
            body: {
              DENOM: 200000,
            },
          },
        ],
        billername: "PULSA TSEL",
        inquiryid: "27190993",
        paymenttype: "CLOSE_PAYMENT",
        responsecode: "0000",
        responsemsg: "SUCCESS",
        subscriberid: "081311529594",
        subscribername: "",
      },
    },
  });
  const [filteredData, setFilteredData] = useState(datas);
  const [isExpanded, setIsExpanded] = useState(false);
  const [denom, setDenom] = useState(0);
  const { isOpen, onToggle } = useDisclosure();
  const filterData = useCallback(() => {
    setFilteredData({
      ...datas,
      data: {
        ...datas.data,
        response: {
          ...datas.data.response,
          billdetails: datas.data.response.billdetails.filter(
            (bill) => bill.body.DENOM >= denom
          ),
        },
      },
    });
  }, [datas, denom]);
  return (
    <Box marginTop={10} paddingX={{ base: 10, sm: 20 }} paddingBottom={10}>
      <SectionTitle title="Bills" />
      <Box marginBottom={5}>
        <Button variant={"nostyle"} onClick={onToggle}>
          <Flex columnGap={2} alignItems={"center"}>
            Detail:{" "}
            <motion.div animate={{ rotateZ: isOpen ? 180 : 0 }}>
              <FaChevronUp />
            </motion.div>
          </Flex>
        </Button>
        <Collapse in={isOpen}>
          <Text>Inquiry ID: {datas.data.response.inquiryid}</Text>
          <Text>Billername: {datas.data.response.billername}</Text>
          <Text>Subscriber ID: {datas.data.response.subscriberid}</Text>
        </Collapse>
      </Box>
      <Flex alignItems={"end"} columnGap={5} marginBottom={5}>
        <FormControl>
          <FormLabel>Filter by DENOM</FormLabel>
          <Input
            type="number"
            value={denom}
            onChange={(e) => setDenom(Number(e.target.value))}
          />
        </FormControl>
        <Button onClick={filterData}>Filter</Button>
      </Flex>
      <Box overflowX={"auto"}>
        <Table>
          <Thead backgroundColor={"darkcyan"} color={"white"}>
            <Tr>
              <Th color={"white"}>ID</Th>
              <Th color={"white"}>Title</Th>
              <Th color={"white"}>Description</Th>
              <Th color={"white"}>Admin Fee</Th>
              <Th color={"white"}>Total Amount</Th>
              <Th color={"white"}>DENOM</Th>
            </Tr>
          </Thead>
          <Tbody>
            {" "}
            {filteredData.data.response.billdetails.map((bill, i) => (
              <Tr key={i}>
                <Td>{bill.billid}</Td>
                <Td>{bill.title}</Td>
                <Td>{bill.descriptions ?? "-"}</Td>
                <Td>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(Number(bill.adminfee))}
                </Td>
                <Td>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(Number(bill.totalamount))}
                </Td>
                <Td>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(Number(bill.body.DENOM))}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Bills;
