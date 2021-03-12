import { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    conponentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops. That was not supposed to happen :/</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;