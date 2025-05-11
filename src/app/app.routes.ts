import { Routes } from '@angular/router';

// import { Routes } from '@angular/router';
import { CampaignListComponent } from './campaign-list.component';
import { NewCampaignComponent } from './new-campaign.component';
import { ViewCampaignComponent } from './view-campaign.component';

export const routes: Routes = [
  { path: '', component: CampaignListComponent, data: { breadcrumb: 'Campaign List' } },
  { path: 'new-campaign', component: NewCampaignComponent, data: { breadcrumb: 'New Campaign' } },
  { path: 'view-campaign', component: ViewCampaignComponent, data: { breadcrumb: 'View Campaign' } }
];
