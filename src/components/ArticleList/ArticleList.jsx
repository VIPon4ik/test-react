import React, { Component } from 'react'

export default class ArticleList extends Component {
  render() {
    const { articles } = this.props;
    return (
      <ul>
        {articles.map(({ objectID, url, title }) => {
          return (
            <li key={objectID}>
              <a href={url} target='_blank'>
                {title}
              </a>
            </li>
          )
        })}
      </ul>
    )
  }
}
