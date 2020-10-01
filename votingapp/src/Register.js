import React, {useState} from 'react';
import {DropdownButton, Dropdown, FormControl } from 'react-bootstrap';
import stateData from './data/stateData';
import './CSS/Register.css'
import Nav from './navbar/Nav.js'
import StateInfo from './StateInfo';


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
	<a
		href=''
		ref={ref}
		onClick={(e) => {
			e.preventDefault();
			onClick(e);
		}}>
		{children}
		&#x25bc;
	</a>
));

const CustomMenu = React.forwardRef(
	({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
		const [value, setValue] = useState('');

		return (
			<div
				ref={ref}
				style={style}
				className={className}
				aria-labelledby={labeledBy}>
				<FormControl
					autoFocus
					className='mx-3 my-2 w-auto'
					placeholder='Type to filter...'
					onChange={(e) => setValue(e.target.value)}
					value={value}
				/>
				<ul className='list-unstyled'>
					{React.Children.toArray(children).filter(
						(child) =>
							!value || child.props.children.toLowerCase().startsWith(value)
					)}
				</ul>
			</div>
		);
	}
);


function Register(props) {
	const [chosenState, setChosenState] = useState('Select Your State');
	const [showState, setShowState] = useState(false)
	const [data, setData] = useState({})
	const passStateData = (data, e) => {
		setShowState(true)
		setData(data)
	}
    return (
			<div>
				<Nav goToDash={props.goToDash} goBack={props.goToDash}/>
				<DropdownButton id="dropdown-basic-button" title={chosenState} >
					{/* <Dropdown.Item href="#/action-1">Select Your State</Dropdown.Item> */}
					{stateData.map((st, i) => {
						return (
							<Dropdown.Item key={i} onClick={(e) => passStateData(st, e)}>{st.name}</Dropdown.Item>
						)
					})}
				</DropdownButton>
				{showState && <StateInfo stateInfo={data} />}
			</div>
		);
}

export default Register;