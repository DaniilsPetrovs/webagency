import React from "react";
import Layout from "@/components/layout/Layout";
import HomeOneBanner from "@/components/layout/banner/HomeOneBanner";
import Agency from "@/components/containers/home/Agency";
import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeOffer from "@/components/containers/home/HomeOffer";
import ResponsiveBanner from "@/components/layout/banner/ResponsiveBanner";

import NextPage from "@/components/containers/home/NextPage";

const Home = () => {
    return (
        <Layout header={1} footer={5} video={true}>
            {/*<HomeOneBanner/>*/}
            <ResponsiveBanner/>
            <Agency/>
            <PortfolioText/>
            <HomeOffer/>
            <NextPage/>
        </Layout>
    );
};

export default Home;
