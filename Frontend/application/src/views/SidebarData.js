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
        title: 'Subnet',
      },
      {
        title: 'PIC',
      },
      {
        title: 'Hinzufügen',
      },
      {
        title: 'Löschen',
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
        title: 'Router'
      },
      {
        title: 'OSPF',
      },
      {
        combinedTitle: 'Metrik & RIP',
        subItems: [
            {
                title: 'Metrik'
            },
            {
                title: 'RIP'
            }
        ]
    },
      {
        title: 'ConnectionList',
      },
      {
        title: 'Verbinden',
        cName: 'sub-nav'
      },
      {
        title: 'Connection-Löschen',
      }
    ]
  } 
];