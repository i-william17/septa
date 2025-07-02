'use client';
import { MissionStatement } from './sections/mission';
import { CoreValues } from './sections/values'; 
import { CompanyTimeline } from './sections/timeline';
import { LeadershipTeam } from './sections/leadership';
import { ClientShowcase } from './sections/clients';

export default function AboutPage() {
  return (
    <>
      <MissionStatement />
      <CoreValues />
      <CompanyTimeline />
      <LeadershipTeam />
      <ClientShowcase />
    </>
  );
}