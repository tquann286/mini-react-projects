import React from 'react';
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/trung.quann.2806',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://github.com/tquann286',
    icon: <FaGithub />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/quantrung286/',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.instagram.com/trungquan2806_/',
    icon: <FaInstagram />,
  },
]