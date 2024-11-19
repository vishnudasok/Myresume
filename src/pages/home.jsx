import React from 'react';
import HeroSection from '../../userpannel/hero';
import Process from '../../userpannel/process';
import MyPage from '../../userpannel/mypage';
import WhyChooseUs from '../../userpannel/feature';
import ResumeGallery from '../../userpannel/resumegallery';
import VideoSection from '../../userpannel/videosection';
import DidYouKnow from '../../userpannel/didyouknow';
import FAQSection from '../../userpannel/faqsection';

const Home = () => {
    return (
        <div>
           <HeroSection />
            <Process />
            <MyPage />
            <WhyChooseUs />
            <ResumeGallery />
            <VideoSection />
            <DidYouKnow />
            <FAQSection />
        </div>
    );
}

export default Home;
