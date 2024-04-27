/**
 * This file is used by the Sanity CLI to run commands on the project.
 * @example `sanity dataset list`
 *
 * @see https://www.sanity.io/docs/cli
 *
 * NOTE: Sanity CLI will load environment variables
 */
import {defineCliConfig} from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_PROJECT_ID!,
    dataset: process.env.SANITY_DATASET!,
  },
});
