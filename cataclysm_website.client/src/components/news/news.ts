export interface NewsModel {
    rss: Rss
  }
  
  export interface Rss {
    channel: Channel
    _version: string
  }
  
  export interface Channel {
    title: string
    link: string
    description: string
    language: string
    lastBuildDate: string
    ttl: string
    item: Item[]
  }
  
  export interface Item {
    description: string
    title: string
    link: string
    guid: string
    pubDate: string
  }
  