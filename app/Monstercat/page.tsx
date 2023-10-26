import MonsterCatBackground from "./monsterCatBackground";
import MonsterCatEndSection from "./monsterCatEndSection";
import MonsterCatFooter from "./monsterCatFooter";
import MonsterCatIntroPlayer from "./monsterCatIntroPlayer";
import MonsterCatLogo from "./monsterCatLogo";
import MonsterCatMusicVideo from "./monsterCatMusicVideo";
import MonsterCatSideNavbar from "./monsterCatSideNavbar";
import MonsterCatSidebarExtended from "./monsterCatSidebarExtended";
import MonstercatStreaming from "./monsterCatStreaming";



export default function MonsterCatPage() {
    return (
        <div id="main" className="h-full w-full relative bg-black overflow-x-hidden" >
            <MonsterCatBackground />
            <MonsterCatLogo />
            <MonsterCatSideNavbar />
            <MonsterCatIntroPlayer />
            <div id='trigger' className="absolute top-24 left-0"></div>
            <MonstercatStreaming />
            <MonsterCatSideNavbar />
            <MonsterCatSidebarExtended />
            <MonsterCatMusicVideo />
            <MonsterCatEndSection />
            <MonsterCatFooter />
        </div>
    )
}