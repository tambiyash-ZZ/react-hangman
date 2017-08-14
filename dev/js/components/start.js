import React, { Component } from 'react';
import _ from 'underscore';
import '../../css/main.css';
import '../../../bootstrap/bootstrap.css';

export default class StartUser extends Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.refs.mail.value);
    }

    render() {
        return (
            <div>
                <div id="hangmandesc" className="container">
                    <h1>Hangman is the game we all loved in our childhood.</h1>
                    <h4>Enter email address to continue !! <span className="text-primary">#BeingNostalgic</span></h4>
                </div>
                <form id="usermail" className="form-group-row" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="input-lg col-xs-4"><input className="form-control" ref="mail" type="email" id="input" required placeholder="username@example.com" /></div>
                    <div className="input-lg col-xs-4"><button type="Submit" ref="startgame" className="btn btn-danger" type="Submit"><strong>Enter  the ARENA !!</strong></button></div>
                </form>
            </div>
        );
    }
}