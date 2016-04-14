var React = require('react');
var ButtonGroup = require('react-bootstrap').ButtonGroup;
var DropdownButton = require('react-bootstrap').DropdownButton;
var Button = require('react-bootstrap').Button;
var MenuItem = require('react-bootstrap').MenuItem;

module.exports = React.createClass({
    handleClick: function() {
        alert("clickin'");
    },
    render: function() {
        return (
            <ButtonGroup>
                <DropdownButton bsStyle="success" title="Dropdown">
                    <MenuItem onClick={this.handleClick} key="1">Dropdown link</MenuItem>
                    <MenuItem key="2">Dropdown link</MenuItem>
                </DropdownButton>
            </ButtonGroup>
        )
    }
});