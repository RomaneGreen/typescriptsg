import * as React from 'react';

type ScrollProps = {
children: React.ReactNode
}

 const Scroll = (props:ScrollProps) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;