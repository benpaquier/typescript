import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Hero from "./pages/Hero"

const App = () :JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:slug" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
