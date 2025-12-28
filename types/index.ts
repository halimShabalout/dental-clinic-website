// Core type definitions for the dental clinic website

export interface Doctor {
  id: string
  imageUrl: string

  translated: {
    en: {
      name: string
      title: string
      specialization: string
      bio: string
      education: string[]
      experience: string[]
      philosophy: string
    }
    ar: {
      name: string
      title: string
      specialization: string
      bio: string
      education: string[]
      experience: string[]
      philosophy: string
    }
  }
}

export interface Service {
  id: string
  slug: string
  imageUrl: string
  featured: boolean

  translated: {
    en: {
      name: string
      description: string
      longDescription: string
      benefits: string[]
      duration: string
    }
    ar: {
      name: string
      description: string
      longDescription: string
      benefits: string[]
      duration: string
    }
  }
}

export interface Testimonial {
  id: string
  patientName: string
  rating: number
  comment: string
  treatment: string
  date: string
  imageUrl?: string
  translated?: {
    en: {
      patientName: string
      comment: string
      treatment: string
    }
    ar: {
      patientName: string
      comment: string
      treatment: string
    }
  }
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt: string
  imageUrl: string
  category: string
  tags: string[]
  readTime: number
  translated?: {
    en: {
      title: string
      excerpt: string
      content: string
    }
    ar: {
      title: string
      excerpt: string
      content: string
    }
  }
}


export interface BeforeAfter {
  id: string
  beforeImageUrl: string
  afterImageUrl: string
  translated: {
    en: {
      treatment: string
      duration: string
      description: string
    }
    ar: {
      treatment: string
      duration: string
      description: string
    }
  }
}


export interface Statistics {
  patientsServed: number
  yearsExperience: number
  successRate: number
  alignersCases: number
}