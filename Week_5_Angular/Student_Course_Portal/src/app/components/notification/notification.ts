import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],

  providers: [NotificationService],

  templateUrl: './notification.html',
  styleUrl: './notification.scss'
})
export class NotificationComponent {
constructor(
  public notificationService: NotificationService
) {

  this.notificationService.setMessage(
    'Welcome to the Student Course Portal!'
  );

}

}