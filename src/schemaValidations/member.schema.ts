import z from "zod";

export const MemberMetadata = z.object({
  id: z.string(),
  name: z.string(),
  title: z.string(),
  image: z.string().startsWith("http"),
  interest: z.array(z.string()).nullable().default(null),
  bio: z.string(),
  email: z.string().nullable(),
  draft: z.boolean(),
});

export type MemberMetadataType = z.TypeOf<typeof MemberMetadata>;

export const MemberSchema = z
  .object({
    metadata: MemberMetadata,
    detail: z.string(),
  })
  .describe("metadata");

export type MemberType = z.TypeOf<typeof MemberSchema>;

export const MemberResSchema = z.object({
  data: MemberSchema,
  message: z.string(),
});

export type MemberResType = z.TypeOf<typeof MemberResSchema>;

export const MemberCardSchema = z.object({
  id: z.string(),
  name: z.string(),
  title: z.string(),
  order: z.number().default(-1),
  draft: z.boolean().default(false),
  image: z.string().startsWith("http"),
});

export type MemberCardType = z.TypeOf<typeof MemberCardSchema>;

export const MemberListResSchema = z.object({
  data: z.array(MemberCardSchema),
  message: z.string(),
});

export type MemberListResType = z.TypeOf<typeof MemberListResSchema>;

export const CreateMemberBody = z.object({
  metadata: z.object({
    id: z.string(),
    name: z.string().min(1),
    title: z.string().min(1),
    image: z.string().transform((url) => {
      url = url.startsWith("/") ? url : "/" + url;
      return `/images${url}`;
    }),
    interest: z.array(z.string()).nullable().default(null),
    bio: z.string(),
    email: z.string().nullable().default(null),
    draft: z.boolean().default(false),
    order: z.number().default(-1),
  }),
  detail: z.string(),
});

export type CreateMemberType = z.TypeOf<typeof CreateMemberBody>;

export const UpdateMemberBody = z.object({
  metadata: z
    .object({
      name: z.string().min(1).optional(),
      title: z.string().min(1).optional(),
      image: z
        .string()
        .transform((imgName) => {
          if (imgName.startsWith("/images")) return imgName;

          return `/images/${imgName}`;
        })
        .optional(),
      interest: z.array(z.string()).nullable().default(null).optional(),
      bio: z.string().optional(),
      email: z.string().nullable().optional(),
      draft: z.boolean().optional(),
    })
    .optional(),
  detail: z.string().optional(),
});

export type UpdateMemberBodyType = z.TypeOf<typeof UpdateMemberBody>;

export const CreateUpdateRes = z.object({
  message: z.string(),
  data: MemberSchema,
});

export type CreateUpdateResType = z.TypeOf<typeof CreateUpdateRes>;
