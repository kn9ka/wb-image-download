import type { ProductMedia } from "../model/ProductMedia";

export const getPhotoMedia = (media: ProductMedia[]) =>
  media.filter((item) => item.type === "photo");

export const getVideoMedia = (media: ProductMedia[]) =>
  media.filter((item) => item.type === "video");
