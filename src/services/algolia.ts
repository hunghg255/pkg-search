import algoliasearch from 'algoliasearch'
import { createNodeHttpRequester } from '@algolia/requester-node-http'

export interface PackageInfo {
  name: string
  version: string
  descriptions: string
  owner: {
    name: string
    link: string
  }
  repository: {
    url: string
  }
  humanDownloadsLast30Days: string
  versions: string[]
  author: string
  downloads: string
  versionIndex: number
  activeVersion: string
  repoLink: string
  authorLink: string
}

/* Config */
const algolia = {
  appId: 'OFCNCOG2CU',
  apiKey: 'f54e21fa3a2a0160595bb058179bfb1e',
  indexName: 'npm-search',
}

const client = algoliasearch(algolia.appId, algolia.apiKey, {
  requester: createNodeHttpRequester(),
}).initIndex(
  algolia.indexName,
)

export const search = async (
  query: string,
  page = 0,
) => {
  const res = await client.search<PackageInfo>(query, {
    attributesToRetrieve: [
      'name',
      'version',
      'description',
      'owner',
      'repository',
      'humanDownloadsLast30Days',
      'versions',
    ],
    page,
    hitsPerPage: 10,
  }) as unknown as { hits: PackageInfo[]; query: string }

  return res
}

