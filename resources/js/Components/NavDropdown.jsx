import { Dropdown } from "flowbite-react";

const NavDropdown = ({lable, items}) => {
    return (
        <div>
            <Dropdown className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-blue-500" label={lable} inline>
                {items.map((item) => (
                    <Dropdown.Item key={item.id} className="bg-white">{item.name}</Dropdown.Item>
                ))}
            </Dropdown>
        </div>
    );
}

export default NavDropdown;
