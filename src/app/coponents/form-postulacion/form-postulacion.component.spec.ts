import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPostulacionComponent } from './form-postulacion.component';

describe('FormPostulacionComponent', () => {
  let component: FormPostulacionComponent;
  let fixture: ComponentFixture<FormPostulacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPostulacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPostulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
