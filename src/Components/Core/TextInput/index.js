import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';

import styles from './style';

class Input extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: false
        }
    }

    componentDidMount() {
        this.setState({ error: this.props.error })
    }

    focus() {
        return this.input.focus()
    }

    error() {
        return this.setState({ error: true })
    }

    no_error() {
        return this.setState({ error: false })
    }

    toggel_error() {
        return this.setState({ error: !this.state.error })
    }

    render() {
        const props = this.props;
        const state = this.state

        return (
            <View style={[styles.searchBar, props.style]}>
                { props.icon && <Image source={props.icon} /> }
                <TextInput 
                    {...props}
                    ref={ref => this.input = ref}
                    secureTextEntry={props.secureTextEntry}
                    value={props.value}
                    placeholder={props.placeholder} 
                    autoCompleteType={props.autoCompleteType}
                    textContentType={props.textContentType}
                    autoCorrect={props.autoCorrect}
                    onChangeText={text => props.onChangeText(text)}
                    style={[styles.searchInput, state.error ? styles.error: null, {...props.style}]}
                />
            </View>
        )
    }

}

Input.defaultProps = {
    icon: null,
    value: null,
    onChangeText: null,
    secureTextEntry: false,
    placeholder: null,
    autoCompleteType: null,
    textContentType: null,
    autoCorrect: null,
    error: false,
    style: {},
    onChangeText: () => {}
}

export default Input;