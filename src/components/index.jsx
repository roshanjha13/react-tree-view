import MenuList from "./menu-list";
import "./style.css";

export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      {/* {menus && menus.length ? <></> : null} */}
      <MenuList list={menus} />
    </div>
  );
}
