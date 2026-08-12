export type WildberriesCdnHost = {
  host: string;
  vol_range_from: number;
  vol_range_to: number;
};

type ImageSize = "tm" | "c246x328" | "c516x688" | "big" | "hq";
type VideoQuality = "720p" | "1080p" | "1440p";

export type GetWildberriesPhotoUrl = {
  articleId: number;
  hosts: WildberriesCdnHost[];
  index?: number;
  size: ImageSize;
};

export type GetWildberriesCardInfoUrl = {
  articleId: number;
  hosts: WildberriesCdnHost[];
};

export type GetWildberriesVideoUrl = {
  articleId: number;
  hosts: WildberriesCdnHost[];
  name: string;
  quality: VideoQuality;
};

/**
 * Finds the CDN host for the specified volume.
 *
 * @param volume - Volume number.
 * @param hosts - CDN hosts and their volume ranges.
 * @returns The host name, or `undefined` when no range matches.
 */
const getHost = (volume: number, hosts: WildberriesCdnHost[]) =>
  hosts.find(
    ({ vol_range_from, vol_range_to }) => volume >= vol_range_from && volume <= vol_range_to,
  )?.host;

/**
 * Builds an image URL by selecting a CDN host from the article ID.
 *
 * @param props - Image parameters.
 * @param props.articleId - Product article ID.
 * @param props.hosts - Available CDN hosts.
 * @param props.index - Image number. Defaults to `1`.
 * @param props.size - Image size.
 * @returns The URL, or `undefined` when no host matches.
 */
export const getWildberriesPhotoUrl = (props: GetWildberriesPhotoUrl) => {
  const { articleId, hosts, index = 1, size } = props;
  const volume = Math.floor(articleId / 100_000);
  const host = getHost(volume, hosts);

  return host
    ? `https://${host}/vol${volume}/part${Math.floor(articleId / 1_000)}/${articleId}/images/${size}/${index}.webp`
    : undefined;
};

/**
 * Builds the `card.json` URL by selecting a CDN host from the article ID.
 *
 * @param props - Card parameters.
 * @param props.articleId - Product article ID.
 * @param props.hosts - Available CDN hosts.
 * @returns The URL, or `undefined` when no host matches.
 */
export const getWildberriesCardInfoUrl = (props: GetWildberriesCardInfoUrl) => {
  const { articleId, hosts } = props;
  const volume = Math.floor(articleId / 100_000);
  const host = getHost(volume, hosts);

  return host
    ? `https://${host}/vol${volume}/part${Math.floor(articleId / 1_000)}/${articleId}/info/ru/card.json`
    : undefined;
};

/**
 * Builds an HLS video URL using the article ID to select a CDN host.
 *
 * @param props - Video parameters.
 * @param props.articleId - Product article ID.
 * @param props.hosts - Available CDN hosts.
 * @param props.name - Video file name.
 * @param props.quality - Video quality.
 * @returns The URL, or `undefined` when no host matches.
 */
export const getWildberriesVideoUrl = (props: GetWildberriesVideoUrl) => {
  const { articleId, hosts, name, quality } = props;
  const volume = articleId % 144;
  const host = getHost(volume, hosts);

  return host
    ? `https://${host}/vol${volume}/part${Math.floor(articleId / 10_000)}/${articleId}/hls/${quality}/${name}`
    : undefined;
};
