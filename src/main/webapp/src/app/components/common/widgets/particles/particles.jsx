var React = require('react');

var Particles = React.createClass({

    propTypes: {
      minSpeedX: React.PropTypes.number,
      maxSpeedX: React.PropTypes.number,
      minSpeedY: React.PropTypes.number,
      maxSpeedY: React.PropTypes.number,
      directionX: React.PropTypes.oneOf(['center', 'left', 'right']),
      directionY: React.PropTypes.oneOf(['center', 'up', 'down']),
      density: React.PropTypes.number,
      dotColor: React.PropTypes.string,
      lineColor: React.PropTypes.string,
      particleRadius: React.PropTypes.number,
      lineWidth: React.PropTypes.number,
      curvedLines: React.PropTypes.bool,
      proximity: React.PropTypes.number,
      parallax: React.PropTypes.bool,
      parallaxMultiplier: React.PropTypes.number,
      onInit: React.PropTypes.func,
      onDestroy: React.PropTypes.func
    },
    
    getDefaultProps()
    {
      return {
        minSpeedX: 0.1,
        maxSpeedX: 0.7,
        minSpeedY: 0.1,
        maxSpeedY: 0.7,
        directionX: 'center',
        directionY: 'center',
        density: 10000,
        dotColor: '#fff',
        lineColor: '#fff',
        particleRadius: 7,
        lineWidth: 1,
        curvedLines: false,
        proximity: 100,
        parallax: true,
        parallaxMultiplier: 5,
        zIndex: "0",
        percentage: false,
        onInit: function(){},
        onDestroy: function(){}
      };
    },
    
    getInitialState()
    {
      return{
        height: '150px'
      };
    },
    
    componentDidMount()
    {
      $(React.findDOMNode(this.refs.refParticlesSystem)).particleground(this.props);
      $(window).on('resize', function(){
        if(this.props.percentage && this.props.percentage === true)
        {
          this.setSize('100%');
        }
        else
        {
          this.setSize($(window).height());
        }
      }.bind(this));
    },

    componentDidUpdate()
    {
      var startTimer = setTimeout(function(){
        $(React.findDOMNode(this.refs.refParticlesSystem)).particleground(this.props);
      }.bind(this), 800);
    },
    
    render()
    {
      return (
        <div ref="refParticlesSystem" id="intro" className="particles" style={{height: this.state.height, zIndex: this.props.zIndex}}></div>
      );
    },

    setSize(size)
    {
      this.destroy();

      this.setState({
        height: size
      });
    },
    
    pause()
    {
        $(React.findDOMNode(this.refs.refParticlesSystem)).particleground('pause');
    },
    
    start()
    {
        $(React.findDOMNode(this.refs.refParticlesSystem)).particleground('start');
    },
    
    destroy()
    {
        $(React.findDOMNode(this.refs.refParticlesSystem)).particleground('destroy');
    }
});

module.exports = Particles;

