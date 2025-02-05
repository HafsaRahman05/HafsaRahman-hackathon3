'use client'

/**
 * This configuration is used for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Get environment variables directly
const apiVersion = process.env.SANITY_API_VERSION || '2025-01-15'; // Set a default version if not found
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'; // Default to 'production' if not found
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'sk0y5NhCPQBVOIJGjWtDrohFxzfyTPju9ZAx6qgJX7YVzNhuQ8Doaps5hdP51YFXdUGKEIKwarRgRDudVajtxBiK41EAkzVZxV4GFhFeajL7ZTeOWBkJDgRge9udRwmryQWSCFwNqH3HGllBkoBAcvEvSI77JcyX5Ag8MCCgjkdpvSv5KkJs'; // Default project ID if not found

import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
