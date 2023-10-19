"use client";

import { Row } from "antd";
import errorImage from "@/assets/error.png"
import Image from "next/image";

const ErrorPage = () => {
  return (
    <div>
    <Row
     justify="center"
     align="middle"
     style={{
       height: "100vh",
       backgroundColor: "white",
       color:"black"
     }}
   >
     <Image src={errorImage} width={500} height={500} alt="Error Image"/>
   </Row>
   </div>
  );
};

export default ErrorPage;