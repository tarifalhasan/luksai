export interface IService {
  title: string;
  description: string;
  id: string;
  icon: string;
}

export interface Ipackages {
  icon: string;
  title: string;
  features: string[];
  otherFeatures: string[];
}

export interface IBenefit {
  title: string;
  description: string;
}
export interface IAdditionalFeatures {
  title: string;
  description: string;
  id: number;
}

export interface ISolutionsSection8Data {
  icon: string;
  id: number;
  title: string;
}

export interface ITestimonial {
  title: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  id?: string;
}

export interface IDiversify {
  name: string;
  id: number;
  imageSrc: string;
}

export interface IWhereToStart {
  name: string;
  description: string;
  id: number;
  icon: string;
}

export interface IWhyUs {
  name: string;
  id: number;
  title: string;
  icon: string;
}

export interface ITeam {
  name: string;
  role: string;
  id: number;
  linkedin: string;
  avatar: string;
}
