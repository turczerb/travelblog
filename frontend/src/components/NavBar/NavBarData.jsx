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
        label: "Solo travel",
        value: "0",
        path: "type-of-travel/solo",
      },
      {
        title: "Female travel",
        label: "Female travel",
        value: "1",
        path: "type-of-travel/female",
      },
      {
        title: "Adventure travel",
        label: "Adventure travel",
        value: "2",
        path: "type-of-travel/adventure",
      },
      {
        title: "Luxury travel",
        label: "Luxury travel",
        value: "3",
        path: "type-of-travel/lux",
      },
      {
        title: "Eco travel",
        label: "Eco travel",
        path: "type-of-travel/eco",
      },
    ],
  },
];
