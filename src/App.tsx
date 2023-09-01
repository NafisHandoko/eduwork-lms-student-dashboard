// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import MyClass from './pages/my-class'

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
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  )
}

export default App
