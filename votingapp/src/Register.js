import React, {useState} from 'react';
import {DropdownButton, Dropdown, FormControl } from 'react-bootstrap';
import stateData from './stateData';
import './CSS/Register.css'


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
	const passStateData = (data) => {
		props.toggleState(data);
	}
    return (
			<div>
				<DropdownButton id="dropdown-basic-button" title="Dropdown button" >
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
					{stateData.map((st, i) => {
						return (
							<Dropdown.Item key={i} onClick={() => passStateData(st)}>{st.name}</Dropdown.Item>
						)
					})}
				</DropdownButton>
					{/* <select className='select-css'>
						<option>Large select</option>
						{stateData.map((st, i) => {
							return (
								<option key={i} onClick={() => passStateData(st)}>{st.name}</option>
							)
						})}
					</select> */}
					{/* <div class="scrollable">
					<select size="6" >
						<option value="1" selected>option 1 The Long Option</option>
						<option value="2">option 2</option>
						<option value="3">option 3</option>
						<option value="4">option 4</option>
						<option value="5">option 5 Another Longer than the Long Option ;)</option>
						<option value="6">option 6</option>
					</select>
					</div> */}
			</div>
		);
}

export default Register;