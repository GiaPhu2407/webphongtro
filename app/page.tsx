import Image from "next/image";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Content from "./components/Content";
export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Content />
    </div>
  );
}
