import DownloadIcon from "@mui/icons-material/Download";
import { Button, Container, Stack, TextField } from "@mui/material";
import { useState } from "react";

import { useNotification } from "@/shared/ui/notifications";

import { getProductMedia } from "../api/getProductMedia";
import { useForm } from "../lib/useForm";
import { FormFieldKey } from "../model/Form";
import type { ProductMedia } from "../model/ProductMedia";

import { MediaDownloadDialog } from "./MediaDownloadDialog";

type LoadedProductMedia = {
  articleId: string;
  media: ProductMedia[];
};

export const HomePage = () => {
  const [productMedia, setProductMedia] = useState<LoadedProductMedia | null>(null);
  const { notify } = useNotification();
  const form = useForm({
    onSubmit: async ({ articleId }) => {
      try {
        setProductMedia({ articleId, media: await getProductMedia(articleId) });
      } catch (error) {
        notify(error instanceof Error ? error.message : "Не удалось загрузить медиа");
      }
    },
  });

  return (
    <Container component="main" sx={{ py: 4 }}>
      <Stack
        component="form"
        onSubmit={(event) => {
          event.preventDefault();

          if (!form.state.isSubmitting) {
            void form.handleSubmit();
          }
        }}
        spacing={3}
        sx={{ maxWidth: 720 }}
      >
        <Stack direction={{ sm: "row" }} spacing={2} sx={{ alignItems: "flex-start" }}>
          <form.Field name={FormFieldKey.articleId}>
            {(field) => (
              <TextField
                fullWidth
                label="Article ID"
                error={field.state.meta.errors.length > 0}
                helperText={field.state.meta.errors.length > 0 ? "Введите Article ID" : undefined}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value.replace(/\D/g, ""))}
                value={field.state.value}
              />
            )}
          </form.Field>
          <form.Subscribe selector={(state) => state.isSubmitting}>
            {(isSubmitting) => (
              <Button
                disabled={isSubmitting}
                size="small"
                startIcon={<DownloadIcon />}
                type="submit"
                variant="contained"
              >
                Скачать фото и видео
              </Button>
            )}
          </form.Subscribe>
        </Stack>
      </Stack>

      {productMedia && (
        <MediaDownloadDialog
          articleId={productMedia.articleId}
          media={productMedia.media}
          onClose={() => setProductMedia(null)}
        />
      )}
    </Container>
  );
};
