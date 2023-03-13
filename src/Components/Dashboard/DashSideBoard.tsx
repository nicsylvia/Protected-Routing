import React from "react";
import styled from "styled-components";

const DashSideBoard = () => {
  return (
    <div>
      <Container>Dashboard Sidebar</Container>
    </div>
  );
};

export default DashSideBoard;

const Container = styled.div`
  height: 100vh;
  width: 250px;
  background-color: red;
  position: fixed;
`;
