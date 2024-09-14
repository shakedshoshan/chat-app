import { Navigate, Route, Routes } from "react-router-dom";
//import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
// import { Toaster } from "react-hot-toast";
// import { useAuthContext } from "./context/AuthContext";

function App() {
	return (
		<div className='p-4 h-screen flex items-center justify-center'>
			{/* <Login />
      <SignUp /> */}
      <Home />
		</div>
	);
}

export default App;