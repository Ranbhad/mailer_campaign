import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent {
  shippingOptions = ['Option 1', 'Option 2', 'Option 3'];
  mailCampaignsOptions = ['Campaign 1', 'Campaign 2', 'Campaign 3'];
  postServiceOptions = ['Service 1', 'Service 2', 'Service 3'];
  orderHistoryOptions = ['History 1', 'History 2', 'History 3'];
}
