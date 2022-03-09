import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamedayComponent } from './gameday.component';

describe('GamedayComponent', () => {
  let component: GamedayComponent;
  let fixture: ComponentFixture<GamedayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamedayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
