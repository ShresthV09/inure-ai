export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface KeyPoint {
  title: string;
  description: string;
}

export interface Quote {
  text: string;
  author: Author;
}

export interface Section {
  title: string;
  content: string;
}

export interface MainImage {
  url: string;
  caption: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  author: Author;
  publishedAt: string;
  readTime: string;
  introduction: string;
  mainImage: MainImage;
  keyPoints: KeyPoint[];
  quote: Quote;
  sections: Section[];
}
