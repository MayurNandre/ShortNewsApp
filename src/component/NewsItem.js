import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date ,source} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="Not loaded !" />
                    <div className="card-body">
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{zIndex:"1",left:"80%"}}>
                       { source}
                        </span>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} at {new Date(date).toGMTString()}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
