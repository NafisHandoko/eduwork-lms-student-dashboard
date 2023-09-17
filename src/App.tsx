// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import MyClass from './pages/my-class'
import ClassChapter from './pages/class-chapter'
import ClassAllTask from './components/organisms/all-task'
import ClassMaterial from './components/organisms/material'
import MainMaterial from './components/organisms/material/main-material'
import { OtherMaterial, OtherMaterial2 } from './components/organisms/material/other-material'
import Task from './components/organisms/material/task'
import Forum from './components/organisms/material/forum'
import Complain from './components/organisms/material/complain'
import Mentor from './components/organisms/material/mentor'
import Splash from './components/organisms/splash'
import Reviews from './components/organisms/material/reviews'
import Error404 from './pages/error-404'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="my-class" />} />
      <Route path="my-class" element={<MyClass />} />
      <Route path="my-class/:id" element={<ClassChapter />}>
        <Route path="material" element={<ClassMaterial />}>
          <Route path="main" element={<MainMaterial />} />
          <Route path="other" element={<OtherMaterial />} />
          <Route path="task" element={<Task />} />
          <Route path="mentor" element={<Mentor />} />
          <Route path="forum" element={<Forum />} />
          <Route path="complain" element={<Complain />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="all-task" element={<ClassAllTask />} />
      </Route>
      <Route path="splash" element={<Splash />} />
      <Route path="error404" element={<Error404 />} />
      <Route
        path="*"
        element={<Navigate to="error404" />}
      />
    </Routes>
  )
}

export default App
