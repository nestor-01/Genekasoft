var React = require('react');

var Search = React.createClass({
    
	componentDidMount()
	{
		var morphSearch = document.getElementById( 'morphsearch' ),
			input = morphSearch.querySelector( 'input.morphsearch-input' ),
			ctrlClose = morphSearch.querySelector( 'span.morphsearch-close' ),
			isOpen = isAnimating = false,
			// show/hide search area
			toggleSearch = function(evt) {
				// return if open and the input gets focused
				if( evt.type.toLowerCase() === 'focus' && isOpen ) return false;

				var offsets = morphsearch.getBoundingClientRect();
				if( isOpen )
				{
					if(this.props.onCancelSearch)
						this.props.onCancelSearch();

					classie.remove( morphSearch, 'open' );

					// trick to hide input text once the search overlay closes 
					// todo: hardcoded times, should be done after transition ends
					if( input.value !== '' ) {
						setTimeout(function() {
							classie.add( morphSearch, 'hideInput' );
							setTimeout(function() {
								classie.remove( morphSearch, 'hideInput' );
								input.value = '';
							}, 300 );
						}, 500);
					}
					
					input.blur();
				}
				else
				{
					if(this.props.onSearch)
						this.props.onSearch();

					classie.add( morphSearch, 'open' );
				}
				isOpen = !isOpen;
			}.bind(this);

		// events
		//input.addEventListener( 'focus', toggleSearch );
		ctrlClose.addEventListener( 'click', toggleSearch );
		// esc key closes search overlay
		// keyboard navigation events
		input.addEventListener('keydown', function(ev){
			var keyCode = ev.keyCode || ev.which;
			if( keyCode === 13 && !isOpen )
			{
				toggleSearch(ev);
			}
		});

		document.addEventListener( 'keydown', function( ev ) {
			var keyCode = ev.keyCode || ev.which;
			if( keyCode === 27 && isOpen ) {
				toggleSearch(ev);
			}
		} );


		/***** for demo purposes only: don't allow to submit the form *****/
		//morphSearch.querySelector( 'button[type="submit"]' ).addEventListener( 'click', function(ev) { ev.preventDefault(); } );
	},

    render: function()
    {
    	return (
    		<div id="morphsearch" className="morphsearch">
    			<form className="morphsearch-form">
    				<input className="morphsearch-input" type="search" placeholder="Search..."/>
    				<span className="morphsearch-close"></span>
    			</form>
    			<div className="morphsearch-content">
    				<div className="dummy-column col-md-3">
    					<h2>Filtros</h2>
    					<div>
    						Filtros aqui
    					</div>
    				</div>
    				<div className="dummy-column col-md-9">
    					<h2>Resultados</h2>
    					
    						<div className="grid">
    							<figure className="effect-lily">
    								<img src="img/products/1.jpg" alt="img1"/>
    								<figcaption>
    									<div>
    										<h2>Nice <span>Lily</span></h2>
    										<p>Lily likes to play with crayons and pencils</p>
    									</div>
    									<a href="#">View more</a>
    								</figcaption>			
    							</figure>
    							<figure className="effect-sadie">
    								<img src="img/products/2.jpg" alt="img02"/>
    								<figcaption>
    									<h2>Holy <span>Sadie</span></h2>
    									<p>Sadie never took her eyes off me. <br/>She had a dark soul.</p>
    									<a href="#">View more</a>
    								</figcaption>			
    							</figure>
    							<figure className="effect-honey">
    								<img src="img/products/3.jpg" alt="img04"/>
    								<figcaption>
    									<h2>Dreamy <span>Honey</span> <i>Now</i></h2>
    									<a href="#">View more</a>
    								</figcaption>			
    							</figure>
    							<figure className="effect-zoe">
    								<img src="img/products/4.jpg" alt="img04"/>
    								<figcaption>
    									<h2>Dreamy <span>Honey</span> <i>Now</i></h2>
    									<a href="#">View more</a>
    								</figcaption>			
    							</figure>
    							<figure className="effect-milo">
    								<img src="img/products/5.jpg" alt="img05"/>
    								<figcaption>
    									<h2>Dreamy <span>Honey</span> <i>Now</i></h2>
    									<a href="#">View more</a>
    								</figcaption>			
    							</figure>
    							<figure className="effect-milo">
    								<img src="img/products/6.jpg" alt="img05"/>
    								<figcaption>
    									<h2>Dreamy <span>Honey</span> <i>Now</i></h2>
    									<a href="#">View more</a>
    								</figcaption>			
    							</figure>
    						</div>
    					
    				</div>
    			</div>
    		</div>
	    );
    }
});

module.exports = Search;