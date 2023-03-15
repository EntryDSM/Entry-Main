import send from "../assets/svgs/send.svg";
import calculator from "../assets/svgs/calculator.svg";
import developer from "../assets/svgs/developer.svg";
import book from "../assets/svgs/book.svg";

interface functionListType {
  icon: string;
  name: string;
}

export const functionList: functionListType[] = [
  { icon: send, name: "입학설명회 참석 예약" },
  { icon: calculator, name: "성적 산출" },
  { icon: book, name: "학교 소개" },
  { icon: developer, name: "Entry 개발자 소개" },
];
