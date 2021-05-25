import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;

/*
const Greetings = React.FC<GreetingsProps> = () => null; 
[ React.FC ]
1. props에 children을 지정하지 않아도 자동으로 탑재되어 있음
2. props 기본값 설정 시 const Greetings = React.FC<GreetingsProps> = ({ mark = '!' }) => null; 와 같은 방법으로 설정 

[ function ]
1. props에 children 자동 탑재 X
2. props 기본값 설정 시 defaultProps 설정 가능
*/
