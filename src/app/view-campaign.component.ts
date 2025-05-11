import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlDirective, FormSelectDirective, FormFloatingDirective, FormLabelDirective } from '@coreui/angular';

@Component({
  selector: 'app-view-campaign',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, FormsModule, FormFloatingDirective, FormControlDirective, FormLabelDirective, FormSelectDirective],
  template: `
    <h1>View Campaign</h1>

    <section class="expandable" *ngFor="let section of sections">
      <div class="grid-container" (click)="toggleSection(section.id)" style="cursor:pointer;">
        <p class="title">{{ getSectionTitle(section) }}</p>
        <div class="content" [hidden]="!isExpanded(section.id)">
          <ng-container *ngIf="section.id === 'mailerInfo'; else showContent">
            <form>
              <label cLabel for="businessProfile">Business Profile:</label>
              <div cFormFloating="true">
              <select aria-label="Default select example" id="businessProfile" cSelect sizing="sm">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              </div>
              <label cLabel for="mailerNumber">Mailer Number:</label>
              <div cFormFloating="true">
              <input cFormControl type="text" style="min-height: 10%;" id="mailerNumber"/>
              </div>
              <label cLabel for="displayNameEnglish">Display Name - English:</label>
              <div cFormFloating="true">
              <input cFormControl type="text" id="displayNameEnglish" />
              </div>
              <label cLabel for="logoEnglish" >Upload New Logo - English:</label>
              <div cFormFloating="true">
              <input cFormControl type="file" id="logoEnglish" (change)="onFileChange($event, 'english')" />
              </div>
              <div cFormFloating="true" *ngIf="alertMessage" class="alert">{{ alertMessage }}</div>
              <button cFormControl type="button" (click)="confirm()">Confirm</button>
            </form>
          </ng-container>
          <ng-template #showContent>
            <p>{{ getSectionContent(section) }}</p>
          </ng-template>
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
      border-radius: 10px;
      cursor: pointer;
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
    /* Targeting the input field */
#businessProfile {
    width: 300px;      
    height: 10px;
    length: 10px;      
    padding: 3px;      
    font-size: 1em;  
}

  `]
})
export class ViewCampaignComponent {
  expandedSections: Set<string> = new Set(['mailerInfo']);

  sections = [
    {
      id: 'mailerInfo',
      title: { en: 'Mailer Information' },
      content: { 
        en: 'Form content replaced by template form.'
      }
    },
    {
      id: 'campaignInfo',
      title: { en: 'Campaign Information' },
      content: { en: 'Input and review campaign information here.' }
    },
    {
      id: 'englishAdInfo',
      title: { en: 'English Ad Info' },
      content: { en: 'Input and review English ad information here.' }
    },
    {
      id: 'previewAds',
      title: { en: 'Preview Ads Page' },
      content: { en: 'Preview ads here before submission.' }
    }
  ];

  businessProfile: string = '';
  mailerNumber: string = '';
  displayNameEnglish: string = '';
  alertMessage: string | null = null;

  toggleSection(id: string) {
    if (this.expandedSections.has(id)) {
      this.expandedSections.delete(id);
    } else {
      this.expandedSections.add(id);
    }
  }

  isExpanded(id: string): boolean {
    return this.expandedSections.has(id);
  }

  getSectionTitle(section: any): string {
    return section.title.en;
  }

  getSectionContent(section: any): string {
    return section.content.en;
  }

  onFileChange(event: any, lang: string) {
    // Handle file input change logic here
    this.alertMessage = `File selected for ${lang}`;
  }

  confirm() {
    this.alertMessage = 'Form confirmed!';
  }
}
