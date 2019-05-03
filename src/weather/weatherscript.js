import React from 'react'

class Weather extends React.Component {
	render(){
		return(<div> 
			{ this.props.name &&
				
					<p>Город: {this.props.name}, 
					<br />
					Температура по-фаренгейту: {this.props.temp} 
					<br />
					Давление: {this.props.pressure}
					</p>
				
				

			}		
			</div>
		);
	}
}

export default Weather