import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct copyright text', () => {
    const copyrightElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(copyrightElement.textContent).toContain('Copyright © 2024 by Davide Giannetti');
  });

  it('should have a GitHub link with the correct href', () => {
    const githubLink = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(githubLink.getAttribute('href')).toBe('https://github.com/davidegaf8');
  });

  it('should display the GitHub icon', () => {
    const iconElement = fixture.debugElement.query(By.css('i.bx.bxl-github'));
    expect(iconElement).toBeTruthy();
  });
});
