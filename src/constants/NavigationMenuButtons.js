import tachometerIcon from "../components/menu-icons/TachometerIcon";
import exclamationCircleIcon from "../components/menu-icons/ExclamationCircleIcon";
import mapIcon from "../components/menu-icons/MapIcon";
import calendarCheckIcon from "../components/menu-icons/CalendarCheckIcon";
import listAltIcon from "../components/menu-icons/ListAltIcon";
import usersIcon from "../components/menu-icons/UsersIcon";
import settingsIcon from "../components/menu-icons/SettingsIcon";
import moonIcon from "../components/menu-icons/MoonIcon";
import tasksIcon from "../components/menu-icons/TasksIcon";

const NavigationMenuButtons = [
  { name: "Dashboard", icon: tachometerIcon },
  { name: "Projects", icon: tasksIcon },
  { name: "Issues", icon: exclamationCircleIcon },
  { name: "Map", icon: mapIcon },
  { name: "Planning", icon: calendarCheckIcon },
  { name: "Gantt chart", icon: null },
  { name: "Calendar", icon: null },
  { name: "Checklists", icon: listAltIcon },
  { name: "Checklists", icon: null },
  { name: "Create checklists", icon: null },
  { name: "Resources", icon: usersIcon },
  { name: "Teams", icon: null },
  { name: "Employees", icon: null },
  { name: "Settings", icon: settingsIcon },
  { name: "Partner settings", icon: null },
  { name: "Email settings", icon: null },
  { name: "Users", icon: null },
  { name: "Product settings", icon: null },
  { name: "Appearance", icon: moonIcon },
  { name: "Offer", icon: calendarCheckIcon },
];

export default NavigationMenuButtons;
