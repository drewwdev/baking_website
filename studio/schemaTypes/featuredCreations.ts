import {defineType} from 'sanity'

export default defineType({
  name: 'featuredCreations',
  title: 'Featured Creations',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
})
