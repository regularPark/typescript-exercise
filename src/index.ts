const count: number = 1;
const text: string[] = ["1"];

function welcome(name: string) {
  return `안녕하세요 ${name}`;
}

// 객체 interface vs type vs 일반객체

type Crew = {
  name: string;
  daily: string;
};

// Union

interface Coach {
  name: "공원" | "크론" | "준" | "왼손";
}

const crew: Crew = {
  name: "lego",
  daily: "pair",
};

const coach1: Coach = {
  name: "준",
};
