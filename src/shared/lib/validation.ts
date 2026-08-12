import z from "zod";

export const requiredNumber = (message: string) => {
  return z.number({ error: message });
};

export const requiredString = (message: string) => {
  return z.string({ error: message }).trim().min(1, message);
};
