import React, { Component } from 'react';
import { Wrapper, Label, Input, ValidCheck, RequiredPen } from './style';

export default class TextInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            empty: true,
            value: props.value || '',
            textValue: setInitialTextValue(props),
            countryCodeValue: setInitialCountryValue(props),
            countryCodePrefix: props.telCountry || 'pt',
            labelOnTop: false,
            validationError: false,
            required: props.required === undefined ? true : props.required,
            disabled: props.disabled === undefined ? false : props.disabled,
            readonly: props.readonly === undefined ? false : props.readonly,
            havePen: props.havePen !== undefined ? props.havePen : true
        }

        this.changeLabel = this.changeLabel.bind(this)
        this._getFocus = this._getFocus.bind(this)
        this._lostFocus = this._lostFocus.bind(this)
        this._onKeyUp = this._onKeyUp.bind(this)
        this.changeValue = this.changeValue.bind(this)
        this._changeCountryCode = this._changeCountryCode.bind(this)

        this.inputRef = React.createRef()
        this.selectRef = React.createRef()

    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        /*if (this.props.userID !== prevProps.userID) {
            this.fetchData(this.props.userID);
        }*/
    }

    componentDidMount() {
        if (this.props.select && this.props.type !== 'tel')
            this.setState({ labelOnTop: true })


        if (this.props.value && this.props.value.length > 0) {
            this.setState({
                labelOnTop: true,
                value: this.props.value,
            }, () => {
                this.inputRef.current.value = setInitialTextValue(this.props)
            })
        }
    }

    _getFocus() { this.setState({ labelOnTop: true }) }

    _lostFocus() {
        if (this.state.empty && (this.props.maxWidth >= 80 || !this.props.maxWidth))
            this.setState({ labelOnTop: false })
    }

    changeLabel(value) {
        const inputValue = value.length === 0 ? true : false
        this.setState({ empty: inputValue }, () => {
            if (this.props.maxWidth <= 80) {
                this.setState({ labelOnTop: true })
            }
        })
    }



    _onKeyUp(event) {
        this.setState({
            validationError: !event.target.checkValidity(),
            textValue: event.target.value
        }, () => {
            this.changeValue()
        })
    }

    changeValue() {
        const newValue = this.props.type === 'tel' ? this.state.countryCodeValue + " " + this.state.textValue : this.state.textValue
        this.setState({ value: this.state.countryCodeValue + " " + this.state.textValue },
            () => {
                if (this.props.onChange)
                    this.props.onChange(this.state.value)
                this.changeLabel(this.state.value)
            })
    }

    _changeCountryCode(selected) {
        this.setState({
            countryCodeValue: selected.code,
            countryCodePrefix: selected.prefix
        }, () => {
            this.changeValue()
        })
    }

    render() {

        const autocomplete = this.props.type === "tel" ? "none" : "on"

        return (
            <Wrapper
                validationError={this.state.validationError}>
                    <Label>{this.props.children}</Label>
                <Input
                    ref={this.inputRef}
                    width={this.props.maxWidth}
                    shadow={this.props.shadow}
                    hasSelect={this.props.select}
                    name={this.props.name}
                    required={this.state.required}
                    readonly={this.state.readonly}
                    disabled={this.state.disabled}
                    maxLength={this.props.maxlength}
                    minLength={this.props.minlength}
                    pattern={this.props.pattern}
                    id={this.props.id}
                    type={this.props.type}
                    onFocus={this._getFocus}
                    onBlur={this._lostFocus}
                    onKeyUp={this._onKeyUp} />
            </Wrapper>
        )
    }
}

const setInitialTextValue = (props) => {
    if (props.type === 'tel' && props.value) {
        return props.value.split(' ')[1]
    }
    return props.value || ''
}

const setInitialCountryValue = (props) => {
    if (props.type === 'tel' && props.value) {
        return props.value.split(' ')[0]
    }

    return ''
}