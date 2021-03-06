import * as React from 'react';
import * as s from './Preview.styles';

const UI: React.FC<{
  content: string
  loading: boolean
}> = ({
  content,
  loading
}) => {

  return (
    <s.Container>
      {!content &&
        <s.EmptyState>
          {loading && 'Loading'}
          {!loading && `Looks like this repo doesn't have a Readme`}
        </s.EmptyState>
      }

      {content && !loading && <div dangerouslySetInnerHTML={{__html: content}} />}
    </s.Container>
  );
};
export default UI;
