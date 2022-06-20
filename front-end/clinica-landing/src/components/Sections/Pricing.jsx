import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Nossos Planos</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                
                price="R$ 29,99"
                title="Individual"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                offers={[
                  { name: "Benefício 1", cheked: true },
                  { name: "Benefício 2", cheked: true },
                  { name: "Benefício 3", cheked: false },
                  { name: "Benefício 4", cheked: false },
                  { name: "Benefício 5", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                
                price="R$ 49,99"
                title="Duplo"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                offers={[
                  { name: "Benefício 1", cheked: true },
                  { name: "Benefício 2", cheked: true },
                  { name: "Benefício 3", cheked: true },
                  { name: "Benefício 4", cheked: true },
                  { name: "Benefício 5", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                
                price="R$ 79,99"
                title="Família"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                offers={[
                  { name: "Benefício 1", cheked: true },
                  { name: "Benefício 2", cheked: true },
                  { name: "Benefício 3", cheked: true },
                  { name: "Benefício 4", cheked: true },
                  { name: "Benefício 5", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




