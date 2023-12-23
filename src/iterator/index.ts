import Array from "./Array";
import Item from "./Item";

const items = [
  new Item("회", 200_000),
  new Item("대게", 300_000),
  new Item("돔페리뇽", 800_000),
  new Item("아르망디", 2_000_000),
];

const array = new Array(items);
const iter = array.iterator();
const appElement = document.getElementById("app");

const iteratorPattern = () => {
  if (!appElement) return;

  while (iter.next()) {
    const item = iter.current();
    const domItem = document.createElement("div");
    domItem.innerHTML = `${item.name} : ${item.cost}`;

    appElement.appendChild(domItem);
  }
};

export default iteratorPattern;
