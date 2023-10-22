import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsFill from "react-icons/bs";


export const SidebarData = [

    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'

    },
    {
        title: 'Router',
        path: '/router',
        icon: <BsFill.BsFillRouterFill/>,
        cName: 'nav-text'

    },
    {
        title: 'Netzwerk',
        path: '/network',
        icon: <FaIcons.FaNetworkWired/>,
        cName: 'nav-text'

    },
   

]