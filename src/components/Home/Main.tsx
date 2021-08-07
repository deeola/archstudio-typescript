import React, { FC } from "react";
import Featured from "./Featured";
import SmallTeams from "./SmallTeams";
import Welcome from "./Welcome";

interface Props {}

const Main: FC<Props> = () => {
  return (
    <main>
      <Welcome />
      <SmallTeams />
      <Featured />
    </main>
  );
};

export default Main;
