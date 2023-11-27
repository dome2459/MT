import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as BsFill from "react-icons/bs";


export const SidebarData = [
  {
    title: 'Router',
    path: '/router',
    icon: <BsFill.BsFillRouterFill/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Name',
      },
      {
        title: 'IP',
      },
      {
        title: 'OSPF',
      },
      {
        title: 'RIP',
      },
      {
        title: 'PIC',
      }
    ],

  },
  {
    title: 'Netzwerk',
    path: '/network',
    icon: <FaIcons.FaNetworkWired/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Router 1',
        cName: 'sub-nav'
      },
      {
        title: 'Router 2',
        cName: 'sub-nav'
      },
      {
        title: 'Router 3',
        cName: 'sub-nav'
      }
    ]
  } 
];