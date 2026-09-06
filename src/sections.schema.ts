import { z } from "astro/zod";

export const sharedButton = z
  .object({
    enable: z.boolean().optional(),
    tag: z.enum(["a", "button"]).optional(),
    url: z.string().optional(),
    label: z.string(),
    class: z.string().optional(),
    rel: z.string().optional(),
    icon: z
      .object({
        enable: z.boolean(),
        name: z.string(),
        position: z.enum(["left", "right"]).optional(),
      })
      .optional(),
    target: z.string().optional(),
    hoverEffect: z
      .enum(["text-flip", "creative-fill", "magnetic", "magnetic-text-flip"])
      .optional(),
    variant: z
      .enum(["fill", "fill-white", "outline", "text", "circle"])
      .optional(),
  })
  .catchall(z.any());

export const sharedButtonTag = sharedButton.refine(
  (data) => data.tag !== "a" || !!data.url,
  {
    message: "`url` is required when `tag` is 'a'",
    path: ["url"],
  },
);

export const sharedContactItem = z.object({
  title: z.string(),
  icon: z.string(),
  description: z.string(),
  button: sharedButton.optional(),
});

export const ImagePositionEnum = z.enum(["left", "right"]);
export const AppearanceEnum = z.enum(["dark", "light"]);
export const button = sharedButton || sharedButtonTag;

export const sharedMarquee = z.object({
  elementWidth: z.string().optional(),
  elementWidthAuto: z.boolean().optional(),
  elementWidthResponsive: z.string().optional(),
  pauseOnHover: z.boolean().optional(),
  reverse: z.enum(["reverse", ""]).optional(),
  duration: z.string().optional(),
  fullWidth: z.boolean().optional(),
});

export const inputFieldSchema = z.object({
  label: z.string().optional(),
  placeholder: z.string().optional(),
  required: z.boolean().optional(),
  halfWidth: z.boolean().optional(),
  defaultValue: z.string().optional(),
  name: z.string().optional(),
  selected: z.boolean().optional(),
  value: z.boolean().optional(),
  checked: z.boolean().optional(),
  type: z
    .enum([
      "text",
      "email",
      "tel",
      "url",
      "number",
      "date",
      "radio",
      "checkbox",
    ])
    .optional(),
  id: z.string().optional(),
  tag: z.literal("textarea").optional(),
  rows: z.string().optional(),
  group: z.string().optional(),
  groupLabel: z.string().optional(),
  items: z
    .array(
      z.object({
        label: z.string(),
        name: z.string().optional(),
        id: z.string().optional(),
        value: z.string().optional(),
        required: z.boolean().optional(),
        groupLabel: z.string().optional(),
        group: z.string().optional(),
        type: z.enum(["radio", "checkbox"]).optional(),
        halfWidth: z.boolean().optional(),
        defaultValue: z.string().optional(),
        checked: z.boolean().optional(),
      }),
    )
    .optional(),
  dropdown: z
    .object({
      type: z.enum(["select", "search"]).optional(),
      search: z
        .object({
          placeholder: z.string().optional(),
        })
        .optional(),
      items: z.array(
        z.object({
          label: z.string(),
          selected: z.boolean().optional(),
          value: z.string(),
        }),
      ),
    })
    .optional(),
  content: z.string().optional(),
  note: z.enum(["info", "warning", "success", "deprecated", "hint"]).optional(),
  parentClass: z.string().optional(),
});

export const contactFormSchema = z.object({
  action: z.string().optional(),
  emailSubject: z.string().optional(),
  note: z.string().optional(),
  submitButton: sharedButton.optional(),
  inputs: z.array(inputFieldSchema),
});

export const cookieNoticeSchema = z.object({
  title: z.string(),
  description: z.string(),
  dismissLabel: z.string(),
  policyLabel: z.string(),
  policyUrl: z.string(),
});
