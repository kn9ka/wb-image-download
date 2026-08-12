import { formOptions } from "@tanstack/react-form";

import { useAppForm, useTypedAppFormContext } from "@/shared/lib/form";

import { formSchema } from "../config/Form";
import { FormFieldKey, type FormValues } from "../model/Form";

const defaultValues: FormValues = {
  [FormFieldKey.articleId]: "",
};

export const getDefaultValues = (initialValues?: Partial<FormValues>): FormValues => ({
  ...defaultValues,
  ...initialValues,
});

export type UseFormArgs = Partial<{
  initialValues: Partial<FormValues>;
  onSubmit: (formData: FormValues) => Promise<void> | void;
  onSubmitInvalid: VoidFunction;
}>;

const getFormOptions = ({ initialValues, onSubmit, onSubmitInvalid }: UseFormArgs = {}) =>
  formOptions({
    defaultValues: getDefaultValues(initialValues),
    canSubmitWhenInvalid: true,
    validators: { onSubmit: formSchema },
    onSubmit: ({ value }) => onSubmit?.(value),
    onSubmitInvalid,
  });

export const useForm = ({ initialValues, onSubmit, onSubmitInvalid }: UseFormArgs) =>
  useAppForm({
    ...getFormOptions({
      initialValues,
      onSubmit,
      onSubmitInvalid,
    }),
  });

export const useFormContext = () =>
  useTypedAppFormContext({
    ...getFormOptions(),
  });
