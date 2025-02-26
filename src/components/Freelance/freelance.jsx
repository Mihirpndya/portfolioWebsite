/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./freelance.css";
import { resume } from "../../utility/resumeBuilder";

const Freelance = ({ reference }) => {
	const [isVisible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setVisible(true);
				observer.unobserve(reference.current);
			}
		});
		observer.observe(reference.current);
		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={reference}
			className={`relative w-full view-section ${
				isVisible ? " is-visible" : ""
			}`}
		>
			<img
				className="object-cover h-full w-full"
				alt="lake"
				src={require("../../images/lake.jpg")}
			/>
			<div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
				<div className="container mx-auto flex flex-col text-center relative 2xl:mb-10">
					<div className="row justify-content-center">
						<div className="col-md-7 ftco-animate text-center fadeInUp ftco-animated">
							<h2
								dangerouslySetInnerHTML={{ __html: resume.hireMeHeader }}
								className="freelance-header text-3xl md:text-5xl"
							/>
							<p className="mb-0 mt-8">
								<a href={`mailto:${resume.email}`}>
									<button className="btn btn-primary py-3 px-5">
										Contact me
									</button>
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Freelance;
