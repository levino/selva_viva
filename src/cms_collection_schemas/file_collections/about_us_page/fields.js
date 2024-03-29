export const aboutUsPageSchemaFields = [
  {
    label: "Page Meta Title",
    name: "page_meta_title",
    widget: "string",
  },
  {
    label: "Title",
    name: "title",
    widget: "string",
  },
  {
    label: "Subtitle",
    name: "subtitle",
    widget: "string",
  },
  {
    label: "Excerpt",
    name: "excerpt",
    widget: "text",
  },
  { label: "Hero Image", name: "hero_image", widget: "image" },
  { label: "Hero Alt", name: "hero_alt", widget: "string" },
  {
    label: "Hero Button",
    name: "hero_button",
    widget: "object",
    summary: "{{fields.name}}",
    fields: [
      {
        label: "Hero Button text",
        name: "hero_button_text",
        widget: "string",
      },
      {
        label: "Hero Button link",
        name: "hero_button_link",
        widget: "string",
      },
    ],
  },
  {
    label: "Vision",
    name: "vision",
    summary: "{{fields.name}}",
    widget: "object",
    fields: [
      {
        label: "Title",
        name: "title",
        widget: "string",
      },
      {
        label: "Subtitle",
        name: "subtitle",
        widget: "string",
      },
      {
        label: "Description",
        name: "description",
        widget: "markdown",
      },
      {
        label: "Image",
        name: "image",
        widget: "image",
      },
      {
        label: "Image Alt",
        name: "image_alt",
        widget: "string",
      },
    ],
  },
  {
    label: "How all started",
    name: "how_all_started",
    summary: "{{fields.name}}",
    widget: "object",
    fields: [
      {
        label: "Title",
        name: "title",
        widget: "string",
      },
      {
        label: "Subtitle",
        name: "subtitle",
        widget: "string",
      },
      {
        label: "Description",
        name: "description",
        widget: "markdown",
      },
      {
        label: "Image",
        name: "image",
        widget: "image",
      },
      {
        label: "Image Alt",
        name: "image_alt",
        widget: "string",
      },
    ],
  },
  { label: "Button", name: "button", widget: "string" },
  { label: "Button Link", name: "button_link", widget: "string" },
  {
    label: "Team",
    name: "team",
    widget: "object",
    summary: "{{fields.name}}",
    fields: [
      { label: "Title", name: "title", widget: "string" },
      {
        label: "Team Members",
        name: "team_members",
        widget: "list",
        summary: "{{field.name}}",
        field: {
          label: "Team Member",
          name: "team_member",
          widget: "relation",
          collection: "team_members",
          search_fields: ["title"],
          value_field: "title",
          display_fields: ["title"],
        },
      },
    ],
  },
];
