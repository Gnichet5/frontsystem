import Section1 from "../components/section1";
import Header from "../components/Header";
import { Typography } from "@mui/material";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";


function Home() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  );
}

export default Home;
