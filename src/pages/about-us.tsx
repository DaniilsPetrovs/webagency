import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Agency from "@/components/containers/home/Agency";
import HomeTwoAward from "@/components/containers/home-two/HomeTwoAward";

const AboutUs = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="About Us" navigation="About Us" />
      <Agency />
        <HomeTwoAward />
    </Layout>
  );
};

export default AboutUs;
