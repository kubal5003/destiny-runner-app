import React from 'react';
import './test.scss'

export class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            status: 'in-progress'
        };
        let karmaService = props.karmaService;

        karmaService.subscribeForSpecResult(props.browserId, props.name, props.path, (skipped, success) => {
            console.log('Test update issued skipped:', skipped, ' success:', success);
            if (skipped) {
                this.setState({ status: 'skipped' });
            } else {
                if (success) {
                    this.setState({ status: 'success' });
                }
                else {
                    this.setState({ status: 'failed' });
                }
            }
        });
    }

    render() {
        let marginLevel = this.props.level > 0 ? this.props.level : 0;
        if (this.state.status === 'in-progress') {
            return (
                <div className="test-running" style={{ "marginLeft": marginLevel * 30 + 'px' }}>
                    {this.state.name}
                </div>
            );
        }
        if (this.state.status === 'success') {
            return (
                <div className="test-success" style={{ "marginLeft": marginLevel * 30 + 'px' }}>
                    {this.state.name}
                </div>
            );
        }
        if (this.state.status === 'failed') {
            return (
                <div className="test-failed" style={{ "marginLeft": marginLevel * 30 + 'px' }}>
                    {this.state.name}
                </div>
            );
        }
        if (this.state.status === 'skipped') {
            return (
                <div className="test-skipped" style={{ "marginLeft": marginLevel * 30 + 'px' }}>
                    {this.state.name}
                </div>
            );
        }


    }
}