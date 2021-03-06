import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SimpleTemplateFormComponent } from './simple-template-form.component';
import { GlobalNotificationsService } from './../../../../../services/global-notifications/global-notifications.service';

describe('SimpleTemplateFormComponent', () => {
  let component: SimpleTemplateFormComponent;
  let fixture: ComponentFixture<SimpleTemplateFormComponent>;

  let globalNotificationsService: jasmine.SpyObj<GlobalNotificationsService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTemplateFormComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: GlobalNotificationsService,
          useValue: jasmine.createSpyObj('GlobalNotificationsService', [
            'addSimpleNotification',
          ]),
        },
      ]
    })
    .compileComponents();

    globalNotificationsService = TestBed.get(GlobalNotificationsService);

    fixture = TestBed.createComponent(SimpleTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
