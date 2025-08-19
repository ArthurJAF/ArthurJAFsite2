import 'font-awesome/css/font-awesome.min.css'
import styles from './Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export const About = () => {
  return (
	<section className='d-flex flex-column align-items-center text-center '>
		<article className={`pb-5 ${styles.article}`}>
			<h3 className={`${styles.h3}`}>Quem sou eu ?</h3>

			<h2 className={`${styles.h2}`}>Olá, me chamo Arthur Jardim!</h2>
			<div className="">
				<img src="/minha foto.jpg" alt="Foto" className={`${styles.img}`}/>
			</div>
	
			<p className={`${styles.p}`}>Sou estudante de Sistemas da Informação na Universidade Federal Fluminense - Uff.</p>

			
			<a className={`btn btn-secondary ${styles.a}`} href="download/CV Arthur Jardim A Ferreira.pdf" download>Download CV</a>

			<button className={`btn btn-primary ${styles.button}`} id="">Contato<i className="fa">&#xf138;</i></button>	
		</article >
	</section>
  )
}
export default About
