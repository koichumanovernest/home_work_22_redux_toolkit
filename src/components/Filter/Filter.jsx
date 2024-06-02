import { useDispatch, useSelector } from 'react-redux';
import './Filter.css';
import { onChangeTitle } from '../../redux/slices/filterSlice';
import { onChangeAuther } from '../../redux/slices/filterAutherSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.filter.value);
  const auther = useSelector((state) => state.filter.value)
  const handleTitleFilterChange = (e) => {
    dispatch(onChangeTitle(e.target.value));
  };

  const handleAuthorFilterChange = (e) => {
      dispatch(onChangeAuther(e.target.value));
  };
  console.log(auther,"auther");

  // const handleOnlyFavoriteFilterChange = () => {
  //     dispatch(setOnlyFavoriteFilter());
  // };

  // const handleResetFilters = () => {
  //     dispatch(resetFilters());
  // };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by title..."
            onChange={handleTitleFilterChange}
            value={title}
          />
        </div>
        <div className="filter-group">
          <input type="text" placeholder="Filter by author..."
          onChange={handleAuthorFilterChange}
          value={auther}
          />
        </div>
        <div className="filter-group">
          <label>
            <input type="checkbox" />
            Only Favorite
          </label>
        </div>
        <button type="button">Reset Filters</button>
      </div>
    </div>
  );
};

export default Filter;
