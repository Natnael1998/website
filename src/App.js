import {Routes,Route} from "react-router-dom"
import OverView from "./components/OverView";
import SideBar from "./components/SideBar";
import Tickets from "./components/Tickets";
import {
  collection,
  setDoc,
  doc,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import Login from "./pages/Login";
import { AuthContextProvider } from "./context/AuthContext";
import SignUp from "./pages/SignUp";
import Home from "./home";
import Mid from "./mid";
import Add from "./add";
import Final from "./final"
import Average from "./avg";
import Video from "./video";
import Room from "./Room";
import PostAssigment from "./assignment";
import Resource from "./resource";
import Attendance from "./attendance";
function App() {
  

  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/mid/:midid" element={<Mid />} />
          <Route path="/attendance/:attendanceid" element={<Attendance/>} />
          <Route path="/average/:overviewid" element={<Average />} />
          <Route path="/source/:overviewid" element={<Resource />} />
          <Route path="/final/:finalid" element={<Final />} />
          <Route path="/post/:postid" element={<PostAssigment />} />
          <Route path="/video/:overviewid" element={<Video />} />
          <Route path="/room/:roomid" element={<Room />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/overview/:overviewid" element={<OverView />} />
          <Route path="/add/:addid" element={<Add />} />
          <Route path="/tickets/:ticketsid" element={<Tickets />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
