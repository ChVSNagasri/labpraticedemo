import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import UserRegisration from './UserRegisration'
import AdminLogin from './AdminLogin'
import AdminDashBoard from './AdminDashBoard'
import ApiData from './ApiData'
import RegisteredUsers from './RegisteredUsers'

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<UserRegisration/>}/>
        <Route path="/admlog" element={<AdminLogin/>}/>
        <Route path="/admin" element={<AdminDashBoard/>}/>
        <Route path="/api" element={<ApiData/>}/>
        <Route path="/registers" element={<RegisteredUsers/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App