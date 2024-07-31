import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import UseEffect from "./components/useEffectHook/UseEffect";
import UseState from "./components/useStateHook/UseState";
import UseContextHook from "./components/useContextHook/UseContextHook";
import UseReducer from "./components/useReducer/UseReducer";
import UseRefHook from "./components/useRefHook/UseRefHook";
import UseLayoutEffectHook from "./components/useLayoutEffectHook/UseLayoutEffectHook";
import UseMemoHook from "./components/useMemoHook/UseMemoHook";
import UseCallBackHook from "./components/useCallBackHook/UseCallBackHook";
import DomManipulation from "./components/useRefHook/DomManipulation";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/usecontext" element={<UseContextHook />} />
        <Route path="/usereducer" element={<UseReducer />} />
        <Route path="/useref" element={<UseRefHook />} />
        <Route path="/dommanipulation" element={<DomManipulation />} />
        <Route path="/uselayouteffect" element={<UseLayoutEffectHook />} />
        <Route path="/usememo" element={<UseMemoHook />} />
        <Route path="/usecallback" element={<UseCallBackHook />} />
      </Routes>
    </Router>
  );
}

export default App;
