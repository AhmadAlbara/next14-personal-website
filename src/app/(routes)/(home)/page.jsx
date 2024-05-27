import PageTitle from "@/components/elements/PageTitle";
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Stacks from "./Stacks";

const Page = () => {
  return (
    <div className="p-8">
      <PageTitle title="Home" description="Introduction my Journey." />
      <Header />
      <Hero />
      <Stacks />
    </div>
  );
};

export default Page;
