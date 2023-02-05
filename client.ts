import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'm4ybrdd1',
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client;