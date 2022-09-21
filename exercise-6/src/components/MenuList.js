import MenuItem from "./MenuItem";

const MenuList = (props) => {
return(
<ul>
          {props.menuItems.map((item) => (
            <MenuItem
              removeHandler={props.removeHandler}
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
          />
          ))}
        </ul>
);
};

export default MenuList;