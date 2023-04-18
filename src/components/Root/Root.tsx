import React from 'react';

import styled from 'styled-components/native';
import AirfieldConditions from '../AirfieldConditions/AirfieldConditions';
import FieldDirections from '../FieldDirections/FieldDirections';

const Root = () => {
  return (
    <RootWrapper>
      <Scrollable>
        <Title>Cen-Tex Modelers</Title>
        <AirfieldConditions />
        <FieldDirections />
      </Scrollable>
    </RootWrapper>
  );
};

export default Root;

const RootWrapper = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: #48484a;
  align-items: center;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  color: white;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 16px;
  color: white;
`;

export const Scrollable = styled.ScrollView`
  width: 100%;
`;
