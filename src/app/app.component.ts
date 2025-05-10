import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, AppBarComponent, FooterComponent, MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule, MatTableModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns = ['campaignId', 'campaignName', 'startDate', 'endDate', 'status', 'actions'];
  dataSource = new MatTableDataSource(CAMPAIGN_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  title = 'mailer_campaign';

  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  selectedFood: string | undefined;
}

export interface Campaign {
  campaignId: number;
  campaignName: string;
  startDate: string;
  endDate: string;
  status: string;
  actions: string;
}

const CAMPAIGN_DATA: Campaign[] = [
  {campaignId: 1, campaignName: 'Spring Sale', startDate: '2024-03-01', endDate: '2024-03-31', status: 'Active', actions: ''},
  {campaignId: 2, campaignName: 'Summer Promo', startDate: '2024-06-01', endDate: '2024-06-30', status: 'Scheduled', actions: ''},
  {campaignId: 3, campaignName: 'Back to School', startDate: '2024-08-15', endDate: '2024-09-15', status: 'Planned', actions: ''},
  {campaignId: 4, campaignName: 'Holiday Discounts', startDate: '2024-12-01', endDate: '2024-12-31', status: 'Planned', actions: ''},
  {campaignId: 5, campaignName: 'Clearance Sale', startDate: '2024-01-10', endDate: '2024-01-20', status: 'Completed', actions: ''}
];
