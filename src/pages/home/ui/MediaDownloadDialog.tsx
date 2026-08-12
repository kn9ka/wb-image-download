import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  ImageList,
  ImageListItem,
  LinearProgress,
} from "@mui/material";
import { useState } from "react";

import { useNotification } from "@/shared/ui/notifications";

import { downloadMedia } from "../model/downloadMedia";
import { ProductMediaType, type ProductMedia } from "../model/ProductMedia";
import { useMediaSelection } from "../model/useMediaSelection";
import { getPhotoMedia, getVideoMedia } from "../lib/filters";

const checkboxIcon = (
  <Box
    sx={{
      bgcolor: "common.white",
      border: 2,
      borderColor: "primary.main",
      height: 24,
      width: 24,
    }}
  />
);
const checkedCheckboxIcon = (
  <Box
    sx={{
      alignItems: "center",
      bgcolor: "primary.main",
      color: "common.white",
      display: "flex",
      height: 24,
      justifyContent: "center",
      width: 24,
      borderRadius: 0.5,
    }}
  >
    <CheckIcon fontSize="small" />
  </Box>
);

type MediaDownloadDialogProps = {
  articleId: string;
  media: ProductMedia[];
  onClose: VoidFunction;
};

export const MediaDownloadDialog = ({ articleId, media, onClose }: MediaDownloadDialogProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { notify } = useNotification();
  const { isAllSelected, isPartlySelected, selectedMedia, toggleAllMedia, toggleMedia } =
    useMediaSelection(media.map(({ id }) => id));

  const downloadSelectedMedia = async (type: ProductMediaType) => {
    setIsDownloading(true);

    try {
      const count = await downloadMedia({ articleId, media, selectedMedia, type });

      if (!count) {
        notify("Выберите файлы");
        return;
      }

      if (type === ProductMediaType.PHOTO) {
        notify(`Скачивается архив: ${count} фото`);
        return;
      }

      if (type === ProductMediaType.VIDEO) {
        notify(`Скачивается видео: ${count}`);
        return;
      }
    } catch {
      notify("Не удалось собрать архив");
    } finally {
      setIsDownloading(false);
    }
  };

  const photos = getPhotoMedia(media);
  const videos = getVideoMedia(media);

  return (
    <Dialog fullWidth maxWidth="md" onClose={onClose} open>
      <DialogTitle>
        Скачать фотографии и видео
        <IconButton
          aria-label="Закрыть"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {isDownloading && <LinearProgress aria-label="Собираем архив" sx={{ mb: 2 }} />}
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={isAllSelected}
                disabled={isDownloading}
                indeterminate={isPartlySelected}
                onChange={toggleAllMedia}
              />
            }
            label={`Выбрать всё (${selectedMedia.length} из ${media.length})`}
          />
        </Box>
        <ImageList cols={3} gap={16} sx={{ mt: 2 }}>
          {photos.map(({ id, label, previewUrl }) => (
            <ImageListItem key={id} sx={{ position: "relative" }}>
              <Box
                alt={label}
                component="img"
                src={previewUrl}
                sx={{
                  aspectRatio: "1",
                  borderRadius: 1,
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
              <Checkbox
                checked={selectedMedia.includes(id)}
                checkedIcon={checkedCheckboxIcon}
                disabled={isDownloading}
                disableRipple
                icon={checkboxIcon}
                onChange={() => toggleMedia(id)}
                slotProps={{ input: { "aria-label": `Выбрать ${label}` } }}
                sx={{ left: 4, p: 0, position: "absolute", top: 4 }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </DialogContent>
      <DialogActions>
        <Button
          disabled={isDownloading || photos.length === 0}
          onClick={() => void downloadSelectedMedia(ProductMediaType.PHOTO)}
        >
          Скачать фото
        </Button>
        <Button
          disabled={isDownloading || videos.length === 0}
          onClick={() => void downloadSelectedMedia(ProductMediaType.VIDEO)}
          variant="contained"
        >
          Скачать видео
        </Button>
      </DialogActions>
    </Dialog>
  );
};
