import { motion } from 'framer-motion';
import React from 'react';
import MenuView from './MenuView.js';
import ParentMenuView from './ParentMenuView.js';

const MenusView = ({
  menu,
  sidebarOpen,
  expendedMenus,
  addOrRemoveExpendedMenu,
  toggleSidebar,
}) => {
  const ref = React.useRef(null);
  // const menuExpended = expendedMenus.find((menu_id) => menu_id === menu.Id);

  return (
    <>
        <MenuView
            sidebarOpen={sidebarOpen}
            menu={menu}
            toggleSidebar={toggleSidebar}
        />

    </>
  );
};

export default MenusView;
