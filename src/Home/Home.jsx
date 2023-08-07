import React from "react";
import Banner from "../Sections/Benner/Banner";
import Redux from "../Sections/Redux/Redux";
import Module from "../Sections/Module/Module";
import HowDosesWork from "../Sections/howDoeseWork/howDosesWork";
import WhatGet from "../Sections/WhatGet/WhatGet";
import JobRequermention from "../Sections/JobRequermention/JobRequermention";
import WhatKnow from "../Sections/WhatKnow/WhatKnow";
import FAQ from "../Sections/FAQ/FAQ";
import Support from "../Sections/Support/Support";
import Writer from "../Sections/Writer/Writer";
import ArrowToUp from "../Components/ArrowToUp";

const Home = () => {
  return (
    <div className="dark:bg-[#0b1324] overflow-hidden">
      <Banner></Banner>
      <div className="lg:mx-16 sm:mx-5">
        <Redux></Redux>
        <ArrowToUp></ArrowToUp>
        <Module></Module>
        {/* <Project></Project> */}
        <HowDosesWork></HowDosesWork>
        <WhatGet></WhatGet>
        <JobRequermention></JobRequermention>
        <WhatKnow></WhatKnow>
        <Support></Support>
        <FAQ></FAQ>
        <Writer></Writer>
      </div>
    </div>
  );
};

export default Home;
