import React from 'react';
import {
	FaHtml5,
	FaReact,
	FaMobileAlt,
	FaRocket,
	FaOsi,
} from 'react-icons/fa';

import {
AiFillTrophy,
} from 'react-icons/ai';

import {
GiBookshelf,
} from 'react-icons/gi';

import {
RiTeamLine,
} from 'react-icons/Ri';

import { Link } from "gatsby"
import './style.scss';
import Emoji from './emoji';
import ResectLogo from '../images/img/resect.png'
import FixitLogo from '../images/fix-it.png'

const Midsection = () => (
	<div>
<section className="section">
	<div class="container">
		<h1 className="title is-size-4-mobile">British Urology Researchers in Surgical Training (BURST) Research Collaborative</h1>
				<hr></hr>
		<h2 className="subtitle is-size-5-mobile">
			The BURST Research Collaborative is a research group comprising primarily of Urological Registrars in the UK.  The aim of the BURST Research Collaborative is to produce high impact multi-centre audit and research which can improve patient care.
		</h2>
	</div>
	</section>
		<section className="section">
			<div className="container">
				<div className="columns is-multiline">
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-large">
									<AiFillTrophy size="8em" color="#FFD700" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4 is-size-5-mobile">Achievements</h1>
									<p className="subtitle is-size-5 is-size-6-mobile" >
										BURST is commited to achieving high quality research to improve patient care and have received several accolades in this pursuit.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-large">
									<GiBookshelf size="8em" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4 is-size-5-mobile">Education</h1>
									<p className="subtitle is-size-5 is-size-6-mobile">
										BURST is committed to education in the field of research – see our education video series developed by Arjun Nambiar as well as the training session on research skills.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-large">
									<RiTeamLine size="8em" color="#5e227f" />
								</span>
							</figure>
							<div className="media-content">
							<Link to="/about/committee-members#point">
								<div className="content">
									<h1 className="title is-size-4 is-size-5-mobile">Committee Members</h1>
									<p className="subtitle is-size-5 is-size-6-mobile">
										The BURST committee comprises of a core committee as well as an advisory board of senior members and international representatives.
									</p>
								</div>
								</Link>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>

		<div class="tile is-ancestor">
		  <div class="tile is-parent">
		    <div class="tile is-child box">
		      <p className="title is-size-5-mobile">BURST in 60seconds</p>
					<hr></hr>
					<figure class="image is-16by9">
					  <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/h78jstiu9jc" frameborder="0" allowfullscreen></iframe>
					</figure>
					</div>
		  </div>
		  <div class="tile is-parent">
			<div class="tile is-child box">
				<p className="title is-size-5-mobile">BURST at BAUS 2019 Glasgow</p>
				<hr></hr>
				<figure class="image is-16by9">
					<iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/j6_vFD5yplk" frameborder="0" allowfullscreen></iframe>
				</figure>
			</div>
		</div>
		</div>

		<section className="section">

		<h1 className="title is-size-4-mobile">Our Latest Projects</h1>
				<hr></hr>

				<div class="tile is-ancestor">
				  <div class="tile is-parent">
					<Link to="/Studies/Resect/Overview">
				    <div class="tile is-child box">
							<figure className="media-content">
									<img id="imgcentre2" src={ResectLogo}></img>
							</figure>
							<h1 className="is-size-4 is-size-5-mobile">Transurethral REsection and Single instillation mitomycin C Evaluation in bladder Cancer Treatment (RESECT)
							Improving quality in TURBT surgery
							RESECT is a new GLOBAL prospective multi-centre international observational study starting in 2020.</h1>
							</div>
							</Link>
				  </div>
				  <div class="tile is-parent">
					<div class="tile is-child box">
						<figure className="media-content is-horizontal-center">
								<img id="imgcentre2" src={FixitLogo}></img>
						</figure>
					</div>
				</div>
				</div>
		</section>

	</div>
);

export default Midsection;
