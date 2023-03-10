/* eslint-disable prettier/prettier */
import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/Index'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Post" element={<Post />} />
      </Route>
    </Routes>
  )
}
