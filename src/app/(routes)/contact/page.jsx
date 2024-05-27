import PageTitle from "@/components/elements/PageTitle";
import React from "react";
import EmailFrom from "./EmailFrom";
import SocialMediaLinks from "./SocialMediaLinks";

const Contact = () => {
  return (
    <div className="p-8 ">
      <PageTitle title="Contact" description="Reach me out." />
      <SocialMediaLinks />
      <EmailFrom />
    </div>
  );
};

export default Contact;
