// [ Literal Types ]

const userName1 = 'Bob'; // type: "Bob" : 문자열 리터럴 타입
let userName2: string | number = 'Tom';

type Job = 'police' | 'developer' | 'teacher';

interface User {
  name: string;
  job: Job;
}

const user: User = {
  name: 'Bob',
  job: 'developer',
};

interface HighSchoolStudent {
  name: number | string;
  grade: 1 | 2 | 3;
}
