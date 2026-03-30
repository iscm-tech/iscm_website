import z from "zod";

export const CourseSchema = z.object({
  id: z.string(),
  title: z.string(),
  thumbnail: z.string().startsWith("http"),
  duration: z.string(),
  program_structure: z
    .array(
      z.object({
        years: z.string(),
        image: z.string().startsWith("http"),
      }),
    )
    .optional(),
  content: z.string(),
  gallery: z.array(z.string()).optional(),
});

export type CourseType = z.TypeOf<typeof CourseSchema>;

export const CourseCardSchema = z.object({
  id: z.string(),
  title: z.string(),
  thumbnail: z.string().startsWith("http"),
  duration: z.string(),
  order: z.number(),
  slug: z.string(),
});

export type CourseCardType = z.TypeOf<typeof CourseCardSchema>;

export const CourseListResSchema = z.object({
  data: z.array(CourseCardSchema),
  message: z.string(),
});

export type CourseListResType = z.TypeOf<typeof CourseListResSchema>;

export const CourseResSchema = z.object({
  data: CourseSchema.strict(),
  message: z.string(),
});

export type CourseResType = z.TypeOf<typeof CourseResSchema>;

export const NondegreeCourseSchema = z.object({
  id: z.number(),
  title: z.string(),
  duration: z.object({
    value: z.number(),
    unit: z.string(),
  }),
  thumbnail: z.string(),
  location: z.string(),
  language: z.enum(["vi", "en"]),
  level: z.enum(["beginner", "intermediate", "advanced"]),
  experienceRequirements: z.string().nullable().optional(),
  description: z.string(),
  slug: z.string(),
  objectives: z.string(),
  structure: z.array(
    z.object({
      title: z.string(),
      content: z.string().nullable().optional(),
      thumb: z.string(),
    }),
  ),
  instructors: z.array(
    z.object({
      name: z.string(),
      title: z.string().nullable().optional(),
      avatar: z.string(),
    }),
  ),
  offerBy: z
    .array(
      z.object({
        name: z.string(),
        avatar: z.string(),
      }),
    )
    .nullable()
    .optional(),
  summarize: z.array(
    z.object({
      title: z.string(),
      value: z.string().or(z.number()),
    }),
  ),
});
export type NondegreeCourseType = z.TypeOf<typeof NondegreeCourseSchema>;

export const NondegreeCourseCardSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  thumbnail: z.string(),
  duration: z.object({
    value: z.number(),
    unit: z.string(),
  }),
  location: z.string(),
  level: z.enum(["beginner", "intermediate", "advanced"]),
});
export type NondegreeCourseCardType = z.TypeOf<
  typeof NondegreeCourseCardSchema
>;

export const NondegreeCourseListResSchema = z.object({
  data: z.array(NondegreeCourseCardSchema),
  message: z.string(),
});
export type NondegreeCourseListResType = z.TypeOf<
  typeof NondegreeCourseListResSchema
>;

export const NondegreeCourseResSchema = z.object({
  data: NondegreeCourseSchema,
  message: z.string(),
});
export type NondegreeCourseResType = z.TypeOf<typeof NondegreeCourseResSchema>;
