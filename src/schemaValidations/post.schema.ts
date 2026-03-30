import z from "zod";

export const MetaDataSchema = z.object({
  id: z.string(),
  title: z.string(),
  publishDate: z.date(),
  draft: z.boolean(),
  thumbnail: z.string().startsWith("http"),
  sdgs: z.number().array().max(3),
  author: z.string().readonly(),
  description: z.string(),
  categories: z.number().array().optional(),
  slug: z.string(),
});
export type MetaDataType = z.TypeOf<typeof MetaDataSchema>;

export const PostSchema = z
  .object({
    content: z.string(),
    metadata: MetaDataSchema,
  })
  .describe("metadata");
export type PostType = z.TypeOf<typeof PostSchema>;

export const EventPostSchema = PostSchema.extend({
  metadata: PostSchema.shape.metadata.extend({
    eventTime: z.date(),
  }),
});
export type EventPostType = z.TypeOf<typeof EventPostSchema>;

export const PostResSchema = <T = PostType>(schema: z.ZodType<T, any, any>) =>
  z.object({
    data: schema,
    message: z.string(),
    posted_portal: z
      .object({
        portalCategories: z.array(z.number()),
        thumbnail: z.string(),
        background: z.string(),
      })
      .optional(),
  });
export type PostResType<T = PostType> = z.TypeOf<
  ReturnType<typeof PostResSchema<T>>
>;

export const PostCardSchema = z.object({
  id: z.string(),
  sdgs: z.number().array().nonempty().max(3),
  title: z.string(),
  publishDate: z.string(),
  draft: z.boolean(),
  thumbnail: z.string(),
  slug: z.string(),
  author: z.string(),
  description: z.string().nullable().optional(),
});
export type PostCardType = z.TypeOf<typeof PostCardSchema>;

export const EventCardSchema = PostCardSchema.extend({
  eventTime: z.string().nullable(),
});
export type EventCardType = z.TypeOf<typeof EventCardSchema>;

export const SummaryPostResSchema = z.object({
  data: z.array(PostCardSchema),
  message: z.string(),
});
export type SummaryPostResType = z.TypeOf<typeof SummaryPostResSchema>;

export const LatestPostSchema = PostCardSchema.extend({
  category: z.string(),
});
export type LatestPostType = z.TypeOf<typeof LatestPostSchema>;

export const LatestAdmissionCardSchema = LatestPostSchema.extend({
  content: z.string(),
});
export type LatestAdmissionCardType = z.TypeOf<
  typeof LatestAdmissionCardSchema
>;

export const PostListResSchema = <T = PostCardType>(
  schema: z.ZodType<T, any, any>,
) =>
  z.object({
    data: z.array(schema),
    totalPage: z.number(),
    message: z.string(),
  });
export type PostListResType<T = PostCardType> = z.TypeOf<
  ReturnType<typeof PostListResSchema<T>>
>;

export const LatestPostListResSchema = z.object({
  data: z.array(LatestPostSchema),
  totalPage: z.number(),
  message: z.string(),
});
export type LatestPostListResType = z.TypeOf<typeof LatestPostListResSchema>;

export const PendingPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  publishDate: z.date(),
  draft: z.boolean().default(false),
  thumbnail: z.string(),
  categories: z.number().array().nonempty(),
  author: z.string(),
  sdgs: z.string().array().max(3).nonempty(),
  lang: z.enum(["vi", "en"]),
});
export type PendingPostSchema = z.TypeOf<typeof PendingPostSchema>;

export const AllPendingPostResSchema = z.object({
  data: z.array(PendingPostSchema),
  message: z.string(),
});
export type AllPendingPostResType = z.TypeOf<typeof AllPendingPostResSchema>;

export const PendingPostResSchema = z.object({
  data: PostSchema.strict(),
  lang: z.enum(["vi", "en"]),
  message: z.string(),
});
export type PendingPostResType = z.TypeOf<typeof PendingPostResSchema>;

export const CreatePostBody = z.object({
  metadata: z.object({
    title: z.string().min(1),
    thumbnail: z.string(),
    draft: z
      .string()
      .transform((value) => value === "true")
      .pipe(z.boolean()),
    publishDate: z.date().default(new Date()),
    sdgs: z.number().array().nonempty().max(3),
    description: z.string().default(""),
    slug: z.string(),
  }),
  content: z.string().min(1),
});
export type CreatePostBodyType = z.TypeOf<typeof CreatePostBody>;

export const CreateEventBodySchema = CreatePostBody.extend({
  metadata: CreatePostBody.shape.metadata.extend({
    eventTime: z.date().or(z.string()),
  }),
});
export type CreateEventBodyType = z.TypeOf<typeof CreateEventBodySchema>;

export const UpdatePostBody = z.object({
  metadata: z
    .object({
      id: z.string(),
      title: z.string().min(1).optional(),
      thumbnail: z.string().optional(),
      draft: z
        .string()
        .transform((value) => value === "true")
        .pipe(z.boolean())
        .optional(),
      publishDate: z.date().default(new Date()).optional(),
      sdgs: z.number().array().nonempty().max(3).optional(),
      description: z.string().default("").optional(),
      categories: z.number().array().optional(),
      eventTime: z.date().or(z.string()).optional(),
      portal_thumb: z.string().optional(),
      portal_background: z.string().optional(),
    })
    .optional(),
  content: z.string().min(1).optional(),
});
export type UpdatePostBodyType = z.TypeOf<typeof UpdatePostBody>;

export const PostParamsRequest = z.object({
  title: z.string(),
});
export type PostParamsRequestType = z.TypeOf<typeof PostParamsRequest>;

export const CreateUpdateRes = z.object({
  message: z.string(),
  data: z.object({
    title: z.string().min(1),
    thumbnail: z.string(),
    draft: z
      .string()
      .transform((value) => value === "true")
      .pipe(z.boolean()),
    publishDate: z.date(),
    sdgs: z.number().array().nonempty().max(3),
    description: z.string().default(""),
    id: z.number(),
  }),
});
export type CreateUpdateResType = z.TypeOf<typeof CreateUpdateRes>;

export const CreatePortalPostBody = z.object({
  id: z.string().or(z.number()),
  lang: z.enum(["vi", "en"]),
  categories: z.number().or(z.string()).array().nonempty(),
  title: z.string(),
  shortDesc: z.string(),
  content: z.string(),
  thumbnail: z.string(),
  background: z.string(),
  sdgs: z.number().array().nonempty().max(3),
  publishDate: z.string().default(new Date().toISOString()),
  local_cate: z.enum([
    "news",
    "events",
    "evolving_research",
    "iscm_in_the_media",
    "open_admission",
  ]),
});

export type CreatePortalPostBodyType = z.TypeOf<typeof CreatePortalPostBody>;

export const UpdatePortalPostBody = z.object({
  id: z.string(),
  lang: z.enum(["vi", "en"]),
  title: z.string().min(1).optional(),
  categories: z.number().array().nonempty(),
  thumbnail: z
    .string()
    .transform((imgName) => {
      if (imgName.startsWith("/images")) return imgName;

      return `/images/${imgName}`;
    })
    .optional(),
  content: z.string().min(1).optional(),
  shortDesc: z.string().optional(),
  sdgs: z.number().array().nonempty().max(3).optional(),
  background: z
    .string()
    .transform((imgName) => {
      if (imgName.startsWith("/images")) return imgName;

      return `/images/${imgName}`;
    })
    .optional(),
});

export type UpdatePortalPostBodyType = z.TypeOf<typeof UpdatePortalPostBody>;

export const CreateUpdatePortalRes = z.object({
  message: z.string(),
  status: z.string(),
});
export type CreateUpdatePortalResType = z.TypeOf<typeof CreateUpdatePortalRes>;

// export const InTheMediaSchema = z.object({
//   id: z.number(),
//   title: z.string(),
//   author: z.string(),
//   description: z.string().optional(),
//   publishDate: z.date(),
//   type: z.enum(["pdf", "link"]),
//   url: z.string(),
// });
// export type InTheMediaType = z.TypeOf<typeof InTheMediaSchema>;

export const RecruitmentListSchema = z.object({
  id: z.number(),
  title: z.string(),
  applicationPeriod: z.date().nullable().optional(),
  publishDate: z.date(),
  progress: z.boolean().default(true),
  slug: z.string(),
  thumbnail: z.string(),
  jobType: z.string().nullable(),
});
export type RecruitmentListType = z.TypeOf<typeof RecruitmentListSchema>;

export const RecruitmentListResSchema = z.object({
  data: z.array(RecruitmentListSchema),
  message: z.string(),
});
export type RecruitmentListResType = z.TypeOf<typeof RecruitmentListResSchema>;

export const RecruitmentSchema = z.object({
  metadata: z.object({
    id: z.number(),
    title: z.string(),
    publishDate: z.date(),
    applicationPeriod: z.date().nullable().optional(),
    progress: z.boolean().default(true),
    thumbnail: z.string(),
    slug: z.string(),
  }),
  content: z.string(),
});
export type RecruitmentType = z.TypeOf<typeof RecruitmentSchema>;

export const RecruitmentResSchema = z.object({
  data: RecruitmentSchema,
  message: z.string(),
});
export type RecruitmentResType = z.TypeOf<typeof RecruitmentResSchema>;
