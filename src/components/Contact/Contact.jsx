import { FaPhone, FaUser } from 'react-icons/fa';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
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
      <button
        className={css.contactBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};
export default Contact;
