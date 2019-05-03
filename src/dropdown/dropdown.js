import React from 'react'
import Button from './button'


class Dropdown extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		text_button: "Ну нажми на меня, я тебе кое-что покажу",
		opened: false
	};
		this.handleClick = this.handleClick.bind(this);
		this.changeButtons = this.changeButtons.bind(this);
	};
	handleClick(){
		this.setState({opened: !this.state.opened});
	};

	changeButtons(e){
		this.setState({
			text_button: e.target.innerText,
			opened: !this.state.opened
		});
	};

	render(){
		return(
				<div>
					<h3> дропДаун </h3>
					<p> Ну тут уже сам полностью придумывал. Долго, но вроде разобрался. </p>
					
					<Button handleClick={this.handleClick} buttonName={this.state.text_button}/>
						
					{this.state.opened && 
						<ul>
							<li onClick={this.changeButtons}> Выбери меня</li>
							<li onClick={this.changeButtons}> Не слушай верхнего, меня выбери</li>
							<li onClick={this.changeButtons}> Двое сверху - геи, выберай меня</li>
							<li onClick={this.changeButtons}> Не слушай всех. Все п*дорасы, я Дартаньян</li>
						</ul>
					}
					
					
				</div>
		);
	}
}

export default Dropdown