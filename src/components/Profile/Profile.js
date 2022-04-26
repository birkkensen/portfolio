import s from './index.module.css';
import { ContactLink, DownLoadLink } from '../Links/Links';
const Profile = () => {
	return (
		<section className={s.wrapper}>
			<div className={s.textWrapper}>
				<Title />
				<Description />
				<div className={s.linksWrapper}>
					<ContactLink name='Contact' />
					<DownLoadLink />
				</div>
			</div>
			<ProfileImage />
		</section>
	);
};

const Title = () => {
	return (
		<h2 className={s.title}>
			Hello, I'm <br />
			Birk Kensén{' '}
		</h2>
	);
};

const Description = () => {
	return (
		<p>
			I'm currently studying the Frontend Developer program at Hyper Island in Stockholm. Now, I'm
			looking for an internship, starting in September this year. So far I've done everything from
			creating a simple web page in just HTML / CSS, to making web applications using React (like
			this website - PS. I'm now working on re-writing my portfolio using NextJS, Typescript and
			Tailwind, for practice{' '}
			<a className={s.tempoLink} href='https://github.com/birkkensen/portfolio-next-ts'>
				Link to project on Github
			</a>
			). I have also worked a lot with different APIs, Node.js and Phaser. I'm looking forward to
			learning and contributing a lot more during an internship.
			<br />
			<br />I don't know what my career goal is. All I know is that I'm 100% sure it has to do with
			some sort of programming. Right now I'm still exploring all the possibilities code has to
			offer, all the different ways I can express my creativity with it. Don't hesitate to contact
			me if you have any questions. :)
		</p>
	);
};

const ProfileImage = () => {
	return <img className={s.image} src='/images/me/meOnABike.jpeg' alt='Selfie' />;
};

export default Profile;
