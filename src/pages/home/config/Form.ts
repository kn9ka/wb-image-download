import z from "zod";

import { requiredString } from "@/shared/lib/validation";

import { FormFieldKey } from "../model/Form";

export const formSchema = z.object({
  [FormFieldKey.articleId]: requiredString("Article ID is required"),
});
