import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilOficioComponent } from './perfil-oficio.component';

describe('PerfilOficioComponent', () => {
  let component: PerfilOficioComponent;
  let fixture: ComponentFixture<PerfilOficioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilOficioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilOficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
