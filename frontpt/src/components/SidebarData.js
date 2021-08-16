import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Novo Ponto Turístico',
    path: '/pontos',
    icon: <FaIcons.FaPlus />,
    cName: 'nav-text'
  }
];
