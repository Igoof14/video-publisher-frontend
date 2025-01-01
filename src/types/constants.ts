export const MAX_TITLE_LENGTHS = {
  vk: 100,
  rutube: 200,
  dzen: 150
} as const; 

export const PLATFORMS = {
  VK: 'vk',
  RUTUBE: 'rutube',
  DZEN: 'dzen'
} as const

export const VIDEO_STATUS = {
  PUBLISHED: 'published',
  PROCESSING: 'processing',
  SCHEDULED: 'scheduled'
} as const 