
import HeroBanner from "../components/hero/HeroBanner";
import MidBanner from "../components/midbanner/MidBanner";
import Support from "../components/support/Support";
import SecondBanner from "../components/secondbanner/SecondBanner"
import Community from "../components/community/Community";
import NewsSlider from "../components/news/NewsSlider";
import CommunitySlider from "../components/community/CommunitySlider";


export default function Home() {
  return (
   <div>
    <HeroBanner />
    <MidBanner />
    <NewsSlider />
    <SecondBanner />
    <Support />
    <Community />
    <CommunitySlider />
   </div>
  )
}
