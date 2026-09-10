export interface IndustrySector {
  id: string;
  name: string;
  description: string;
}

export const industriesData: IndustrySector[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description:
      'Production rarely runs the way the system says it does. We work with manufacturers to close the gap between the shop floor and the software meant to reflect it.'
  },
  {
    id: 'transportation-logistics',
    name: 'Transportation & Logistics',
    description:
      'Logistics runs on thin margins and tight time windows. When tracking is fragmented, dispatch is manual and your systems barely talk to each other, the cost lands on the operation. We work on the seams where that cost accumulates.'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description:
      'Healthcare runs on systems that rarely agree with one another — and on staff who end up doing the reconciling by hand. We help connect those systems, lighten the administrative load, and treat patient data with the care it demands.'
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    description:
      'Booking, PMS and POS each do their job, yet none agrees on the same guest. We help hospitality operators connect those systems — so guest data and reporting hold together across your properties.'
  },
  {
    id: 'accounting',
    name: 'Accounting',
    description:
      'Finance teams lose hours to re-keying, reconciliation and reports nobody fully trusts. We build and connect the systems behind that work — we are not your accountants, but we understand the close, the audit and the controls those systems have to serve.'
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description:
      'Property businesses run on data that sits in too many places — leads in one tool, listings in another, payment milestones in a spreadsheet, and the paperwork everywhere. We work with how that operation actually runs, then close the gaps that cost you time and trust.'
  },
  {
    id: 'retail',
    name: 'Retail',
    description:
      'Retail runs on margins too thin to absorb a stock-out, an oversell or a forecast nobody trusts. We work on the systems underneath — so your channels agree, your inventory holds, and the numbers you plan against are the numbers your floor actually sees.'
  },
  {
    id: 'education',
    name: 'Education',
    description:
      'An institution runs on systems that were each chosen for a reason and never meant to work together — admissions in one place, fees in another, the student record somewhere else. We help connect them, ease the manual load, and treat learner data with the care it asks for.'
  }
];
