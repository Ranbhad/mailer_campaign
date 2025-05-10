import { Component } from '@angular/core';

@Component({
  selector: 'app-new-campaign',
  standalone: true,
  template: `
    <section class="expandable" id="mailerInfo">
      <h2>Mailer Information <button class="toggle-btn" aria-expanded="false">Expand</button></h2>
      <div class="content" hidden>
        <p>Input and review mailer information here.</p>
      </div>
    </section>

    <section class="expandable" id="campaignInfo">
      <h2>Campaign Information <button class="toggle-btn" aria-expanded="false">Expand</button></h2>
      <div class="content" hidden>
        <p>Input and review campaign information here.</p>
      </div>
    </section>

    <section class="expandable" id="englishAdInfo">
      <h2>English Ad Info <button class="toggle-btn" aria-expanded="false">Expand</button></h2>
      <div class="content" hidden>
        <p>Input and review English ad information here.</p>
      </div>
    </section>

    <section class="expandable" id="frenchAdInfo">
      <h2>French Ad Info <button class="toggle-btn" aria-expanded="false">Expand</button></h2>
      <div class="content" hidden>
        <p>Input and review French ad information here.</p>
      </div>
    </section>

    <section class="expandable" id="previewAds">
      <h2>Preview Ads Page <button class="toggle-btn" aria-expanded="false">Expand</button></h2>
      <div class="content" hidden>
        <p>Preview ads here before submission.</p>
      </div>
    </section>
  `,
  styles: [`
    .expandable h2 {
      cursor: pointer;
      user-select: none;
    }
    .content {
      padding: 0 1rem 1rem 1rem;
    }
  `]
})
export class NewCampaignComponent {}
