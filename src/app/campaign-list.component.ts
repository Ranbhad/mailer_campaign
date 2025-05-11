import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-campaign-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatSelectModule, FormsModule, CommonModule, RouterModule],
  template: `
    <link rel="stylesheet" href="app-table-styles.css">

    <main>
      <section>
        <h2>Manage ride alongs</h2>
        <button mat-raised-button color="primary" style="margin-bottom: 2rem;" routerLink="/new-campaign">Create New Campaign</button>
      </section>

      <section>
        <label for="sortBy" style="width: 300px; display: block;">Sort By:</label>
        <select id="sortBy" name="sortBy" [(ngModel)]="sortBy">
          <option value="name">Name</option>
          <option value="status">Status</option>
          <option value="startDate">Start Date</option>
          <option value="endDate">End Date</option>
        </select>

        <br/>

        <div class="example-container mat-elevation-z8">

          <mat-table #table [dataSource]="dataSource">

            <!-- Campaign Id Column -->
            <ng-container matColumnDef="campaignId">
              <mat-header-cell *matHeaderCellDef> Campaign Id </mat-header-cell>
              <mat-cell *matCellDef="let element"> {{element.campaignId}} </mat-cell>
            </ng-container>

            <!-- Campaign Name Column -->
            <ng-container matColumnDef="campaignName">
              <mat-header-cell *matHeaderCellDef> Campaign Name </mat-header-cell>
              <mat-cell *matCellDef="let element"> {{element.campaignName}} </mat-cell>
            </ng-container>

            <!-- StartDate Column -->
            <ng-container matColumnDef="startDate">
              <mat-header-cell *matHeaderCellDef> Start Date </mat-header-cell>
              <mat-cell *matCellDef="let element"> {{element.startDate}} </mat-cell>
            </ng-container>

            <!-- EndDate Column -->
            <ng-container matColumnDef="endDate">
              <mat-header-cell *matHeaderCellDef> End Date </mat-header-cell>
              <mat-cell *matCellDef="let element"> {{element.endDate}} </mat-cell>
            </ng-container>

            <!-- Status Column -->
            <ng-container matColumnDef="status">
              <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>
              <mat-cell *matCellDef="let element"> {{element.status}} </mat-cell>
            </ng-container>

            <!-- Actions Column -->
            <ng-container matColumnDef="actions">
              <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>
              <mat-cell *matCellDef="let element">
                <button mat-button color="primary" routerLink="/view-campaign">View</button>
                <button mat-button color="primary">Edit</button>
              </mat-cell>
            </ng-container>

            <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
            <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
          </mat-table>
        </div>

      </section>
    </main>
  `,
  styles: []
})
export class CampaignListComponent {
  displayedColumns = ['campaignId', 'campaignName', 'startDate', 'endDate', 'status', 'actions'];
  dataSource = new MatTableDataSource(CAMPAIGN_DATA);
  sortBy = 'name';
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
