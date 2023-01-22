import { ComponentFixture, TestBed } from '@angular/core/testing';
import { actionButtonComponent } from './actionButton.component';



describe('HomeComponent', () => {
  let component: actionButtonComponent;
  let fixture: ComponentFixture<actionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ actionButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(actionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
