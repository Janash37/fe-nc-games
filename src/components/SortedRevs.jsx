export default function SortedRevs() {
  return (
    <div>
      <label id="sort-label" for="sort-select">
        Sort reviews by:{" "}
      </label>
      <select id="sort-select">
        <option>--Choose an option--</option>
        <option value="sort_by=created_at&order=DESC">Newest</option>
        <option value="sort_by=created_at&order=ASC">Oldest</option>
        <option value="sort_by=comment_count&order=DESC">Most comments</option>
        <option value="sort_by=comment_count&order=ASC">Least comments</option>
        <option value="sort_by=votes&order=DESC">Most votes</option>
        <option value="sort_by=votes&order=ASC">Least votes</option>
      </select>
    </div>
  );
}
