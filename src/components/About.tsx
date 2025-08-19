import 'font-awesome/css/font-awesome.min.css'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const About = () => {
  return (
	<section className='d-flex flex-column align-items-center text-center'>

		<article className="row pb-5 art1" id="">
			<h3>Um pouco sobre mim</h3>

			<h2>Niteroiense.</h2>
			<p>Iniciei o curso de sistemas da Informação no ano de 2021, no Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET) na instituição de Nova Friburgo, onde cursei por 2 anos. Em seguida passei na transferência interinstitucional para a Universidade Federal Fluminense (Uff), onde curso atualmente</p>

		</article>

		<article className="row pb-5">
			<h3>Quais são meus Objetivos?</h3>

			<ol>
				<li>Conseguir um estágio na área de tecnologia</li>

				<li>Concluir meu curso da faculdade</li>

				<li>Aumentar minha experiência na área</li> 
			</ol>
		</article>
		
		<article className="row">
			<h3>Contato</h3>
			<div>
				{/* Instagram */}
				<div className="contato-item">
					<i style={{ fontSize: '30px' }} className="fa fa-instagram"></i>
					<div className="mensagem">
					<p>@arthur_jaf</p>
					</div>
				</div>

				{/* Email */}
				<div className="contato-item">
					<i style={{ fontSize: '30px' }} className="fa fa-envelope"></i>
					<div className="mensagem">
					<p>arthurjaf@gmail.com</p>
					</div>
				</div>

				{/* LinkedIn */}
				<div className="contato-item">
					<i style={{ fontSize: '30px' }} className="fa fa-linkedin"></i>
					<div className="mensagem">
					<p>linkedin.com/in/arthur-jaf</p>
					<div className="mensagem-hover">Clique e copie</div>
					</div>
				</div>
			</div>
		</article>
	</section>
  )
}
export default About
