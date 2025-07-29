export interface Experience {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Lume Deodorant',
    role: 'Senior Data Engineer (Backend)',
    dates: 'May 2023 - Jul 2025',
		bullets: [
			'Assumed full responsibility and became the primary maintainer of a custom, high-volume ETL pipeline within 6 months of hire, integrating data from sources like Shopify, Amazon, Target, Walmart, and UPS.',
			'Implemented advanced data storage solutions with PostgreSQL, Google Cloud Storage, and Google BigQuery, with the aim of enhancing system reliability through increased redundancy and improving backup capabilities to ensure data integrity.',
			'Spearheaded eﬀorts to refactor existing enterprise data pipelines, like introducing advanced customization for data requests and modularizing pipelines to extend support for multiple Google Cloud Platform (GCP) projects.',
			'Architected and implemented a comprehensive Vitest (originally Jest) testing suite, transitioning from no tests to achieving over 80% test coverage within a year of hire, substantially improving code reliability and system stability.',
			'Created and maintained comprehensive documentation for our team, encompassing topics like on-boarding procedures, testing protocols, and API documentation, significantly elevating knowledge sharing and team productivity.',
			'Led cross-functional initiatives and refined the team\'s roadmap based on the needs of the stakeholders.',
			'Primary technologies: JavaScript, Node.js (Express), PostgreSQL, GCP (App Engine, BigQuery, Cloud Build, Cloud Scheduler, Cloud Storage, Compute Engine, Secret Manager), AWS S3, FTP/SFTP, Jest, Vitest',
		]
  },
	{
		company: 'Built Technologies',
		role: 'Software Engineer (Full Stack)',
		dates: 'Jul 2022 - Feb 2023',
		bullets: [
			'Bootstrapped and owned a crucial microservice to modernize and deprecate an existing business service.',
			'Worked on a cross-functional product team and collaborated with other teams to provide support in delivering time-sensitive features.',
			'Actively participated in Agile process - work breakdown, refinement, estimation, planning, and execution of software development work as part of a scrum team.',
			'Regularly performed code and design plan reviews, provided programming estimates, identified potential problems, and recommended alternative solutions to improve existing features and workflows.',
			'Primary technologies: TypeScript, React.js, Node.js (Express), GraphQL, AWS (DynamoDB, S3, Cloud9), Jest, React Testing Library, Git, Github.',
		]
	},
	{
		company: 'Planview - LeanKit',
		role: 'Software Developer (Backend)',
		dates: 'Mar 2020 - Jul 2022',
		bullets: [
			'Built, evolved, deployed, monitored, and maintained backend microservices to power critical user experiences with focus on high availability, low latency, and scalability',
			'Modified and added new features and RESTful API routes.',
			'Maintained 100% test coverage for unit and integration tests for backend services and APIs.',
			'Troubleshooted and resolved production code and platform issues.',
			'Participated in software design and code reviews.',
			'Researched and applied new technologies as appropriate.',
			'Primary technologies: JavaScript, Node.js (Express, Hapi, Fastify), SQL Server, PostgreSQL, Mocha + Chai, Docker, Git, Github.',
		]
	},
	{
		company: 'Department of Veterans Affairs',
		role: 'Rating Veterans Service Representative',
		dates: 'Oct 2011 - Mar 2020',
		bullets: [
			'Made decisions regarding Veteran disability claim determination, to include determining if a claimed disease or disability was incurred in or aggravated by military service; the severity of such disability (service-connection percentage); and the entitlement to any ancillary benefits.',
			'Assured proper application of the VA\'s disability Rating Schedule and other applicable instructions, and accountability for proper analysis; appropriate development; and accurate final rating determination.',
			'Provided consultative advice to supporting team members to help develop their skills in gathering evidence for rating decisions.',
			'Acted as an advocate for Veterans and their beneficiaries between the VA and any other organizations that aﬀect their claims.',
		]
	},
	{
		company: 'United States Army Reserve',
		role: 'Senior Paralegal NCO',
		dates: 'Sep 2004 - Apr 2014',
		bullets: [
			'Served in the U.S. Army Reserve for 10 years, working as a Human Resources Sergeant for roughly 8 years and a Senior Paralegal NCO for roughly 2 years.',
			'Acted as First Sergeant for the unit, mentoring junior enlisted soldiers and improving team growth and collaboration.',
			'Designed and implemented training programs to meet unit requirements.',
			'Supervised the administration of all military justice matters, including courts-martial.',
			'Maintained a Secret Security Clearance.',
		]
	},
	{
		company: 'United States Army',
		role: 'Postal Sergeant/Supply Sergeant',
		dates: 'Jun 2007 - Aug 2008',
		bullets: [
			'Served as a Postal Sergeant, Unit Information Management Oﬃcer, Technical Inspector, and Supply NCO in an Army Post Oﬃce (APO) unit deployed in support of Operation Iraqi Freedom (OIF) 07-08 servicing over 120 units and more than 20,000 Soldiers, DoD civilians, and contractors.',
			'Assisted the Technical Inspector with inspecting over 120 unit mail rooms',
			'Trained over 200 unit mail clerks in proper mail room procedures.',
			'Ordered and maintained supplies and materials for the Camp Taji APO and the Postal unit that exceed a value of $500,000.',
		]
	},
];