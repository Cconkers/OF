import { ComponentFixture, TestBed } from '@angular/core/testing';
import { cardComponent } from './card.component';



describe('HomeComponent', () => {
  let component: cardComponent;
  let fixture: ComponentFixture<cardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ cardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(cardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
