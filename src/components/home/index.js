import "../../index.css";
import LeftSideNavBar from "./leftSideBar";
import RightSideContent from "./rightSideContent";

const Home = () => {
  return (
    <div className="container">
      <div style={{ display: "flex" }}>
        <LeftSideNavBar />
        <RightSideContent />
      </div>
    </div>
  );
};

export default Home;
