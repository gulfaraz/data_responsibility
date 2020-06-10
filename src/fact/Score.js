import React from "react";

const DEFAULT_DANGER_THRESHOLD = 30;
const DEFAULT_SUCCESS_THRESHOLD = 70;

export default class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            danger_threshold:
                this.props.danger_threshold || DEFAULT_DANGER_THRESHOLD,
            success_threshold:
                this.props.success_threshold || DEFAULT_SUCCESS_THRESHOLD,
        };
    }

    color_class() {
        return this.props.score_value < this.state.danger_threshold
            ? "has-background-danger"
            : this.props.score_value > this.state.success_threshold
            ? "has-background-success"
            : "has-background-warning";
    }

    advice() {
        return this.props.score_value < this.state.danger_threshold
            ? "More Yes answers"
            : this.props.score_value > this.state.success_threshold
            ? "Doing great!"
            : "Getting there";
    }

    render() {
        return (
            <div className="level-item has-text-centered">
                <div
                    className="has-tooltip-bottom"
                    data-tooltip={this.advice()}
                >
                    {this.props.label ? (
                        <p className="heading round-score-heading has-text-white">
                            {this.props.label}
                        </p>
                    ) : (
                        <p className="heading round-score-heading has-text-white">
                            Overall
                        </p>
                    )}
                    <p
                        className={
                            "round-score title has-text-white " +
                            this.color_class()
                        }
                    >
                        {this.props.score_value}%
                    </p>
                </div>
            </div>
        );
    }
}
