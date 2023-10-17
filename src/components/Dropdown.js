import React from "react";

export default function Dropdown(list) {
  const [dropdown, setDropdown] = useState(false);
  return list.map((item) => <div key={item.id}></div>);
}
