export const ProductMediaType = {
  PHOTO: "photo",
  VIDEO: "video",
} as const;
export type ProductMediaType = (typeof ProductMediaType)[keyof typeof ProductMediaType];

export type ProductMedia = {
  downloadUrl: string;
  fileName: string;
  id: string;
  label: string;
  previewUrl: string;
  type: ProductMediaType;
};
