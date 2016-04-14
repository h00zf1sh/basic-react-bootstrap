var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Menu = require('./components/menu');

$(function() {
    ReactDOM.render(
        <Menu />,
        document.getElementById('example')
    );
});