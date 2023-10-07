// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import MyClass from './pages/my-class'
import ClassChapter from './pages/class-chapter'
import ClassAllTask from './components/organisms/all-task'
import ClassMaterial from './components/organisms/material'
import MainMaterial from './components/organisms/material/main-material'
// import { OtherMaterial2 } from './components/organisms/material/other-material'
import { OtherMaterial } from './components/organisms/material/other-material'
import Task from './components/organisms/material/task'
import Forum from './components/organisms/material/forum'
import Complain from './components/organisms/material/complain'
import Mentor from './components/organisms/material/mentor'
import Splash from './components/organisms/splash'
import Reviews from './components/organisms/material/reviews'
import Error404 from './pages/error-404'
import AuthTest from './pages/auth-test'
import { useGetAllClassesQuery } from './api/classApi'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setClassState } from './store/classSlice'

function App() {
  const { isLoading, isError, error, data: fetchedClassData } = useGetAllClassesQuery()
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchedClassData) {
      dispatch(setClassState(fetchedClassData.data.class));
    }
  }, [fetchedClassData, dispatch]);

  return (
    <>
      <Splash />
      <Routes>
        <Route path="/" element={<Navigate to="my-class" />} />
        <Route path="my-class" element={<MyClass />} />
        <Route path="my-class/:classId" element={<ClassChapter />}>
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
        <Route path="auth-test" element={<AuthTest />} />
        <Route
          path="*"
          element={<Navigate to="error404" />}
        />
      </Routes>
    </>
  )
}

export default App
