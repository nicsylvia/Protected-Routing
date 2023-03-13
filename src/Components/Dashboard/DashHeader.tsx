import React from "react";
import styled from "styled-components";
import DashSideBoard from "./DashSideBoard";

const DashHeader = () => {
  return (
    <div>
      <Head>Dashboard Header</Head>
      <Side>
        <DashSideBoard />
      </Side>
    </div>
  );
};

export default DashHeader;

const Head = styled.div`
  height: 60px;
  width: 100%;
  background-color: black;
  color: white;
`;
const Side = styled.div``;
