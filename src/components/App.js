import video from "../data/video.js";
import '../../src/index.css';
import Video from "./Video.js";
import VideoList from "./VideoList.js";

function App(props) {

  return (
    <div className="App">
      <VideoList video={video} />
    </div>
  );
}

export default App;
