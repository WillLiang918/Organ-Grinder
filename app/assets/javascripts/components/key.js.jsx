var Key = React.createClass({

  getInitialState: function () {
    return { pressed: false };
  },

  componentDidMount: function () {
    var freq = Tones[this.props.noteName];
    this.note = new Note(freq);
    KeyStore.addChangeHandler(this.handleChange);
  },

  componentWillUnmount: function () {
    KeyStore.removeListener(this.handleChange);
  },

  handleChange: function () {
    if (KeyStore.find(this.props.noteName)) {
      this.setState({ pressed : true });
      this.note.start();
    } else {
      this.setState({ pressed : false });
      this.note.end();
    }
  },

  render: function () {
    return (<div>
    </div>);
  }
});

var Organ = React.createClass({

  render: function () {

    // var keys =
    return (
      <div>
        {}
      </div>
    );
  }
});
