export interface Education {
  school: string;
	bullets: [string, string][];
}

export const education: Education[] = [
  {
    school: 'Nashville Software School',
    bullets: [
			['2019-2020', 'Junior Full Stack Developer'],
    ],
  },
	{
		school: 'Hispana',
		bullets: [
			['2011', 'Spanish Language and Culture (Lima, Peru)'],
		]
	},
	{
		school: 'Tennessee Foreign Language Institute',
		bullets: [
			['2011', 'Certificate to Teach English as a Second Language']
		]
	},
	{
		school: 'Middle Tennessee State University',
		bullets: [
			['2002-2010', 'Bachelor of Arts in Spanish'],
			['Minors: Business Administration, Nutrition and Food Science', ''],
		]
	},
	{
		school: 'United States Army',
		bullets: [
			['2012', 'Paralegal Specialist Course'],
			['2010', 'Advanced Leadership Course'],
			['2007', 'Postal Operations Course'],
			['2007', 'Warrior Leadership Course']
		]
	}
];