import { SunspotLoader } from "react-awesome-loaders";
export const Loader = () => {
    return (
        <>
            <SunspotLoader
                gradientColors={["#ED6C5D", "#E0E7FF"]}
                shadowColor={"#ED6C5D"}
                desktopSize={"128px"}
                mobileSize={"100px"}
            />
        </>
    );
};