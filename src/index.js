import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hi(props) {
	return <div>Jello {props.name}!</div>;
}

const MediaCard = ({ title, body, ImageUrl}) => (
	<div>
    <Hi />
	<h1>{process.env.REACT_APP_SECRET1}</h1>
    <h2>{title}</h2>
    <p>{body}</p>
    <img src={ImageUrl} alt="its a damn ball"/>
    <Gate isOpen={true}/>
	</div>
)

const Gate = ({isOpen}) => (
	<div>
		{isOpen ? "open" : "closed"}
	</div>
)


ReactDOM.render(
    <MediaCard title="ABDUL QYDOSS" body={<p><b>ASLAM</b> is not a MAN</p>} ImageUrl="https://www.apollosports.pk/wp-content/uploads/2018/09/CA-GOLD-TENNIS-CRICKET-BALL-2.jpg"/>,
  document.getElementById('root')
);

