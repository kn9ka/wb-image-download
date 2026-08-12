import { createArchiveWriter } from "@/shared/lib";
import {
  BufferTarget,
  Conversion,
  HLS_FORMATS,
  Input,
  Mp4OutputFormat,
  Output,
  UrlSource,
} from "mediabunny";

import type { ProductMedia, ProductMediaType } from "./ProductMedia";

type DownloadMediaParams = {
  articleId: string;
  media: ProductMedia[];
  selectedMedia: string[];
  type: ProductMediaType;
};

const saveFile = (file: Blob, name: string) => {
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.download = name;
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
};

const remuxVideo = async (playlistUrl: string) => {
  const input = new Input({ formats: HLS_FORMATS, source: new UrlSource(playlistUrl) });
  const target = new BufferTarget();
  const output = new Output({ format: new Mp4OutputFormat(), target });

  try {
    const conversion = await Conversion.init({ input, output });

    if (!conversion.isValid) {
      throw new Error("Видео нельзя сохранить в MP4 без перекодирования");
    }

    await conversion.execute();

    if (!target.buffer) {
      throw new Error("Не удалось собрать MP4");
    }

    return new Blob([target.buffer], { type: "video/mp4" });
  } finally {
    input.dispose();
  }
};

export const downloadMedia = async ({
  articleId,
  media,
  selectedMedia,
  type,
}: DownloadMediaParams) => {
  const files = media.filter((item) => item.type === type && selectedMedia.includes(item.id));

  if (!files.length) {
    return 0;
  }

  if (type === "video") {
    for (const { downloadUrl, fileName } of files) {
      saveFile(await remuxVideo(downloadUrl), fileName);
    }

    return files.length;
  }

  const archive = createArchiveWriter();

  for (const { downloadUrl, fileName } of files) {
    const response = await fetch(downloadUrl);

    if (!response.ok || !response.body) {
      throw new Error(`Не удалось загрузить ${fileName}`);
    }

    await archive.add(fileName, response.body);
  }

  saveFile(await archive.close(), `wb-${articleId}-${type}.zip`);

  return files.length;
};
