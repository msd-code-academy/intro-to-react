import React from 'react';

export class ResultItem extends React.Component {
  render() {
    const {link, title, description} = this.props;

    return (
      <div className="results__list-item">
        <a href={link}>
          <h3 className="results__list-title">{title}</h3>
        </a>
        <div className="results__list-description">{description}</div>
      </div>
    );
  }
}
