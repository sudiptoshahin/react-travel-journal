
import React from "react";
import Card from './Card';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.data = this.props.data;
    }

    render() {

        console.log(this.props);

        const cards = this.data.map((item) => {
            return (
                <Card 
                key={item.id}
                journal={ item } />
            );
        });

        return (
            <main>
                { cards }
            </main>
        );
    }
}