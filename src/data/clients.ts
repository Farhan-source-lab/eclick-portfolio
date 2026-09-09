export interface ClientItem {
  id: string;
  name: string;
  logoUrl: string;
  category?: string;
  industry?: string;
  region?: string;
}

export const clientsData: ClientItem[] = [
  { id: 'saudisoft', name: 'Saudisoft', logoUrl: '/clients/saudisoft.webp', category: 'Enterprise Tech', industry: 'Software & Localization' },
  { id: 'techno-paints', name: 'Techno Paints', logoUrl: '/clients/techno-paints.webp', category: 'Industrial & Paints', industry: 'Industrial Coatings' },
  { id: 'amana', name: 'Group AMANA', logoUrl: '/clients/amana.png', category: 'Construction', industry: 'Industrial Contracting' },
  { id: 'boxoo', name: 'Boxoo', logoUrl: '/clients/boxoo.png', category: 'F&B Lifestyle', industry: 'Culinary Brand & Tech' },
  { id: 'pfizer', name: 'Pfizer', logoUrl: '/clients/pfizer.svg', category: 'Pharma', industry: 'Global Healthcare' },
  { id: 'aim-united-global', name: 'AIM United Global', logoUrl: '/clients/aim-united.svg', category: 'Engineering & BIM', industry: 'Global BIM & Construction' },
  { id: 'dynamic-production', name: 'Dynamic Production', logoUrl: '/clients/dynamic-production.svg', category: 'Media & Production', industry: 'Commercial Cinematography' },
  { id: 'gdh-academy', name: 'GDH Academy', logoUrl: '/clients/gdh-academy.png', category: 'Education', industry: 'BIM & Design Academy' },
  { id: 'redesign-dental', name: 'Redesign Dental Clinics', logoUrl: '/clients/redesign-dental-dark.webp', category: 'Healthcare', industry: 'Aesthetic Dentistry' },
  { id: 'wallcraft-panels', name: 'Wallcraft Panels', logoUrl: '/clients/wallcraft.svg', category: 'Architecture', industry: 'Architectural Wall Panels' },
  { id: 'mace-ai-academy', name: 'MACE AI Academy', logoUrl: '/clients/mace-ai-academy.webp', category: 'AI Education', industry: 'Enterprise AI Training' },
  { id: 'sas-dental', name: 'SAS Dental Clinic', logoUrl: '/clients/sas-dental.png', category: 'Healthcare', industry: 'Clinical Dentistry' }
];

