import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default function Jumbotron (props) {

    return (
          <div className={props.className}>
            <h1>This is my {props.statement}.</h1>
          </div>
    );

}

Jumbotron.propTypes = {
  statement: PropTypes.string
}

Jumbotron.defaultProps = {
  className: 'jumbotron',
  statement: 'Page'
}
