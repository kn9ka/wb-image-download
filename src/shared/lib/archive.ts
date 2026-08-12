import { BlobWriter, ZipWriter } from "@zip.js/zip.js";

export const createArchiveWriter = () => {
  const writer = new ZipWriter(new BlobWriter("application/zip"), { level: 0 });

  return {
    add: async (name: string, data: ReadableStream) => {
      await writer.add(name, data);
    },
    close: () => writer.close(),
  };
};
