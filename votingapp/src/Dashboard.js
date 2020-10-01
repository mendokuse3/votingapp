import React from 'react';
import './CSS/Dashboard.css'
function Dashboard(props) {
	const handleClick = (index) => {
		props.goToCandidate(index);
	}
	return (
		<div>
			<div className='topImgs'>
				<img onClick={() => props.goToQuestions()} className='match' src='https://user-images.githubusercontent.com/62581000/94751369-6c102400-0356-11eb-81f0-d92e4ddfbd71.png' />
				<img onClick={() => props.goToRegister()} className='register' src='https://user-images.githubusercontent.com/62581000/94752695-f443f880-0359-11eb-9ddc-a8bd934e84f9.png' />
			</div>

			<div className='candidates'>
				<div className='left'>
					<img onClick={() => handleClick('1')} src='https://user-images.githubusercontent.com/62581000/94752758-26edf100-035a-11eb-92d1-141b29a729c2.png' />

					<img onClick={() => handleClick('2')} src='https://user-images.githubusercontent.com/62581000/94753141-518c7980-035b-11eb-926d-8f1960bb254a.png' />
				</div>


				<div className='right'>
					<img onClick={() => handleClick('0')} src='https://user-images.githubusercontent.com/62581000/94753427-32421c00-035c-11eb-8dba-66810495ec84.png' />

					<img onClick={() => handleClick('3')} src='https://user-images.githubusercontent.com/62581000/94753532-78977b00-035c-11eb-91af-bbea06fa7285.png' />

				</div>


			</div>
		</div>
	);
}

export default Dashboard;