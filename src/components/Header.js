
import React from "react";
import './../styles.css';

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <nav>
                    <h1><i class="fa-sharp fa-solid fa-earth-americas"></i> Travel Journal</h1>
                </nav>
            </header>
        );
    }
}