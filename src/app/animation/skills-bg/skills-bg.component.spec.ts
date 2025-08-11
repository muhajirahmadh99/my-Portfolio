import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsBgComponent } from './skills-bg.component';

describe('SkillsBgComponent', () => {
  let component: SkillsBgComponent;
  let fixture: ComponentFixture<SkillsBgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsBgComponent]
    });
    fixture = TestBed.createComponent(SkillsBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
