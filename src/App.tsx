// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import MyClass from './pages/my-class'
import ClassChapter from './pages/class-chapter'
import ClassMaterial from './components/organisms/material'
import ClassAllTask from './components/organisms/all-task'

function App() {

  return (
    <Routes>
      {/* <Route path='/' element={<Student />} /> */}
      {/* <Route path="/" element={<Navigate to="student" />}>
        <Route path="student" element={<Student />} />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Route> */}
      <Route path="/" element={<Navigate to="my-class" />} />
      <Route path="my-class" element={<MyClass />} />
      <Route path="my-class/:id" element={<ClassChapter />}>
        <Route path="material" element={<ClassMaterial />} />
        <Route path="all-task" element={<ClassAllTask />} />
      </Route>
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  )
}

export default App
