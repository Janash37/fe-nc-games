export default function SortedRevs({ sortOption }) {
  return (
    <div>
      <label id="sort-label" for="sort-select">
        Sort reviews by:{" "}
      </label>
      <select id="sort-select" onChange={sortOption}>
        <option>--Choose an option--</option>
        <option value="sort_by=created_at&order=desc">Newest</option>
        <option value="sort_by=created_at&order=asc">Oldest</option>
        <option value="sort_by=comment_count&order=desc">Most comments</option>
        <option value="sort_by=comment_count&order=asc">Least comments</option>
        <option value="sort_by=votes&order=desc">Most votes</option>
        <option value="sort_by=votes&order=asc">Least votes</option>
      </select>
    </div>
  );
}
