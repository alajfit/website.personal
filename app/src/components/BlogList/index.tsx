import React from 'react';
import { IBlogListing } from '../../types';
import { SocialBar } from 'components/SocialBar';
import './index.scss';

const BlogListing: React.FC<IBlogListing> = ({ name, href, date, type, time, desc }) => (
    <li className="BlogListing">
        <a className="BlogListing-title" href={href}>{name.split('-').join(' ')}</a>
        <div className="BlogListing-time">
            <span>{date.split('-').join('/')}</span>
            <span>Reading Time: {time} mins</span>
        </div>
        <div>Category: {type}</div>
        <div className="BlogListing-desc">{desc.split('-').join(' ')}</div>
    </li>
)

export const BlogList: React.FC<{ blogs: IBlogListing[] }> = ({ blogs }) => (
    <div className="BlogList">
        <h1 className="BlogList-title">Personal Blog of Alan J. Fitzpatrick</h1>
        <ul className="BlogList-listings">
            {blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(blog => (
                <BlogListing
                    key={blog.name}
                    name={blog.name}
                    href={blog.href}
                    date={blog.date}
                    type={blog.type}
                    time={blog.time}
                    desc={blog.desc} />
            ))}
        </ul>
        <SocialBar />
    </div>
)