'use client';
import Link from 'next/link';
import React from 'react'

const ScrollToNavbar = ({name}) => {

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
          behavior: "smooth",
        });
      };

  return (
    <Link href={`#${name}`} onClick={handleScroll}>{name}</Link>
  )
}

export default ScrollToNavbar
