import * as React from 'react';
import Card from './Card';

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

type CardListProps = {
  robots: Array<IRobot>;
  
 }



const CardList = ({ robots }:CardListProps) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;