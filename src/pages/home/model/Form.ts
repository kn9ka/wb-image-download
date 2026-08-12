export const FormFieldKey = {
  articleId: "articleId",
} as const;

export type FormFieldKey = (typeof FormFieldKey)[keyof typeof FormFieldKey];

export type FormValues = {
  [FormFieldKey.articleId]: string;
};
