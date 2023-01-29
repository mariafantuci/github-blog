import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Post" element={<Post />} />
        </Route>
    </Routes>
  )
}
