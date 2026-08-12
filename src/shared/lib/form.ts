import { createFormHook, createFormHookContexts } from "@tanstack/react-form";

const { fieldContext, formContext, useFormContext, useFieldContext } = createFormHookContexts();

const { useAppForm, withForm, useTypedAppFormContext, withFieldGroup } = createFormHook({
  fieldComponents: {},
  formComponents: {},
  fieldContext,
  formContext,
});

export {
  useAppForm,
  withForm,
  withFieldGroup,
  useFormContext,
  useFieldContext,
  useTypedAppFormContext,
};
