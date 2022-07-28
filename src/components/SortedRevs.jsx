export default function SortedRevs({ sortOption }) {
  return (
    <div>
      <label id="sort-label" for="sort-select">
        Sort reviews by:{" "}
      </label>
      <select id="sort-select" onChange={sortOption}>
        <option>--Choose an option--</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="mostComms">Most comments</option>
        <option value="leastComms">Least comments</option>
        <option value="mostVotes">Most votes</option>
        <option value="leastVotes">Least votes</option>
      </select>
    </div>
  );
}
