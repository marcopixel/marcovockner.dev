export interface ProjectEntry {
  key: string
  name: string
  description: string
  website: string
  github?: ProjectEntryGithub
  preview?: ProjectEntryPreview
}

interface ProjectEntryGithub {
  owner: string
  repo: string
}

interface ProjectEntryPreview {
  src: string
  alt: string
}
