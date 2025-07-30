import { Component, Input } from '@angular/core';
import { IProfile } from '../../data/interfaces/profile.interface';
import { NgIf } from '@angular/common';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [NgIf, ImgUrlPipe],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
   @Input () profile!: IProfile
}
