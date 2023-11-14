NetlifyCMS({
  config: {
    // Use Netlify’s “Git Gateway” authentication and target our default branch
    disableIdentityWidgetInjection: true,
    backend: {
      name: "git-gateway",
      branch: "main",
    },
    // Configure where our media assets are stored & served from
    media_folder: "src/assets/",
    public_folder: "/src/assets/",
    // Configure the content collections
    collections: [
      pages_schemas,
      treesSchema,
      postsSchema,
      plantAndProtectSchemaDe,

      plantAndProtectSchemaEn,
      plantAndProtectSchemaEs,
      teamMembersSchema,
    ],
  },
});
