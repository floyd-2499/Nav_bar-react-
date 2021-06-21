import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
// you can call all4 above imports in one {}

export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home'
    },
    {
        id: 2,
        url: '/about',
        text: 'About'
    },
    {
        id: 3,
        url: '/projects',
        text: 'Projects'
    },
    {
        id: 4,
        url: '/contact',
        text: 'Contact'
    },
    {
        id: 5,
        url: '/profile',
        text: 'Profile'
    },
]
export const social = [ 
    {
        id: 1,
        url: 'https://twitter.com/',
        icon: <FaTwitter />
    },
    {
        id: 2,
        url: 'https://www.facebook.com/',
        icon: <FaFacebook />
    },
    {
        id: 3,
        url: 'https://www.instagram.com/',
        icon: <FaInstagram/>
    },
    {
        id: 4,
        url: 'https://github.com/',
        icon: <FaGithub/>
    }
]