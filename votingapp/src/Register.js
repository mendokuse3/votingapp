import React, {useState} from 'react';
import {Dropdown, FormControl } from 'react-bootstrap';


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

const stateData = [
	{url: 'https://www.google.com',
	name: 'Alaska'
	},
	{url: 'https://www.yahoo.com',
	name: 'cali'}
]

function Register(props) {
	// const [redirectLink, setRedirectLink] = useState('');
	const goToLink = (voteURL) => {
		props.toggleStateInfo(voteURL);
	}
    return (
			<div>
				<Dropdown>
					<Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components'>
						Select a state
					</Dropdown.Toggle>

					<Dropdown.Menu as={CustomMenu}>
						{stateData.map((st, i) => {
							return (
								<Dropdown.Item key={i} onClick={() => goToLink(`${st.url}`)}>{st.name}</Dropdown.Item>
							)
						})}
						{/* <Dropdown.Item onClick={() => goToLink('http://www.google.com')} eventKey='1'>Alabama</Dropdown.Item>
						<Dropdown.Item eventKey='2'>Alaska</Dropdown.Item>
						<Dropdown.Item eventKey='3'>Arizona</Dropdown.Item>
						<Dropdown.Item eventKey='4'>Arkansas</Dropdown.Item>
						<Dropdown.Item eventKey='5'>California</Dropdown.Item>
						<Dropdown.Item eventKey='6'>Colorado</Dropdown.Item>
						<Dropdown.Item eventKey='7'>Connecticut</Dropdown.Item>
						<Dropdown.Item eventKey='8'>Delaware</Dropdown.Item>
						<Dropdown.Item eventKey='9'>Florida</Dropdown.Item>
						<Dropdown.Item eventKey='10'>Georgia</Dropdown.Item>
						<Dropdown.Item eventKey='11'>Hawaii</Dropdown.Item>
						<Dropdown.Item eventKey='12'>Idaho</Dropdown.Item>
						<Dropdown.Item eventKey='13'>Illinois</Dropdown.Item>
						<Dropdown.Item eventKey='14'>Indiana</Dropdown.Item>
						<Dropdown.Item eventKey='15'>Iowa</Dropdown.Item>
						<Dropdown.Item eventKey='16'>Kansas</Dropdown.Item>
						<Dropdown.Item eventKey='17'>Kentucky</Dropdown.Item>
						<Dropdown.Item eventKey='18'>Louisiana</Dropdown.Item>
						<Dropdown.Item eventKey='19'>Maine</Dropdown.Item>
						<Dropdown.Item eventKey='20'>Maryland</Dropdown.Item>
						<Dropdown.Item eventKey='21'>Massachusetts</Dropdown.Item>
						<Dropdown.Item eventKey='22'>Michigan</Dropdown.Item>
						<Dropdown.Item eventKey='23'>Minnesota</Dropdown.Item>
						<Dropdown.Item eventKey='24'>Mississippi</Dropdown.Item>
						<Dropdown.Item eventKey='25'>Missouri</Dropdown.Item>
						<Dropdown.Item eventKey='26'>Montana</Dropdown.Item>
						<Dropdown.Item eventKey='27'>Nebraska</Dropdown.Item>
						<Dropdown.Item eventKey='28'>Nevada</Dropdown.Item>
						<Dropdown.Item eventKey='29'>New Hampshire</Dropdown.Item>
						<Dropdown.Item eventKey='30'>New Jersey</Dropdown.Item>
						<Dropdown.Item eventKey='31'>New Mexico</Dropdown.Item>
						<Dropdown.Item eventKey='32'>New York</Dropdown.Item>
						<Dropdown.Item eventKey='33'>North Carolina</Dropdown.Item>
						<Dropdown.Item eventKey='34'>North Dakota</Dropdown.Item>
						<Dropdown.Item eventKey='35'>Ohio</Dropdown.Item>
						<Dropdown.Item eventKey='36'>Oklahoma</Dropdown.Item>
						<Dropdown.Item eventKey='37'>Oregon</Dropdown.Item>
						<Dropdown.Item eventKey='38'>Pennsylvania</Dropdown.Item>
						<Dropdown.Item eventKey='39'>Rhode Island</Dropdown.Item>
						<Dropdown.Item eventKey='40'>South Carolina</Dropdown.Item>
						<Dropdown.Item eventKey='41'>South Dakota</Dropdown.Item>
						<Dropdown.Item eventKey='42'>Tennessee</Dropdown.Item>
						<Dropdown.Item eventKey='43'>Texas</Dropdown.Item>
						<Dropdown.Item eventKey='44'>Utah</Dropdown.Item>
						<Dropdown.Item eventKey='45'>Vermont</Dropdown.Item>
						<Dropdown.Item eventKey='46'>Virginia</Dropdown.Item>
						<Dropdown.Item eventKey='47'>Washington</Dropdown.Item>
						<Dropdown.Item eventKey='48'>West Virginia</Dropdown.Item>
						<Dropdown.Item eventKey='49'>Wisconsin</Dropdown.Item>
						<Dropdown.Item eventKey='50'>Wyoming</Dropdown.Item> */}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		);
}

export default Register;