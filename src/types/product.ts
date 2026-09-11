export type Vehicle = 'Hyundai HR' | 'Kia Bongo';
export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  category: string;
  vehicle?: Vehicle;
  application?: 'Consultar aplicação';
  searchTerms?: string[];
  featured: boolean;
  availability: string;
};
