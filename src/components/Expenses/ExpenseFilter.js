import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const filterYearHandler = (event) => {
    props.onFilterChange(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter Year</label>
        <select value={props.selected} onChange={filterYearHandler}>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
