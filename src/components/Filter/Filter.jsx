export default function Filter(props) {
  const { value, onFilterChange } = props;
  return (
    <div>
      <input value={value} type="text" onChange={onFilterChange} />
    </div>
  );
}
