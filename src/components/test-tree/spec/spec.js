import React from 'react';
import './spec.css'

export class Spec extends React.Component {
    constructor(props) {
        super(props);
        let newPath = (this.props.path || []).concat(this.props.name);

        let karmaService = props.karmaService;
        this.state = {
            specs: props.specs,
            newPath: newPath,
        };
        karmaService.subscribeForSpecResult(props.browserId, newPath, () => {

        });
    }

    render() {
        let children = this.state.specs && Object.getOwnPropertyNames(this.state.specs)
            .filter(p => p !== '_')
            .sort();
        let hasChildren = children.length > 0;
        let marginLevel = this.props.level > 0 ? this.props.level : 0;

        return (

            <div className={"spec"} style={{ "marginLeft": marginLevel * 30 + 'px' }}>
                { this.renderSelf(hasChildren)}

                {
                    children.map((s, i) => {
                        let keySoFar = this.props.keySoFar + '/' + s;
                        return (<Spec
                            name={s}
                            specs={this.state.specs[s]}
                            browserId={this.props.browserId}
                            key={keySoFar}
                            keySoFar={keySoFar}
                            level={this.props.level + 1}
                            path={this.state.newPath}
                            karmaService={this.props.karmaService}
                        > </Spec>);
                    })
                }
            </div>
        );
    }

    renderSelf(hasChildren) {
        if(this.props.skipSelf) {
            return <span></span>;
        }
        return (
            <span className="spec-name">
                {hasChildren ? '-' : '\u00A0'}
                {this.props.name}
                <div className="running"> $ </div>
            </span>);
    }
}