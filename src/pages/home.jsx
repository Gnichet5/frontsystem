import Section1 from "../components/section1";
import Header from "../components/Header";
import { Typography } from "@mui/material";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";


function Home() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2/>
      <Section3/>
    </div>
  );
}

export default Home;
