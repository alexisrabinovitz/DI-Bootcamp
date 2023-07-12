import React, {Component} from "react";

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {hasError: false}
    }

    componentDidCatch(error, errorInfo) {
        this.state({hasError: true})
    }
    render() {
        if (this.state.hasError) {
            return <div>Oops, something went wrong.</div>
        }
        return this.props.children
    }
}