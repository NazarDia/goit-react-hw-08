import { useId } from 'react';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';
import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const search = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const searchId = useId();

  function handleChange(e) {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <div className={css.searchCont}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.searchInput}
        type="text"
        name="search"
        value={search}
        id={searchId}
        onChange={handleChange}
        placeholder="Print here"
      />
    </div>
  );
}
