import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
// import ImgSrc from "../Image/myimage.jpg";

const Section = ({ data }) => {
	console.log(data);
	return (
		<>
			<h2 style={{ textAlign: 'center' }}>{data.title}</h2>
			<div className={styles.section}>
				<div className={`${styles.box} ${styles.sectionImage}`}>
					<Image
						className={styles.img}
						src={data.imageSrc}
						alt={data.title}
						width={500}
						height={500}
						// layout="fill"
						// sizes="50vw"
					/>
				</div>
				<div className={`${styles.box} ${styles.sectionData}`}>
					<h3>
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
					</h3>
					<Link href='/about'>
						<button className={styles.readMoreBtn}>Read More</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Section;
