import React, { Component } from 'react';

class PlayList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      artist: null,
      value: ''
    }
  }

  onChange = e => {
    this.setState({
    value: e.target.value
    });
  };

  onSubmit = () => {
    let value = this.state.value;

    this.setState({
      artist: value
    });

  };



componentDidMount() {

  const key = '0ecf4d5a2f7e228594521230c2f48463';
  const { artist } = this.state;

  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=${ key }&format=json`)
    .then(res => res.json())
    // .then(res => { console.log(res ) })
    .then(result => this.setState({ tracks: result.toptracks.track }));

}

render() {
  const { tracks, value, artist } = this.state;
  console.log(tracks);

  return (
    <>
      <label>Search for song:</label>
      <input type='text' value={ value } onChange={  this.onChange }></input>
      <button type='button' onClick={ this.onSubmit }>Submit</button>
      <ul>
       {
      tracks.map(o => (
      <li>{ o.name }</li>
))
}
</ul>
  </>
)
}
}

export default PlayList;