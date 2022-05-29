import type { NextPage } from "next";
import { Suspense } from "react";
import { Profile } from "./component/Profile";

const Home: NextPage = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Profile />
    </Suspense>
  );
};

export default Home;
