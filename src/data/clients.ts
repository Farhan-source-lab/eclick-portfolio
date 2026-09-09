export interface ClientItem {
  id: string;
  name: string;
  category: string;
  industry: string;
  region?: string;
}

export const clientsData: ClientItem[] = [
  { id: 'pfizer', name: 'Pfizer', category: 'Healthcare & Pharma', industry: 'Pharmaceuticals' },
  { id: 'saudisoft', name: 'Saudisoft', category: 'Enterprise Technology', industry: 'Software & Localization' },
  { id: 'techno-amana-paints', name: 'Techno Amana Paints', category: 'Manufacturing & Materials', industry: 'Industrial Coatings' },
  { id: 'aim-united-global', name: 'AIM United Global', category: 'Global Enterprise', industry: 'International Logistics & Services' },
  { id: 'dynamic-production', name: 'Dynamic Production', category: 'Media & Production', industry: 'Commercial Media' },
  { id: 'gdh-academy', name: 'GDH Academy', category: 'Education & Training', industry: 'Higher Education' },
  { id: 'mace-ai-academy', name: 'MACE AI Academy', category: 'AI Education', industry: 'Applied Artificial Intelligence' },
  { id: 'wallcraft-panels', name: 'Wallcraft Panels', category: 'Architecture & Design', industry: 'Interior Architecture' },
  { id: 'redesign-dental', name: 'Redesign Dental Clinics', category: 'Healthcare', industry: 'Clinical Dentistry' },
  { id: 'sas-dental', name: 'SAS Dental Clinic', category: 'Healthcare', industry: 'Specialized Healthcare' },
  { id: 'boxoo', name: 'Boxoo', category: 'Consumer & Retail', industry: 'Consumer Products' }
];
