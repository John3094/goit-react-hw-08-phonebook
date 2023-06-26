import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { NavContainer, AppContainer, BodyContainer } from './AppBar.styled';
import { Menu } from 'components/Menu/Menu';
import { Loader } from 'components/Loader/Loader';

export const AppBar = () => {
  return (
    <AppContainer>
      <NavContainer>
        <Menu />
      </NavContainer>
      <BodyContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </BodyContainer>
    </AppContainer>
  );
};

export default AppBar;
