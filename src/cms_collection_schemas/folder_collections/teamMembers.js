export const teamMembersSchema = {
  label: "Team Members",
  label_singular: "Team Member",
  name: "team_members",
  folder: "src/content/team/",
  create: true,
  delete: true,
  fields: [
    {
      label: "Title",
      name: "title",
      widget: "string",
    },
    {
      label: "Profile Image",
      name: "profile_image",
      widget: "image",
    },
    { label: "Profile Image Alt", name: "profile_image_alt", widget: "string" },
    { label: "Name", name: "name", widget: "string" },
    { label: "Role", name: "role", widget: "string" },
    { label: "Description", name: "description", widget: "markdown" },
  ],
};
