import {
  IconLayoutDashboard, // Keep for overall dashboard
  IconCurrencyDollar,  // For financial aspects
  IconLeaf,           // For CO2 offsets (nature theme)
  IconCheckupList,      // For approvals/checklists
  IconBoxMultiple,    // General portfolio/collection icon
} from "@tabler/icons-react"; 

import { uniqueId } from "lodash";

const Menuitems = [

  {
    navlabel: true,
    subheader: "Menu",
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Fund Investments",
    icon: IconCurrencyDollar,
    href: "/sb/fi",
  },
  {
    id: uniqueId(),
    title: "C02 Offsets Portfolio",
    icon: IconLeaf,
    href: "/sb/portfolio",
  },
  {
    id: uniqueId(),
    title: "Project Approvals",
    icon: IconCheckupList,
    href: "/sb/approvals",
  },
  {
    id: uniqueId(),
    title: "PivotTable",
    icon: IconCheckupList,
    href: "/sb/PivotTable",
  },
  
];

export default Menuitems;
