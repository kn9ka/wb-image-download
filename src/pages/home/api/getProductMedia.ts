import type { ProductMedia } from "../model/ProductMedia";

import z, { type ZodType } from "zod";

import {
  getWildberriesCardInfoUrl,
  getWildberriesPhotoUrl,
  getWildberriesVideoUrl,
} from "@/shared/lib";

const hostsSchema = z.array(
  z.object({
    host: z.string(),
    vol_range_from: z.number(),
    vol_range_to: z.number(),
  }),
);
const upstreamsSchema = z.object({
  origin: z.object({
    mediabasket_route_map: z.array(z.object({ hosts: hostsSchema })),
    videonme_route_map: z.array(z.object({ hosts: hostsSchema })),
  }),
});
const cardInfoSchema = z.object({
  media: z.object({ has_video: z.boolean().optional() }).optional(),
});
const cardDetailSchema = z.object({
  products: z.array(
    z.object({ id: z.number().int().positive(), pics: z.number().int().nonnegative() }),
  ),
});

const fetchJson = async <T>({
  errorMessage,
  schema,
  url,
}: {
  errorMessage: string;
  schema: ZodType<T>;
  url: string;
}) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(errorMessage);
  }

  const result = schema.safeParse(await response.json().catch(() => undefined));

  if (!result.success) {
    throw new Error(errorMessage);
  }

  return result.data;
};

export const getProductMedia = async (articleId: string): Promise<ProductMedia[]> => {
  const query = new URLSearchParams({
    appType: "1",
    curr: "rub",
    dest: "-1257786",
    locale: "ru",
    nm: articleId,
  });
  const cardDetails = await fetchJson({
    errorMessage: "Не удалось получить карточку",
    schema: cardDetailSchema,
    url: `/api/wb/cards/v4/detail?${query}`,
  });
  const card = cardDetails.products.find(({ id }) => id === Number(articleId));

  if (!card) {
    throw new Error("Карточка не найдена");
  }

  const upstreams = await fetchJson({
    errorMessage: "Не удалось получить карту CDN",
    schema: upstreamsSchema,
    url: "https://cdn.wbbasket.ru/api/v3/upstreams",
  });
  const photoHosts = upstreams.origin.mediabasket_route_map[0]?.hosts;

  if (!photoHosts) {
    throw new Error("Для артикула не найден CDN-хост");
  }

  const getPhotoUrl = (index: number, size: "big" | "c246x328") => {
    const url = getWildberriesPhotoUrl({
      articleId: card.id,
      hosts: photoHosts,
      index,
      size,
    });

    if (!url) {
      throw new Error("Для артикула не найден CDN-хост");
    }

    return url;
  };

  const videoPreviewUrl = getPhotoUrl(1, "c246x328");
  const photos = Array.from({ length: card.pics }, (_, index): ProductMedia => {
    const number = index + 1;

    return {
      downloadUrl: getPhotoUrl(number, "big"),
      fileName: `photo-${number}.webp`,
      id: `photo-${number}`,
      label: `Фото ${number}`,
      previewUrl: getPhotoUrl(number, "c246x328"),
      type: "photo",
    };
  });

  const cardInfoUrl = getWildberriesCardInfoUrl({ articleId: card.id, hosts: photoHosts });

  if (!cardInfoUrl) {
    return photos;
  }

  const cardInfo = await fetchJson({
    errorMessage: "Не удалось получить данные карточки",
    schema: cardInfoSchema,
    url: cardInfoUrl,
  });

  if (!cardInfo.media?.has_video) {
    return photos;
  }

  const videoHosts = upstreams.origin.videonme_route_map[0]?.hosts;

  if (!videoHosts) {
    return photos;
  }

  const videoUrl = getWildberriesVideoUrl({
    articleId: card.id,
    hosts: videoHosts,
    name: "index.m3u8",
    quality: "1440p",
  });

  if (!videoUrl) {
    return photos;
  }

  // ponytail: WB card metadata has no product-video preview; use the first photo until it does.
  return [
    ...photos,
    {
      downloadUrl: videoUrl,
      fileName: "video-1.mp4",
      id: "video-1",
      label: "Видео 1",
      previewUrl: videoPreviewUrl,
      type: "video" as const,
    },
  ];
};
