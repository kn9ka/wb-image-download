export const media = [
  { id: "photo-1", label: "Фото 1", type: "photo" },
  { id: "photo-2", label: "Фото 2", type: "photo" },
  { id: "photo-3", label: "Фото 3", type: "photo" },
  { id: "photo-4", label: "Фото 4", type: "photo" },
  { id: "video-1", label: "Видео 1", type: "video" },
  { id: "video-2", label: "Видео 2", type: "video" },
] as const;

export const allMediaIds = media.map(({ id }) => id);
