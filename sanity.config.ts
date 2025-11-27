import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";

import { structure } from "./src/sanity/desk-structure";
import { resolve } from "./src/sanity/lib/resolve";
import { schema } from "./src/sanity/schema-types";
import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  projectId: "fv4ogx5c",
  dataset: "production",
  plugins: [
    structureTool({ structure }),
    presentationTool({ previewUrl: location.origin, resolve }),
    visionTool(),
    codeInput(),
  ],
  schema,
});
