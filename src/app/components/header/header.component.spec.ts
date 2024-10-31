import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ RouterTestingModule ] // Importa RouterTestingModule per evitare errori di routing
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the logo', () => {
    const logoElement = fixture.debugElement.query(By.css('.logo img')).nativeElement;
    expect(logoElement.getAttribute('src')).toContain('FruitImpact_Logo.png');
  });

  it('should display the desktop navbar when windowWidth > 768', () => {
    component.windowWidth = 1024;
    fixture.detectChanges();
    const desktopNavbar = fixture.debugElement.query(By.css('.navbar'));
    expect(desktopNavbar).toBeTruthy();
  });

  it('should display the hamburger menu icon when windowWidth <= 768', () => {
    component.windowWidth = 768;
    fixture.detectChanges();
    const hamburgerIcon = fixture.debugElement.query(By.css('.hamburger'));
    expect(hamburgerIcon).toBeTruthy();
  });

  it('should toggle the mobile menu when hamburger icon is clicked', () => {
    component.windowWidth = 768;
    fixture.detectChanges();
    const hamburgerIcon = fixture.debugElement.query(By.css('.hamburger'));
    hamburgerIcon.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isToggled).toBeTrue();

    const mobileNavbar = fixture.debugElement.query(By.css('.mobile-navbar'));
    expect(mobileNavbar).toBeTruthy();
  });

  it('should close the mobile menu when an item is clicked', () => {
    component.isToggled = true;
    component.windowWidth = 768;
    fixture.detectChanges();

    const mobileNavbarLink = fixture.debugElement.query(By.css('.mobile-navbar ul li a'));
    mobileNavbarLink.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isToggled).toBeTrue();
  });
});
