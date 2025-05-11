
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-campaign',
  standalone: true,
  template: `
   <section>
        <h2>Create new campaign</h2>
        <!-- <button mat-raised-button color="primary" style="margin-bottom: 2rem;" routerLink="/new-campaign">Create New Campaign</button> -->
      </section>
    <section class="expandable" id="mailerInfo">
      <div class="grid-container" style="cursor:pointer;" (click)="toggleSection('mailerInfo')">
        <p class="title">Mailer Information</p>
        <div class="content" [hidden]="!expandedSections.mailerInfo">
          <p>Input and review mailer information here.</p>
        </div>
      </div>
    </section>

    <section class="expandable" id="campaignInfo">
      <div class="grid-container" style="cursor:pointer;" (click)="toggleSection('campaignInfo')">
        <p class="title">Campaign Information</p>
        <div class="content" [hidden]="!expandedSections.campaignInfo">
          <p>Input and review campaign information here.</p>
        </div>
      </div>
    </section>

    <section class="expandable" id="englishAdInfo">
      <div class="grid-container" style="cursor:pointer;" (click)="toggleSection('englishAdInfo')">
        <p class="title">English Ad Info</p>
        <div class="content" [hidden]="!expandedSections.englishAdInfo">
          <p>Input and review English ad information here.</p>
        </div>
      </div>
    </section>

    <section class="expandable" id="frenchAdInfo">
      <div class="grid-container" style="cursor:pointer;" (click)="toggleSection('frenchAdInfo')">
        <p class="title">French Ad Info</p>
        <div class="content" [hidden]="!expandedSections.frenchAdInfo">
          <p>Input and review French ad information here.</p>
        </div>
      </div>
    </section>

    <section class="expandable preview-ads" id="previewAds">
      <div class="grid-container" style="cursor:pointer;">
        <p (click)="togglePreviewAds()" class="title">Preview Ads Page</p>
        <div class="content" [hidden]="!previewAdsExpanded">
          <p>Preview ads here before submission.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .expandable {
      width: 75%;
      margin-left: 0;
      margin-right: auto;
      margin-top: 0;
    }
    .grid-container {
      display: grid;
      grid-template-columns: 1fr;
      align-items: start;
      background-color: #ffffff;
      padding: 0.5em 1em;
      margin-top: 1em;
      cursor: pointer;
      border-radius: 10px;
    }
    .title {
      user-select: none;
      font-weight: 300;
      margin: 0 0 0.5em 0;
    }
    .content {
      padding-left: 0;
      background-color: #ffffff;
      border-top: 1px solid #ccc;
      padding-top: 0.5em;
    }

.toggle-btn {
    background: none;
    border: none;
    font-weight: bold;
    cursor: pointer;
}

.preview-ads {
    width: 75%;
}
  `]
})
export class NewCampaignComponent {
  previewAdsExpanded = false;
  expandedSections = {
    mailerInfo: false,
    campaignInfo: false,
    englishAdInfo: false,
    frenchAdInfo: false
  };

  togglePreviewAds() {
    this.previewAdsExpanded = !this.previewAdsExpanded;
  }

  toggleSection(section: keyof typeof this.expandedSections) {
    this.expandedSections[section] = !this.expandedSections[section];
  }
}
