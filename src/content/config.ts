import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({image}) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		// heroImage: z.string().optional(),
		heroImage: image().optional(),
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

		skills: z.record(z.string(), z.array(z.string())),

		history: z.array(z.object({
			company: z.string(),
			positions: z.array(z.object({
				title: z.string(),
				summary: z.string(),
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
				accomplishments: z.array(z.string()),
			}))
		})),

		education: z.array(z.object({
			school: z.string(),
			degree: z.string(),			
			year: z.number()
		})),

		accomplishments: z.array(z.object({
			accomplishment: z.string(),
			year: z.string().optional(),
		})),
	})
})

export const collections = { blog, resume };
