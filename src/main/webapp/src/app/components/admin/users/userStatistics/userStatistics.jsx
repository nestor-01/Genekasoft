var React = require('react');

var MapContainer = require('../../../common/widgets/map/map.jsx');
var Events = require('../../../common/constants/events.jsx');

var UserStatistics = React.createClass({
    getInitialState()
{
    var _height = $(window).height() - 150;
    var _width = 300;
    var _top = ($(window).height()/2) - (_height / 2) - 100;
    var _left = ($(window).width()/2) - (_width / 2);

    return {
        _height: _height,
        _width: _width,
        _top: _top,
        _left: _left,
        height: _height + 'px',
        width: _width + 'px',
        top: _top + 'px',
        left: _left + 'px',
        opacity: 0,
        opacityButton: 0
    };
},
    componentDidMount()
{
    console.log("test1");

    $.get('/geneka/api/user/getAllUsers')
        .done(function (response) {
            console.log("test2");
            var users = JSON.parse(response);
            console.log(users)

        })
        .fail(function (error) {
            alert( "error" );
        });
},

render()
{
    return (
        <div style={{marginTop: '30px', height: 'calc(100vh - 200px)'}}>

<div className="col-xs-12" style={{height: '100%', overflowY: 'auto'}}>


<div className="row">
    <div className="col-md-8 col-xs-6">
    <h4><i className="glyphicon glyphicon-globe" /> Ubicación De Usuarios</h4>
</div>
</div>
<hr/>
<div style={{width: '100%', height: 'calc(100vh - 365px)', minHeight: '365px'}}>
<MapContainer onLoadAddress={this._onLoadAddress} onDragStart={this._onDragStartMap} onDragEnd={this._onDragEndMap} />
</div>

</div>
</div>
);
},

_onLoadAddress(address)
{
    $(React.findDOMNode(this.refs.addressTextField)).val(address);
},

_onDragStartMap()
{
    if(this.props.onEvent)
        this.props.onEvent(Events.onDragStart, null);
},

_onDragEndMap()
{
    if(this.props.onEvent)
        this.props.onEvent(Events.onDragEnd, null);
},

});

module.exports = UserStatistics;