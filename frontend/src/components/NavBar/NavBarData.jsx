import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const NavbarData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Destinations",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Africa ",
        path: "destinations/africa",
      },
      {
        title: "Asia",
        path: "destinations/asia",
      },
      {
        title: "The Caribbean",
        path: "destinations/caribbeam",
      },
      {
        title: "Central America",
        path: "destinations/central-am",
      },
      {
        title: "Europe",
        path: "destinations/europe",
      },
      {
        title: "The Middle East ",
        path: "destinations/middle-east",
      },
      {
        title: "North America",
        path: "destinations/north-am",
      },
      {
        title: "Oceania",
        path: "destinations/oceania",
      },
      {
        title: "South America",
        path: "destinations/south-am",
      },
    ],
  },
  {
    title: "Type of travel",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Solo travel",
        path: "/",
      },
      {
        title: "Female travel",
        path: "/",
      },
      {
        title: "Adventure travel",
        path: "",
      },
      {
        title: "Luxury travel",
        path: "",
      },
      {
        title: "Eco travel",
        path: "",
      },
    ],
  },
];
