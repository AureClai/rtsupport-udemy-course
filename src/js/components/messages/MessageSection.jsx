import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MessageForm from './MessageForm.jsx'
import MessageList from './MessageList.jsx'


class MessageSection extends Component {
    render(){
        let {activeChannel} = this.props;
        let heading;
        if (activeChannel !== undefined){
            heading = <strong>{activeChannel.name}</strong>
        }
        return(
            <div className='messages-container panel panel-default'>
                <div className='panel-heading'>
                    {heading}
                </div>
                <div className='panel-body messages'>
                    <MessageList {...this.props} />
                    <MessageForm {...this.props} />
                </div>
            </div>
        )
    }
}

MessageSection.propTypes = {
    messages: PropTypes.array.isRequired,
    activeChannel: PropTypes.object.isRequired,
    addMessage: PropTypes.func.isRequired
}

export default MessageSection;

