import React from "react";

export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this.journal = this.props.journal;
    }

    render() {

        return (
            <section>
                <div className="card">
                    <img src={`../images/${this.journal.imageUrl}`} alt={ this.journal.imageUrl } className="card--img" />

                    <div className="card--details">
                        <p className="card--location">
                            <i class="fa-solid fa-location-dot location-icon"></i> <span className="location-name">{ this.journal.location.toUpperCase() }</span>
                            <a href={ this.journal.google_map_link }>View on Google Maps</a></p>
                        <p className="card--title">{ this.journal.title }</p>

                        <p className="card--dates">
                            <span className="start--date">{ this.journal.start_data }</span>&nbsp; - &nbsp;
                            <span className="end--date">{ this.journal.end_date }</span>
                        </p>

                        <p className="card--description">{ this.journal.description }</p>
                    </div>
                </div>
            </section>
        );
    }
}