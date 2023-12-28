import MenuItem from "./menu-items";

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((list) => <MenuItem item={list} />)
        : null}
    </ul>
  );
}
