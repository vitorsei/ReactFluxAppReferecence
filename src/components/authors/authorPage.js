/** * Created by 5a.victor on 09/08/2016. */
"use strict";

var React = require('react');
var Link = require('react-router').Link;
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorsList');

var AuthorsPage = React.createClass({
    getInitialState: function () {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },

    render: function () {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});

module.exports = AuthorsPage;
