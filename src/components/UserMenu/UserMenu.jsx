import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { getUserName } from 'redux/auth/selectors';
import { Button, Name } from './UserMenu.styled';
import { TbLogout } from 'react-icons/tb';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div>
      <Name>Welcome, {name}</Name>
      <Button type="button" onClick={() => dispatch(logOut())}>
        <TbLogout size="30" />
      </Button>
    </div>
  );
};

export default UserMenu;
