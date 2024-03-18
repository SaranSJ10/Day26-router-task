// eslint-disable-next-line no-unused-vars
import React from "react";
import './Header.css';
import blogHeader from '../assets/blogHeader.jpg';

export default function Header() {

    return (
        <img className="pic" src={blogHeader} alt="header" />
    )
}