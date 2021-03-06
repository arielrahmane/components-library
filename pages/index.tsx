import type { NextPage } from 'next';
import { Button } from 'components/Button'
import { Navbar, NavbarItem, NavbarProps } from 'components/Navbar';

const navbarItems = [
  {
    name: "Pictures",
    href: "pictures"
  },
  {
    name: "Item2"
  },
] as NavbarItem[];

const navbarProps = {
  items: navbarItems,
  heading: "Navbar Test",
  backgroundColor: "bg-amber-500"
} as NavbarProps;

const Home: NextPage = () => {
  return (
    <>
      <Navbar items={navbarProps.items} heading={navbarProps.heading} backgroundColor={navbarProps.backgroundColor} />
      <Button>
        Hello
      </Button>
    </>
  );
};

export default Home;
