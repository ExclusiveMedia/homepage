export const lagFactors: Record<string, {factor:number; leak:string}> = {
 'Under 5 minutes': { factor: .03, leak: 'Attribution and offer clarity' }, '5–30 minutes': { factor: .08, leak: 'Follow-up consistency' }, '30–60 minutes': { factor: .14, leak: 'Speed-to-lead' }, '1–2 hours': { factor: .22, leak: 'Lead decay' }, '2–4 hours': { factor: .32, leak: 'Staff handoff' }, '4+ hours': { factor: .45, leak: 'After-hours capture' }, 'Next business day': { factor: .58, leak: 'Competitive response gap' }
};
// Estimate-only formula for planning conversations; not a guarantee or verified loss calculation.
export function estimateLeak(spend:number, lag:string, leads?:number, value?:number){const f=lagFactors[lag]??lagFactors['1–2 hours']; const leadVolume=leads&&leads>0?leads:Math.max(8,Math.round(spend/250)); const acv=value&&value>0?value:1200; return {lost: Math.round(leadVolume*acv*f.factor), primary:f.leak, leadVolume, acv};}
