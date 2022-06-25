export default function Filter(props) {
  const { value, onFilterChange } = props;
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input value={value} type="text" onChange={onFilterChange} />
    </div>
  );
}
