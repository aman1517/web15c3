
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
// // import { ProtectedRoute } from "./components/PrivateRoute";
// import { Navbar } from "./components/Navbar";
// import { Logout } from "./components/Logout";

function App() {
  return (
    <div className="App">
    <Home/>
    <EmployeeList/>
    <Login/>
    <Admin/>
    {/* <Logout/> 

    
      <Navbar /> */}
   
    </div>
  );
  
}

export default App;
