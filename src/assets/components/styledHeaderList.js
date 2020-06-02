import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function HeaderList() {
    return (
        <Menu>
            <nav>
                <ul>
                    <li className="home">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="work">
                        <Link href="/work">
                            <a>Work</a>
                        </Link>
                    </li>
                    <li className="about">
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li className="contact">
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                    <hr />
                </ul>
            </nav>
        </Menu>
    );
}

const Menu = styled.header`
    width: 100%;
    background-color: transparent;

    > nav {
        display: flex;
        justify-content: flex-end;
        padding: 0 10px;

        > ul {
            width: 60%;

            > li {
                display: inline;
                text-align: center;
                font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
                font-size: 1em;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 0.25em;

                &.work:hover ~ hr {
                    margin-left: 25%;
                }

                &.about:hover ~ hr {
                    margin-left: 50%;
                }

                &.contact:hover ~ hr {
                    margin-left: 75%;
                }

                > a {
                    display: inline-block;
                    width: 25%;
                    padding: 0.75rem 0 0;
                    margin: 0;
                    text-decoration: none;
                    color: #808080;
                }
            }

            > hr {
                height: 2px;
                width: 25%;
                margin: 5px 0 0 0;
                background: #000;
                border: none;
                transition: 0.5s ease-in-out;
            }
        }
    }
`;
