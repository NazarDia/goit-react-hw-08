import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetAuthError } from '../../redux/auth/slice';
import css from './AuthNav.module.css';

export default function AuthNav() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(resetAuthError());
  }

  return (
    <div>
      <NavLink className={css.navItem} to="/register" onClick={handleClick}>
        Register
      </NavLink>
      <NavLink className={css.navItem} to="/login" onClick={handleClick}>
        Log In
      </NavLink>
    </div>
  );
}
