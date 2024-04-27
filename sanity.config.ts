import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { schema } from './src/sanity/schema'
import { sanityClient } from "sanity:client";

const { projectId, dataset } = sanityClient.config();

export default defineConfig({
  title: 'Astro x Presentation',

  // @ts-expect-error
  projectId,
  // @ts-expect-error
  dataset,

  plugins: [structureTool(), visionTool()],

  schema,
})
