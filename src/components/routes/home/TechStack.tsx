import {
	FaLaravel,
	FaNodeJs,
	FaPhp,
	FaPython,
	FaReact,
	FaRust,
} from "react-icons/fa";
import {
	SiDjango,
	SiElasticsearch,
	SiFastapi,
	SiNextdotjs,
	SiPostgresql,
	SiRedis,
	SiTypescript,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

export const TechStack = () => {
	return (
		<section className="flex flex-col items-center justify-center gap-2 mb-20">
			<h2 className="text-center text-3xl pb-5 text-white">Tech Stack</h2>
			<div className="h-0.5 w-3/12 border-b-2 border-white"></div>
			<div className="mt-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
				<div className="bg-secondary text-center p-2 rounded-lg text-white">
					<FaReact
						style={{
							display: "block",
							margin: "auto",
							width: "100px",
							height: "100px",
							color: "#ffffff",
						}}
					/>
					<p>
						<b>React JS</b>
					</p>
				</div>
				<div className="bg-secondary text-center p-2 rounded-lg text-white">
					<SiNextdotjs
						style={{
							display: "block",
							margin: "auto",
							width: "100px",
							height: "100px",
							color: "#ffffff",
						}}
					/>
					<p>
						<b>Next JS</b>
					</p>
				</div>
				<div className="bg-secondary text-center p-2 rounded-lg text-white">
					<SiTypescript
						style={{
							display: "block",
							margin: "auto",
							width: "100px",
							height: "100px",
							color: "#ffffff",
						}}
					/>
					<p>
						<b>Typescript</b>
					</p>
				</div>
				<div className="bg-secondary  text-center p-2 rounded-lg text-white">
					<FaNodeJs
						style={{
							display: "block",
							margin: "auto",
							width: "100px",
							height: "100px",
							color: "#ffffff",
						}}
					/>
					<p>
						<b>Node JS</b>
					</p>
				</div>
				<div className="bg-secondary  text-center p-2 rounded-lg text-white">
					<SiFastapi
						style={{
							display: "block",
							margin: "auto",
							width: "100px",
							height: "100px",
							color: "#ffffff",
						}}
					/>
					<p>
						<b>FastApi</b>
					</p>
				</div>
				<div className="bg-secondary  text-center p-2 rounded-lg text-white">
					<SiDjango
						style={{
							display: "block",
							margin: "auto",
							width: "100px",
							height: "100px",
							color: "#ffffff",
						}}
					/>
					<p>
						<b>Django</b>
					</p>
				</div>
				<div className="bg-secondary  text-center p-2 rounded-lg text-white">
					<FaPython
						style={{
							display: "block",
							margin: "auto",
							width: "100px",
							height: "100px",
							color: "#ffffff",
						}}
					/>
					<p>
						<b>Python</b>
					</p>
				</div>
				<div className="bg-secondary  text-center p-2 rounded-lg text-white">
					<FaLaravel
						style={{
							display: "block",
							margin: "auto",
							width: "100px",
							height: "100px",
							color: "#ffffff",
						}}
					/>
					<p>
						<b>Laravel</b>
					</p>
				</div>
				<div className="bg-secondary  text-center p-2 rounded-lg text-white">
					<FaPhp
						style={{
							display: "block",
							margin: "auto",
							width: "100px",
							height: "100px",
							color: "#ffffff",
						}}
					/>
					<p>
						<b>PHP</b>
					</p>
				</div>
				<div className="bg-secondary  text-center p-2 rounded-lg text-white">
					<TbBrandGolang
						style={{
							display: "block",
							margin: "auto",
							width: "100px",
							height: "100px",
							color: "#ffffff",
						}}
					/>
					<p>
						<b>Golang</b>
					</p>
				</div>
				<div className="bg-secondary  text-center p-2 rounded-lg text-white">
					<FaRust
						style={{
							display: "block",
							margin: "auto",
							width: "100px",
							height: "100px",
							color: "#ffffff",
						}}
					/>
					<p>
						<b>Rust</b>
					</p>
				</div>
				<div className="bg-secondary  text-center p-2 rounded-lg text-white">
					<SiPostgresql
						style={{
							display: "block",
							margin: "auto",
							width: "100px",
							height: "100px",
							color: "#ffffff",
						}}
					/>
					<p>
						<b>Postgresql</b>
					</p>
				</div>
				<div className="bg-secondary  text-center p-2 rounded-lg text-white">
					<SiRedis
						style={{
							display: "block",
							margin: "auto",
							width: "100px",
							height: "100px",
							color: "#ffffff",
						}}
					/>
					<p>
						<b>Redis</b>
					</p>
				</div>
				<div className="bg-secondary  text-center p-2 rounded-lg text-white">
					<SiElasticsearch
						style={{
							display: "block",
							margin: "auto",
							width: "100px",
							height: "100px",
							color: "#ffffff",
						}}
					/>
					<p>
						<b>Elasticsearch</b>
					</p>
				</div>
			</div>
			<p className="text-white max-w-125 text-justify">
				And it still growing. I always improve myself to learn new technology.
				To be honest it's more important to know when to use it rather than how
				to use it.
			</p>
		</section>
	);
};
