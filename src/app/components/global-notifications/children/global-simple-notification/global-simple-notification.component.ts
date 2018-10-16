import { Component, Input } from '@angular/core';
import {
  AnimationEvent,
  AnimationBuilder,
  style,
  animate
} from '@angular/animations';

import { GlobalNotificationsService } from '../../../../services/global-notifications.service';

import { notificationStateTrigger } from '../../notification-animations';

import { GlobalNotification } from '../../../../interfaces/globalNotification';

@Component({
  selector: 'app-global-simple-notification',
  templateUrl: './global-simple-notification.component.html',
  styleUrls: ['./global-simple-notification.component.scss'],
  animations: [ notificationStateTrigger ]
})
export class GlobalSimpleNotificationComponent {
  @Input() notification: GlobalNotification;

  isVisible: boolean;

  constructor(private globalNotificationsService: GlobalNotificationsService) {
    this.isVisible = true;
  }

  closeNotification(id: number): void {
    this.isVisible = false;
    setTimeout(() => {
      this.globalNotificationsService.removeNotification(id);
    }, 500);
  }
}