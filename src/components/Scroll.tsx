import * as React from 'react';

type scrollProps = {
children: any
}
const Scroll = (props:scrollProps) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;