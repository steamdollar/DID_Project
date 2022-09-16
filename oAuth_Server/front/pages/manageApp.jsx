import {
  Box,
  Flex,
  Text,
  Divider,
  Spinner,
  useDisclosure,
  Center,
  FormLabel,
  Button,
  FormControl,
  FormHelperText,
  Radio,
  Stack,
  Input,
  Select,
  RadioGroup,
  useTagStyles,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { backend, frontend } from "../utils/ip.js";
import { getCookie } from "cookies-next";
import crypto from "crypto";
import AppModal from "../components/appModal.jsx";
import { deleteCookie } from "cookies-next";
import Link from "next/link";

const manageApp = ({ appList, hashId, email }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [myAppList, setmyAppList] = useState(appList);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [addr, setAddr] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [pwCheck, setPwCheck] = useState(false); //뒤에 비밀번호 수정
  const [pwdCheck, setPwdCheck] = useState(""); //첫번째 비밀번호입력란
  const [loading, setLoading] = useState(true); //로딩바

  const showAppList = myAppList?.map((v, k) => {
    return (
      <Box p="5%" key={k} fontSize="110%">
        <Flex justifyContent={"space-around"}>
          <Text px="5%">
            <Link href={`/appinfo?appName=${v.appName}&RestAPI=${v.restAPI}`}>
              {v.appName}
            </Link>
          </Text>
        </Flex>
      </Box>
    );
  });

  const getMyApp = async () => {
    const response = await axios.post(`${backend}/oauth/app/getMyApp`, {
      email: email,
    });

    setmyAppList(response.data.myapp);
  };

  useEffect(() => {}, [isOpen]);

  const closeAndUpdate = () => {
    onClose();
    getMyApp();
  };

  return (
    <Box bg="#160627" h="100%">
      <Center w="100%" pt="5%" px="5%" h="100%">
        <Box w="40%" h="100%" mx="auto" pt="5rem">
          <Flex mx="auto" my="0" justifyContent={"center"} mb="10%">
            <Box w="40%" mx="auto" my="0">
              <Text
                textAlign={"center"}
                fontSize={"175%"}
                mb="1.25rem"
                color={"white"}
              >
                어플리케이션 등록
              </Text>
              <Flex justifyContent={"center"}>
                <Button onClick={onOpen} color="white" variant="outline">
                  어플리케이션 생성
                </Button>
                <AppModal
                  isOpen={isOpen}
                  onClose={closeAndUpdate}
                  email={email}
                  display="block"
                />
              </Flex>
            </Box>
          </Flex>

          <Divider />

          <Flex>
            <Box mx="auto" my="3%" justifyContent={"center"}>
              <Text fontSize={"180%"} color={"white"}>
                내 어플리케이션
              </Text>
              <Box color={"white"}>{showAppList}</Box>
            </Box>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};

export const getServerSideProps = async (ctx) => {
  const cookie = ctx.req ? ctx.req.headers.cookie : "";
  const encodedCookie = cookie.split(";");

  let cookieNeeded;

  for (let i = 0; i < encodedCookie.length; i++) {
    const tokenName = encodedCookie[i].split("=");
    if (tokenName[0].trim() == "user") {
      cookieNeeded = tokenName;
    }
  }

  const email = JSON.parse(
    Buffer.from(cookieNeeded[1], "base64").toString("utf-8")
  ).email;

  const response = await axios.post(`${backend}/oauth/app/getMyApp`, {
    email: email,
  });

  return { props: { appList: response.data.myapp } };
};

export default manageApp;
