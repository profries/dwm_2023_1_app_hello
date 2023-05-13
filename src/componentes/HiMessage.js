import React from 'react';

class HiMessage extends React.Component{
    render() {

        if(this.props.mensagem) {
            return <h2>Hi Everybody! {this.props.mensagem}</h2>
        }
        return <h2>Hi Everybody!</h2>
    }
}

export default HiMessage;