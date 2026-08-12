import { useState } from "react";
import { toggle } from "radashi";

export const useMediaSelection = (mediaIds: string[]) => {
  const [selectedMedia, setSelectedMedia] = useState(mediaIds);

  const toggleMedia = (id: string) => {
    setSelectedMedia((selected) => toggle(selected, id));
  };

  const toggleAllMedia = () => {
    setSelectedMedia((selected) => (selected.length === mediaIds.length ? [] : mediaIds));
  };

  return {
    isAllSelected: mediaIds.length > 0 && selectedMedia.length === mediaIds.length,
    isPartlySelected: selectedMedia.length > 0 && selectedMedia.length < mediaIds.length,
    selectedMedia,
    toggleAllMedia,
    toggleMedia,
  };
};
