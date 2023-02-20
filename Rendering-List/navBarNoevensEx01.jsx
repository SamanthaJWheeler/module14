// Ex 1 - remove all even numbers from the NavBar
// then make a Button for each instead of an <li>
function NavBar({ menuitems }) {
  const { Button } = ReactBootstrap;
  //filter for odd only
  let list1 = menuitems.filter(item => item % 2 !==0);
  let list2 = list1.map((item, index) => {
    return <Button key={index.toString()}>{item}</Button>;
  });

  // note that React needs to have a single Parent
  return <ul style={{ listStyleType: "none" }}>{list2}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
