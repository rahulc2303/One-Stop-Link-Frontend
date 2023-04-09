import './App.css';
import { Route, Routes } from 'react-router-dom';
import CreatePage from './screens/CreatePage/CreatePage';
import EditPage from './screens/EditPage/EditPage';
import Home from './screens/Home/Home';
import NotFound from './screens/NotFound/NotFound';
import Page from './screens/Page/Page';
import SelectPage from './screens/SelectPage/SelectPage';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './redux/action/auth.action';
import { getAllPageListAction } from './redux/action/page.action';
import { useEffect } from 'react';
import AuthRouting from './AuthRouting';


function App() {


  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getAllPageListAction());
    }
  }, [auth.authenticate]);




  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-new-page"
          element={
            <>
              <CreatePage />
              <AuthRouting />
            </>
          }
        />
        <Route path="/select-page"
          element={
            <>
              <SelectPage />
              <AuthRouting />
            </>
          }
        />
        <Route path="/select-page/:pageUrl"
          element={
            <>
              <EditPage />
              <AuthRouting />
            </>
          }
        />
        <Route path="/:pageUrl" element={<Page />}
        />
        <Route path="*" element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default App;
