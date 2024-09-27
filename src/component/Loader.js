import React, { Component } from 'react'

export class Loader extends Component {
    render() {
        return (
<>
<div className="container text-center my-4">
  <div className="spinner-border" role="status">
  </div>
</div>
</>
        )
    }
}

export default Loader
