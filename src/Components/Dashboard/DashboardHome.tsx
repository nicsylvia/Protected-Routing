import React from "react";
import styled from "styled-components";

const DashboardHome = () => {
  return (
    <div>
      <Container>DashboardHome</Container>
    </div>
  );
};

export default DashboardHome;

const Container = styled.div`
  width: calc(100% - 250px);
  min-height: 100vh;
  background-color: yellow;
`;
