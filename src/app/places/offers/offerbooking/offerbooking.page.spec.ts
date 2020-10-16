import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfferbookingPage } from './offerbooking.page';

describe('OfferbookingPage', () => {
  let component: OfferbookingPage;
  let fixture: ComponentFixture<OfferbookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferbookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfferbookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
