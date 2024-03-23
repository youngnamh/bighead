import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lp-main-content',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  templateUrl: './lp-main-content.component.html',
  styleUrl: './lp-main-content.component.scss',
})
export class LpMainContentComponent {}
