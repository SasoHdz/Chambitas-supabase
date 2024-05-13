import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSelectUserComponent } from './modal-select-user.component';

describe('ModalSelectUserComponent', () => {
  let component: ModalSelectUserComponent;
  let fixture: ComponentFixture<ModalSelectUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSelectUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalSelectUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
