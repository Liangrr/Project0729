import React from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean); // 过滤掉空字符串
  const items = pathnames.map((pathname, index) => ({
    title: capitalizeFirstLetter(pathname),
    href: `/#/${pathnames.slice(0, index + 1).join('/')}`
  }));

  return <Breadcrumb items={items} />;
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default Breadcrumbs;