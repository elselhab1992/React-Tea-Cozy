import Hero from "../Hero/Hero";
import Locations from "../Locations/Locations";
import Menu from "../Menu/Menu";
import { menuItems } from "./../../data";
import { MenuStyles, MenuHeading } from "./MainStyles";

const Main = () => {
  const menu = menuItems.map((item) => {
    const { id, img, title } = item;

    return (
      <div className="col" key={id}>
        <MenuStyles src={img} alt={title} />
        <MenuHeading>{title}</MenuHeading>
      </div>
    );
  });

  return (
    <main>
      <Hero />
      <Menu menu={menu} />
      <Locations />
    </main>
  );
};

export default Main;
