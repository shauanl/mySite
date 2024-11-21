import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav";
import AnimatedRoutes from "./components/AnimatedRoutes";
import './output.css'
import './App.css'

function App() {

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Nav />
        <main className="mt-16 w-full">
          <AnimatedRoutes />
        </main>
    </Router>
  )
}

export default App
