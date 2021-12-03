import styles from '../styles/Home.module.css';
import Image from 'next/image';
const about = () => {
	return (
		<div className={styles.container}>
			<div className={styles.projectHero}>
				<h2>About Me</h2>
			</div>
			<div className={styles.project}>
				<div className={styles.box}>
					<Image
						src='/Images/IsahPhoto.jpg'
						alt='Isah-Ibrahim'
						width={400}
						height={400}
					/>
				</div>
				<div className={styles.box}>
					<h2>
						I am a Frontend Developer passionate about making the web accessible
						to everyone. I love sharing my knowledge which i have acquired and
						also ready to learn new things in other to evolve as new things are
						always introduced in the world. I love solving problems in other to
						improve the state of living in the world. I also love playing games,
						connecting with people on social media during my free times.
						<br />
						<br />I have good experience working with Reactjs, Nextjs,
						Javascript, Firebase. For styling i usually work with CSS,
						Styled-components, TailwindCSS and Material UI.
					</h2>
				</div>
			</div>
		</div>
	);
};

export default about;
