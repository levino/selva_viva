export const treesSchema = {
  name: "trees",
  label: "Tree Species",
  label_singular: "Tree",
  folder: "src/content/trees/",
  create: true,
  delete: true,
  fields: [
    {
      name: "name",
      widget: "string",
      label: "Name",
    },
    {
      label: "Other Names",
      name: "other_names",
      widget: "list",
      summary: "{{fields.name}}",
      field: { label: "name", name: "name", widget: "string" },
    },
    {
      label: "Gallery",
      name: "galleryImages",
      widget: "list",
      summary: "{{fields.image}}",
      field: { label: "Image", name: "image", widget: "image" },
    },
    { label: "Scientific Name", name: "scientific_name", widget: "string" },
    {
      label: "Scientific Synonyms",
      name: "scientific_synonyms",
      widget: "list",
      summary: "{{fields.name}}",
      field: { label: "Synonym", name: "synonyms", widget: "string" },
    },
    { label: "Excerpt", name: "excerpt", widget: "text" },
    {
      label: "General Information",
      name: "general_information",
      widget: "text",
    },
    {
      label: "Range",
      name: "range",
      widget: "text",
    },
    {
      label: "Habitat",
      name: "habitat",
      widget: "text",
    },
    {
      label: "Properties",
      name: "properties",
      widget: "object",
      summary: "{{fields.name}}",
      fields: [
        {
          label: "Conservation Status",
          name: "conservation_status",
          widget: "string",
        },
        {
          label: "Medicinal Rating",
          name: "medicinal_rating",
          widget: "number",
          value_type: "int",
        },

        {
          label: "Other Uses",
          name: "other_uses",
          widget: "number",
          value_type: "int",
        },
        {
          label: "Wood",
          name: "wood",
          widget: "number",
          value_type: "int",
        },
        { label: "Habit", name: "habit", widget: "string" },
        { label: "Height", name: "height", widget: "string" },
        { label: "Growth Rate", name: "growth_rate", widget: "string" },
        { label: "Pollinators", name: "pollinators", widget: "string" },
        {
          label: "Cultivation Status",
          name: "cultivation_status",
          widget: "list",
          summary: "{{fields.name}}",
          field: { label: "Status", name: "status", widget: "string" },
        },
      ],
    },
    {
      label: "Ecological importance",
      name: "ecological_importance",
      widget: "text",
    },
    {
      label: "Nutritional uses",
      name: "nutritional_uses",
      widget: "text",
      required: false,
    },
    {
      label: "Medicinal uses",
      name: "medicinal_uses",
      widget: "text",
      required: false,
    },
    {
      label: "Agroforestry",
      name: "agroforestry",
      widget: "text",
      required: false,
    },
    {
      label: "Wood",
      name: "wood",
      widget: "text",
    },
    {
      label: "Other_uses",
      name: "other_uses",
      widget: "text",
      required: false,
    },
    {
      label: "more_info",
      name: "more_info",
      widget: "list",
      summary: "{{fields.name}}",
      field: { label: "Link", name: "link", widget: "string" },
    },
  ],
};
