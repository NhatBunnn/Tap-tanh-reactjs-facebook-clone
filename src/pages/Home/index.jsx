import Story from "./components/Story";
import CreatePost from "./components/CreatePost";
import HomeSidebarLeft from "./components/HomeSidebarLeft";
import HomeSidebarRight from "./components/HomeSidebarRight";

function Home() {
  return (
    <div>
      <CreatePost />
      <Story />
      <HomeSidebarLeft />
      <HomeSidebarRight />
    </div>
  );
}

export default Home;
