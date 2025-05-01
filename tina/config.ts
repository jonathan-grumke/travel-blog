import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main";

export default defineConfig({
    branch,

    // Get this from tina.io
    // clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    clientId: "ecde6e60-e532-4d10-9cdb-b74fb3903428",
    // Get this from tina.io
    // token: process.env.TINA_TOKEN,
    token: "44f382d2c13a0f47e1d679ad38bfd092494bc823",

    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "src/assets",
        },
    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
    schema: {
        collections: [
            {
                name: "travelDiary",
                label: "Reisetagebuch",
                path: "src/content/travel-diary",
                format: "mdx",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "description",
                        label: "SEO Beschreibung",
                    },
                    {
                        type: "string",
                        name: "slug",
                        label: "URL",
                    },
                    {
                        type: "datetime",
                        name: "pubDate",
                        label: "Datum",
                    },
                    {
                        type: "image",
                        name: "heroImage",
                        label: "Titelbild",
                    },
                    {
                        type: "string",
                        name: "author",
                        label: "Autor",
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        isBody: true,
                    },
                ],
            },
        ],
    },
});
