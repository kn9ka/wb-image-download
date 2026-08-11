import DownloadIcon from "@mui/icons-material/Download";
import { useForm } from "@tanstack/react-form";
import { Button, Container, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { z } from "zod";

import { useNotification } from "@/shared/ui/notifications";

import { useMediaSelection } from "../model/useMediaSelection";

import { MediaDownloadDialog } from "./MediaDownloadDialog";

const articleIdSchema = z.string().regex(/^\d+$/, "Введите Article ID");

export const HomePage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const mediaSelection = useMediaSelection();
  const { notify } = useNotification();
  const form = useForm({
    defaultValues: { articleId: "" },
    onSubmit: () => {
      mediaSelection.resetSelection();
      setIsDialogOpen(true);
    },
  });

  return (
    <Container component="main" sx={{ py: 4 }}>
      <Stack
        component="form"
        onSubmit={(event) => {
          event.preventDefault();
          void form.handleSubmit();
        }}
        spacing={3}
        sx={{ maxWidth: 720 }}
      >
        <Stack direction={{ sm: "row" }} spacing={2} sx={{ alignItems: "flex-start" }}>
          <form.Field name="articleId" validators={{ onSubmit: articleIdSchema }}>
            {(field) => (
              <TextField
                error={field.state.meta.errors.length > 0}
                fullWidth
                helperText={field.state.meta.errors.length > 0 ? "Введите Article ID" : undefined}
                label="Article ID"
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value.replace(/\D/g, ""))}
                value={field.state.value}
              />
            )}
          </form.Field>
          <Button size="small" startIcon={<DownloadIcon />} type="submit" variant="contained">
            Скачать фото и видео
          </Button>
        </Stack>
      </Stack>

      <MediaDownloadDialog
        isAllSelected={mediaSelection.isAllSelected}
        isOpen={isDialogOpen}
        isPartlySelected={mediaSelection.isPartlySelected}
        onClose={() => setIsDialogOpen(false)}
        onDownload={(type) =>
          notify(
            `Скачивание ${type === "photo" ? "фото" : "видео"} будет доступно после подключения API`,
          )
        }
        onToggleAll={mediaSelection.toggleAllMedia}
        onToggleMedia={mediaSelection.toggleMedia}
        selectedMedia={mediaSelection.selectedMedia}
      />
    </Container>
  );
};
