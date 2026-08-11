import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
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
} from "@mui/material";

import { media } from "../model/media";

const toteBag = new URL("./tote-bag.png", import.meta.url).href;

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
  isAllSelected: boolean;
  isOpen: boolean;
  isPartlySelected: boolean;
  onClose: () => void;
  onDownload: (type: "photo" | "video") => void;
  onToggleAll: () => void;
  onToggleMedia: (id: string) => void;
  selectedMedia: string[];
};

export const MediaDownloadDialog = ({
  isAllSelected,
  isOpen,
  isPartlySelected,
  onClose,
  onDownload,
  onToggleAll,
  onToggleMedia,
  selectedMedia,
}: MediaDownloadDialogProps) => (
  <Dialog fullWidth maxWidth="md" onClose={onClose} open={isOpen}>
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
      <FormControlLabel
        control={
          <Checkbox
            checked={isAllSelected}
            indeterminate={isPartlySelected}
            onChange={onToggleAll}
          />
        }
        label="Выбрать всё"
      />
      <ImageList cols={3} gap={16} sx={{ mt: 2 }}>
        {media.map(({ id, label, type }) => (
          <ImageListItem key={id} sx={{ position: "relative" }}>
            <Box
              alt={label}
              component="img"
              src={toteBag}
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
              disableRipple
              icon={checkboxIcon}
              onChange={() => onToggleMedia(id)}
              slotProps={{ input: { "aria-label": `Выбрать ${label}` } }}
              sx={{ left: 4, p: 0, position: "absolute", top: 4 }}
            />
            {type === "video" && (
              <PlayCircleIcon
                aria-label={label}
                color="primary"
                sx={{ bottom: 8, fontSize: 40, position: "absolute", right: 8 }}
              />
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => onDownload("photo")}>Скачать фото</Button>
      <Button onClick={() => onDownload("video")} variant="contained">
        Скачать видео
      </Button>
    </DialogActions>
  </Dialog>
);
