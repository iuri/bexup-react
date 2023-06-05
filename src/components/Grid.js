import React from 'react';


import styled from 'styled-components';
import Item from './Item'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Adjust the number of columns as needed
  grid-gap: 16px; // Adjust the gap between grid items as needed
`;

const GridItem = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
`;



const Grid = ({ data }) => {
    console.log('data', data);
  return (
    <GridContainer>
      {data.map((item, index) => (
        <GridItem key={index}>
            <Item key={item.brand_code} code={item.brand_code} title={item.brand_title} />
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default Grid;
