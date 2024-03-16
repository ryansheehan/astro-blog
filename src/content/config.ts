import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({image}) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		// heroImage: z.string().optional(),
		heroImage: image(),
	}),
});

const resume = defineCollection({
	type: 'data',
	schema: () => z.object({
		title: z.string(),
		summary: z.string(),

		contact: z.object({
			name: z.string(),
			phone: z.string(),
			email: z.string().email(),
			location: z.string(),
			links: z.array(z.object({
				name: z.string(),
				display: z.string(),
				url: z.string().url(),
			})),			
		}),

		skills: z.array(z.string()),

		highlights: z.array(z.object({
			title: z.string(),
			description: z.string(),
		})),

		history: z.array(z.object({
			company: z.string(),
			positions: z.array(z.object({
				title: z.string(),
				location: z.string(),
			 	dates: z.object({
			 		start: z.object({
			 			month: z.number(),
			 			year: z.number(),
			 		}),
			 		end: z.object({
			 			month: z.number(),
			 			year: z.number(),
			 		}).optional()
			 	}),
				responsibilities: z.array(z.string()),
			}))
		})),

		education: z.array(z.object({
			school: z.string(),
			degree: z.string(),			
			year: z.number()
		})),
	})
})

export const collections = { blog, resume };
