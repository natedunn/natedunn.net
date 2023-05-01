import * as z from 'zod';

export const ImageSchema = z.object({
  size: z.union([z.null(), z.string()]).optional(),
  '#text': z.union([z.null(), z.string()]).optional(),
});
export type Image = z.infer<typeof ImageSchema>;

export const DateClassSchema = z.object({
  uts: z.union([z.null(), z.string()]).optional(),
  '#text': z.union([z.null(), z.string()]).optional(),
});
export type DateClass = z.infer<typeof DateClassSchema>;

export const AlbumSchema = z.object({
  mbid: z.union([z.null(), z.string()]).optional(),
  '#text': z.union([z.null(), z.string()]).optional(),
});
export type Album = z.infer<typeof AlbumSchema>;

export const TrackSchema = z.object({
  artist: z.union([AlbumSchema, z.null()]).optional(),
  streamable: z.union([z.null(), z.string()]).optional(),
  image: z.union([z.array(ImageSchema), z.null()]).optional(),
  mbid: z.union([z.null(), z.string()]).optional(),
  album: z.union([AlbumSchema, z.null()]).optional(),
  name: z.union([z.null(), z.string()]).optional(),
  url: z.union([z.null(), z.string()]).optional(),
  date: z.union([DateClassSchema, z.null()]).optional(),
});
export type Track = z.infer<typeof TrackSchema>;

export const AttrSchema = z.object({
  user: z.union([z.null(), z.string()]).optional(),
  totalPages: z.union([z.null(), z.string()]).optional(),
  page: z.union([z.null(), z.string()]).optional(),
  perPage: z.union([z.null(), z.string()]).optional(),
  total: z.union([z.null(), z.string()]).optional(),
});
export type Attr = z.infer<typeof AttrSchema>;

export const RecenttracksSchema = z.object({
  track: z.union([z.array(TrackSchema), z.null()]).optional(),
  '@attr': z.union([AttrSchema, z.null()]).optional(),
});
export type Recenttracks = z.infer<typeof RecenttracksSchema>;

export const LastFmResponseSchema = z.object({
  recenttracks: z.union([RecenttracksSchema, z.null()]).optional(),
});
export type LastFmResponse = z.infer<typeof LastFmResponseSchema>;
