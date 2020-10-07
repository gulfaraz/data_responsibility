import React from "react";
import Score from "./Score";
import Report from "./Report";
import Badge from "./Badge";

const DEFAULT_ANSWER = "idk";
const NO_ANSWER = "idk";

const ANSWER_KEY = {
    yes: "Yes",
    no: "No",
    idk: "I don't know",
};

export default class FACT extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
        };
    }

    componentDidMount() {
        this.setState({
            questions: require("../rubric.json").questions.map(item => {
                item.answer = DEFAULT_ANSWER;
                return item;
            }),
        });
    }

    calculate_score(metric, component, questions = this.state.questions) {
        let numerator = questions
            .map(question => {
                const answer_weight = question.answer === "yes";
                return answer_weight * question.weight;
            })
            .reduce((accumulator, current) => accumulator + current, 0);
        let denominator = questions
            .map(question => {
                return Math.max(0, question.weight);
            })
            .reduce((accumulator, current) => accumulator + current, 0);
        return Math.max(0, Math.round(100 * (numerator / denominator)));
    }

    load_scoreboard() {
        return <div>{this.load_fact_score()}</div>;
    }

    load_fact_score() {
        const fact_score = this.calculate_score();
        return (
            <nav className="level">
                <div className="level-item has-text-centered">
                    <div>
                        <p className="title">D.R. Score</p>
                    </div>
                </div>
                <div className="level-item"></div>
                <div className="level-item"></div>
                <div className="level-item"></div>
                <div className="level-item"></div>
                <div className="level-item"></div>
                <Score score_value={fact_score} />
                <div className="level-item"></div>
                <div className="level-item"></div>
                <div className="level-item"></div>
                <Report
                    answer_key={ANSWER_KEY}
                    calculate_score={this.calculate_score}
                    questions={this.state.questions}
                    no_answer={NO_ANSWER}
                />
                <Badge score={fact_score} />
            </nav>
        );
    }

    change_answer(index) {
        return event => {
            let updated_questions = this.state.questions;
            updated_questions[index].answer = event.target.value;
            this.setState({
                questions: updated_questions,
            });
        };
    }

    load_question(item, index) {
        return (
            <div className="field is-horizontal">
                <div className="field-label is-size-4">{item.question}</div>
                <div className="field-body">
                    <div className="select">
                        <select
                            value={item.answer}
                            onChange={this.change_answer(index)}
                        >
                            {Object.entries(ANSWER_KEY).map(
                                ([answer_key, answer_value]) => {
                                    return (
                                        <option
                                            value={answer_key}
                                            key={answer_key}
                                        >
                                            {answer_value}
                                        </option>
                                    );
                                }
                            )}
                        </select>
                    </div>
                </div>
            </div>
        );
    }

    load_questions() {
        return this.state.questions.map((item, index) => {
            return <div key={index}>{this.load_question(item, index)}</div>;
        });
    }

    answer_summary() {
        return (
            <div className="field is-horizontal is-size-4">
                <div className="field-label"># Answered</div>
                <div className="field-body">
                    {
                        this.state.questions.filter(
                            question => question.answer !== NO_ANSWER
                        ).length
                    }
                    /{this.state.questions.length}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <nav className="level">
                                <div className="level-item">
                                    <div>
                                        <h1 className="title">
                                            Calculate D.R. Score
                                        </h1>
                                        <br />
                                        <h1 className="subtitle">
                                            Your score reflects your data
                                            responsibility.
                                        </h1>
                                    </div>
                                </div>
                                <Score label="legend" score_value=">70" />
                                <Score label="legend" score_value="30-70" />
                                <Score label="legend" score_value="<30" />
                            </nav>
                        </div>
                    </div>
                </section>
                <div className="container">
                    {this.load_scoreboard()}
                    {this.answer_summary()}
                    {this.load_questions()}
                </div>
            </div>
        );
    }
}