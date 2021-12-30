import { Topbar } from "./components/molecules";
import Home from "./components/pages/home/home.component";

export function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
