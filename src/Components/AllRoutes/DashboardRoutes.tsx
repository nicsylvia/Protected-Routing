import React from "react";
import { useRoutes } from "react-router-dom";
import styled from "styled-components";
import DashboardHome from "../Dashboard/DashboardHome";
import DashHeader from "../Dashboard/DashHeader";

const DashboardRoutes = () => {
  let element = useRoutes([
    {
      path: "/dashboard",
      element: <DashboardHome />,
    },
  ]);

  return (
    <>
      <DashHeader />
      <Wrapper>{element}</Wrapper>
    </>
  );
};

export default DashboardRoutes;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
