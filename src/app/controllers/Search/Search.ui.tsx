import * as React from 'react';
import * as s from './Search.styles';
import { Input, List } from './controllers';
import { SearchErrorBoundary } from './catchers';

const UI: React.FC<{

}> = ({

}) => {


  return (
    <s.Container>
      <SearchErrorBoundary>
        <Input />
        <List />
      </SearchErrorBoundary>
    </s.Container>
  );
};
export default UI;
