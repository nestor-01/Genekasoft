var React = require('react');

var Dialog = React.createClass({

	componentDidMount()
	{
		var morphEl = React.findDOMNode(this.refs.morphShape);
		var s = Snap( morphEl.querySelector( 'svg' ) );
		var path = s.select( 'path' );
		var steps = { 
			open : morphEl.getAttribute( 'data-morph-open' ),
			close : morphEl.getAttribute( 'data-morph-close' )
		};

		window.dlg = new DialogFx( somedialog, {
			onOpenDialog : function( instance ) {
				// animate path
				path.stop().animate( { 'path' : steps.open }, 400, mina.easeinout );
			},
			onCloseDialog : function( instance ) {
				// animate path
				path.stop().animate( { 'path' : steps.close }, 400, mina.easeinout );
			}
		});
	},

	render()
	{
		return (
			<div id="somedialog" className="dialog">
				<div className="dialog__overlay"></div>
				<div className="dialog__content">
					<div ref="morphShape" className="morph-shape" data-morph-open="M0,0h80c0,0,0,9.977,0,29.834c0,19.945,0,30.249,0,30.249H0c0,0,0-10.055,0-30.332C0,8.219,0,0,0,0z" data-morph-close="M0,29.75h80c0,0-3.083,0.014-3.083,0.041c0,0.028,3.083,0.042,3.083,0.042H0c0,0,3.084-0.014,3.084-0.042C3.084,29.762,0,29.75,0,29.75z">
						<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 60" preserveAspectRatio="none">
							<path d="M0,29.75h80c0,0-3.083,0.014-3.083,0.041c0,0.028,3.083,0.042,3.083,0.042H0c0,0,3.084-0.014,3.084-0.042C3.084,29.762,0,29.75,0,29.75z"></path>
						</svg>
					</div>
					<div className="dialog-inner">
						<a><span style={{position: 'absolute', top: '-40px', right: '-40px'}} className="glyphicon glyphicon-remove" data-dialog-close></span></a>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	},

	open()
	{
		window.dlg.toggle();
	},

	close()
	{
		window.dlg.toggle();
	}
});

module.exports = Dialog;