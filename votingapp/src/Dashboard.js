import React from 'react';
import './CSS/Dashboard.css'
function Dashboard(props) {
    return (
			<div>
				<header>
					<div className='match'>
						<h3 className='match-text'>
							MATCH WITH A CANDI<span className='date'>DATE</span>
						</h3>
					</div>
					<div className='register'>
						<h3 className='register-text'>
							REGISTER TO VOTE <span className='state'>IN YOUR STATE</span>
						</h3>
					</div>
				</header>
				<div className='candidates'>
					<h3 className='meet'>
						MEET THE CANDI<span class='dates'>DATES</span>
					</h3>
					<section className='incumbents'>
						<img src='https://user-images.githubusercontent.com/62581000/94752758-26edf100-035a-11eb-92d1-141b29a729c2.png' />
						<h4>Donald Trump</h4>
						<h5 className='gop'>Republican</h5>
						<h5 className='red'>Presidential Candidate</h5>
                        <br />
						<img src='https://user-images.githubusercontent.com/62581000/94753141-518c7980-035b-11eb-926d-8f1960bb254a.png' />
						<h4>Mike Pence</h4>
						<h5 className='gop'>Republican</h5>
						<h5 className='red'>V.P. Candidate</h5>
					</section>
                    <section className='opponents'>
                    <img src='https://user-images.githubusercontent.com/62581000/94753427-32421c00-035c-11eb-8dba-66810495ec84.png' />
						<h4>Joe Biden</h4>
						<h5 className='dem'>Democrat</h5>
						<h5 className='blue'>Presidential Candidate</h5>
                        <br />
						<img src='https://user-images.githubusercontent.com/62581000/94753532-78977b00-035c-11eb-91af-bbea06fa7285.png' />
						<h4>Kamala Harris</h4>
						<h5 className='dem'>Democrat</h5>
						<h5 className='blue'>V.P. Candidate</h5>
                    </section>
				</div>
			</div>
		);
}

export default Dashboard;