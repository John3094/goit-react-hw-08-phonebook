import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/selectors';

export const Menu = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </>
    </nav>
  );
};
