import React from 'react';
import { Progress, Level, Heading, Title } from 'reactbulma';

const Header = ({ totalIncomplete }) => (
  <div>
    <Progress primary value="30" max="100">30%</Progress>
    <Level>
      <Level.Item hasTextCentered>
        <div>
          <Heading>To Do</Heading>
          <Title>{ totalIncomplete }</Title>
        </div>
      </Level.Item>
    </Level>
  </div>
)

export default Header;
