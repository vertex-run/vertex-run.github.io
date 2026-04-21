// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightCatppuccin from "@catppuccin/starlight";
import starlightLlmsTxt from "starlight-llms-txt";
import vertexGrammar from "./vertex.tmLanguage.json" with { type: "json" };

export default defineConfig({
  site: "https://vertex-run.github.io",
  integrations: [
    starlight({
      title: "Vertex",
      description: "A modern programming language for Salesforce.",
      social: [],
      sidebar: [
        { label: "Introduction", link: "/" },
        { label: "Why Vertex?", link: "/why-vertex/" },
        {
          label: "Getting Started",
          items: [
            { label: "Overview", link: "/getting-started/" },
            { label: "Install Vertex", link: "/getting-started/install/" },
            { label: "Your first program", link: "/getting-started/first-program/" },
            {
              label: "Your first Salesforce project",
              link: "/getting-started/first-salesforce-project/",
            },
            { label: "Editor setup", link: "/getting-started/editor-setup/" },
          ],
        },
        {
          label: "Language Tour",
          autogenerate: { directory: "tour" },
        },
        {
          label: "Guides",
          items: [
            { label: "Overview", link: "/guides/" },
            { label: "Error handling with Result", link: "/guides/error-handling/" },
            { label: "Pattern matching in practice", link: "/guides/pattern-matching/" },
            { label: "Testing your code", link: "/guides/testing/" },
            { label: "Interop with existing Apex", link: "/guides/apex-interop/" },
            { label: "Building for Salesforce", link: "/guides/salesforce-projects/" },
          ],
        },
        { label: "Coming from Apex", link: "/coming-from-apex/" },
        {
          label: "Reference",
          items: [
            {
              label: "Syntax & Expressions",
              items: [
                { label: "Primitive Types", link: "/reference/primitive-types/" },
                { label: "Bindings and constants", link: "/reference/bindings/" },
                { label: "Output", link: "/reference/output/" },
                { label: "Operators", link: "/reference/operators/" },
                {
                  label: "String interpolation",
                  link: "/reference/string-interpolation/",
                },
                { label: "Assertions", link: "/reference/assertions/" },
              ],
            },
            {
              label: "Control Flow",
              items: [
                { label: "Control Flow", link: "/reference/control-flow/" },
                { label: "for..in loop", link: "/reference/for-in/" },
                { label: "Pattern matching", link: "/reference/pattern-matching/" },
              ],
            },
            {
              label: "Functions & Types",
              items: [
                { label: "Functions", link: "/reference/functions/" },
                { label: "Sum Types", link: "/reference/sum-types/" },
                { label: "Tuples", link: "/reference/tuples/" },
                { label: "Type Aliases", link: "/reference/type-aliases/" },
                { label: "Opaque Types", link: "/reference/opaque-types/" },
              ],
            },
            {
              label: "Error Handling",
              items: [
                { label: "Option<T>", link: "/reference/option/" },
                { label: "Result<T, E>", link: "/reference/result/" },
              ],
            },
            {
              label: "Collections",
              items: [
                { label: "Collections", link: "/reference/collections/" },
              ],
            },
            {
              label: "Modules",
              items: [
                { label: "Imports", link: "/reference/imports/" },
                { label: "Annotations", link: "/reference/annotations/" },
              ],
            },
            {
              label: "Testing",
              items: [
                { label: "Testing", link: "/reference/testing/" },
              ],
            },
            {
              label: "Salesforce",
              items: [
                { label: "Overview", link: "/reference/salesforce/" },
                {
                  label: "Salesforce Integration",
                  link: "/reference/salesforce/integration/",
                },
                { label: "Apex FFI", link: "/reference/salesforce/apex-ffi/" },
                { label: "Apex.Object", link: "/reference/salesforce/apex-object/" },
              ],
            },
            {
              label: "Standard Library",
              items: [
                { label: "Overview", link: "/reference/stdlib/" },
                { label: "Date", link: "/reference/stdlib/date/" },
                { label: "DateTime", link: "/reference/stdlib/datetime/" },
                { label: "DateFormat", link: "/reference/stdlib/date-format/" },
                { label: "Numeric", link: "/reference/stdlib/numeric/" },
                { label: "String", link: "/reference/stdlib/string/" },
              ],
            },
          ],
        },
        {
          label: "CLI & Tooling",
          items: [
            { label: "Overview", link: "/tooling/" },
            { label: "The vertex CLI", link: "/tooling/cli/" },
            { label: "Project structure", link: "/tooling/project-structure/" },
            { label: "Editor integration", link: "/tooling/editor-integration/" },
          ],
        },
        {
          label: "Appendix",
          items: [
            { label: "Diagnostics", link: "/reference/diagnostics/" },
            { label: "Current Limitations", link: "/reference/limitations/" },
          ],
        },
        {
          label: "Examples",
          autogenerate: { directory: "examples" },
        },
        {
          label: "Changelog",
          autogenerate: { directory: "changelog" },
        },
      ],
      customCss: ["./src/styles/custom.css"],
      expressiveCode: {
        shiki: {
          langs: [vertexGrammar],
        },
      },
      plugins: [
        starlightCatppuccin(),
        starlightLlmsTxt({
          projectName: "Vertex",
          description:
            "Vertex is a programming language that targets the Salesforce platform. It transpiles to Apex and also runs locally via a JIT. The language prioritizes ergonomics and safety: errors are values (Result, Option), null does not exist, exceptions are not user-visible, and immutability is the default.",
          details: [
            "When writing Vertex, do not reach for Apex idioms by reflex. Common replacements:",
            "- No `null`. Use `Option<T>` with `Some(x)` / `None`.",
            "- No `try`/`catch` in user code. Fallible operations return `Result<T, E>`; use pattern matching.",
            "- No class inheritance. Composition via interfaces only.",
            "- No static methods. Module-level `fn` declarations instead.",
            "- `type` is destructurable data; `class` is nominal with methods. No duck typing.",
            "- `let` is immutable. Opt in to reassignment with `mutable let`.",
            "",
            "The file layout is one module per file with no explicit module declaration. Identifiers, types, and constructors follow the conventions shown in the reference pages.",
          ].join("\n"),
          promote: ["index*", "why-vertex*", "coming-from-apex*"],
          demote: ["changelog/**"],
          exclude: ["changelog/**"],
          pageSeparator: "\n\n---\n\n",
        }),
      ],
    }),
  ],
});
