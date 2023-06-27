import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublickRoute';
import { Suspense } from 'react';
import { Container } from './AppStyled';
import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { Triangle } from 'react-loader-spinner';

const AppBar = lazy(() => import('components/AppBar/AppBar'));
const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container>
      <Suspense
        fallback={<Triangle height="100" width="100" color="#FF99B3" />}
      >
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<Home />} />
            <Route
              element={<PublicRoute redirectPath="/contacts" restricted />}
            >
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<PrivateRoute redirectPath="/" />}>
              <Route path="/contacts" element={<Contacts />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
