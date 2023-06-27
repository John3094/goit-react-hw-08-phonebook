import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { NavContainer, AppContainer, BodyContainer } from './AppBar.styled';
import { Menu } from 'components/Menu/Menu';
import { Triangle } from 'react-loader-spinner';

const AppBar = () => {
  return (
    <AppContainer>
      <NavContainer>
        <Menu />
      </NavContainer>
      <BodyContainer>
        <Suspense
          fallback={<Triangle height="100" width="100" color="#FF99B3" />}
        >
          <Outlet />
        </Suspense>
      </BodyContainer>
    </AppContainer>
  );
};

export default AppBar;
