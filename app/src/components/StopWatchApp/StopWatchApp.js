import React, { Component } from "react";
import {
    StopWatchAppWrapper,
    H1Title,
    Time,
    CommandsContainer,
    StopWatchContainer,
} from "./style.js";
import {
    RED,
    GREEN,
    RED_OPAQUE,
    GREEN_OPAQUE,
} from "../../constants/defaultStyleProps";
import DefaultButton from "../DefaultButton/index.js";
import TextInput from "../formInputs/TextInput";

export default class StopWatchApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            minutes: 0,
            playing: false,
            strTime: "00:00:00",
            list: [],
            description: "",
        };

        this._play = this._play.bind(this);
    }

    componentDidMount() {
        this.increase();
    }

    increase() {
        setInterval(() => {
            if (this.state.playing) {
                this.setState(
                    {
                        seconds: this.state.seconds + 1,
                    },
                    () => {
                        this.setState(
                            { minutes: Math.floor(this.state.seconds / 60) },
                            () => {
                                this.setState({ strTime: this.getStrTime() });
                            }
                        );
                    }
                );
            }
        }, 1000);
    }

    getStrTime() {
        const str = `${Math.floor(this.state.minutes / 60)
            .toString()
            .padStart(2, "0")}:${(this.state.minutes % 60)
            .toString()
            .padStart(2, "0")}:${(this.state.seconds % 60)
            .toString()
            .padStart(2, "0")}`;
        document.querySelector(
            "title"
        ).innerText = `${str} - Stopwatch is playing `;
        return str;
    }

    _play() {
        console.log("clicked");
        this.setState({ playing: true });
    }

    _pause() {
        console.log("clicked");
        this.setState({ playing: false });
    }

    _stop() {
        this.props.saveTask({
            description: this.state.description,
            time: this.state.strTime,
        });
        this.setState({
            playing: false,
            strTime: "00:00:00",
            seconds: 0,
        });
    }

    _save() {
        const newList = this.state.list;
        console.log(this.getStrTime());
        newList.push({
            task: "teste",
            time: this.getStrTime(),
        });
        console.log();
        this.setState({ list: newList });
    }

    render() {
        /*const list = '';
        if (this.state.list.length > 0) {
            list = this.state.list.map((task, indexTask) => {
                return {
                    task: "Task" + indexTask,
                    time: this.state.strTime
                }
            })
        }*/
        const playButtonDesc = this.state.seconds === 0 ? "Play" : "Resume";

        return (
            <StopWatchAppWrapper className="stopwatch-app">
                <StopWatchContainer>
                    <H1Title>Timer to manage your daily tasks</H1Title>
                    <Time>{this.state.strTime}</Time>
                    <CommandsContainer>
                        <DefaultButton
                            width="100%"
                            transparent={this.state.playing}
                            onClick={() => {
                                this._play();
                            }}
                            borderColor={GREEN}
                            bgcolor={GREEN_OPAQUE}
                        >
                            {playButtonDesc}
                        </DefaultButton>
                        <DefaultButton
                            width="100%"
                            transparent={!this.state.playing}
                            onClick={() => {
                                this._pause();
                            }}
                            borderColor={RED}
                            bgcolor={RED_OPAQUE}
                        >
                            Pause
                        </DefaultButton>
                        <DefaultButton
                            width="100%"
                            bgcolor={RED_OPAQUE}
                            borderColor={RED}
                            onClick={() => {
                                this._stop();
                            }}
                        >
                            Stop & save
                        </DefaultButton>
                    </CommandsContainer>
                    <TextInput
                        onChange={(value) => {
                            this.setState({ description: value });
                        }}
                    >
                        Digit a title description for your task
                    </TextInput>
                </StopWatchContainer>
            </StopWatchAppWrapper>
        );
    }
}
