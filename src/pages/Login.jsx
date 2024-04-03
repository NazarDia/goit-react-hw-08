import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import PageTitle from '../components/PageTitle/PageTitle';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError } from '../redux/auth/selectors';
import Error from '../components/Error/Error';
import { resetAuthError } from '../redux/auth/slice';
import css from './Login.module.css';

export default function Login() {
  const error = useSelector(selectAuthError);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(resetAuthError());
  }

  return (
    <div>
      <PageTitle>Log in</PageTitle>
      <LoginForm />
      {error && (
        <Error message="Something is wrong. Please, check credentials or try again later." />
      )}
      <p>
        <Link to="/register" onClick={handleClick} className={css.logBtn}>
          Or Register
        </Link>
      </p>
    </div>
  );
}
