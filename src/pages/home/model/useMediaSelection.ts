import { useState } from "react";
import { toggle } from "radashi";

import { allMediaIds } from "./media";

export const useMediaSelection = () => {
  const [selectedMedia, setSelectedMedia] = useState<string[]>(allMediaIds);

  const resetSelection = () => setSelectedMedia(allMediaIds);

  const toggleMedia = (id: string) => {
    setSelectedMedia((selected) => toggle(selected, id));
  };

  const toggleAllMedia = () => {
    setSelectedMedia((selected) => (selected.length === allMediaIds.length ? [] : allMediaIds));
  };

  return {
    isAllSelected: selectedMedia.length === allMediaIds.length,
    isPartlySelected: selectedMedia.length > 0 && selectedMedia.length < allMediaIds.length,
    resetSelection,
    selectedMedia,
    toggleAllMedia,
    toggleMedia,
  };
};
