import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameIntroPromptComponent } from './game-intro-prompt.component';

describe('GameIntroPromptComponent', () => {
  let component: GameIntroPromptComponent;
  let fixture: ComponentFixture<GameIntroPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameIntroPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameIntroPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
