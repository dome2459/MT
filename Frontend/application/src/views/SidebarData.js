import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsFill from "react-icons/bs";
import { Switch } from '@chakra-ui/react'

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