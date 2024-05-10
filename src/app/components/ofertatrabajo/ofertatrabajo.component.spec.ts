import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertatrabajoComponent } from './ofertatrabajo.component';

describe('OfertatrabajoComponent', () => {
  let component: OfertatrabajoComponent;
  let fixture: ComponentFixture<OfertatrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfertatrabajoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfertatrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
