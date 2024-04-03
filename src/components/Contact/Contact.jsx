import { FaPhone, FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './Contact.module.css';

export default function Contact({ item }) {
  const dispatch = useDispatch();
  const { id, name, number } = item;

  function handleClick() {
    dispatch(deleteContact(id));
  }
  return (
    <div className={css.contactContainer}>
      <div className={css.contactItems}>
        <p className={css.listItem}>
          <FaUser />
          {name}
        </p>
        <p className={css.listItem}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button className={css.contactBtn} onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}
