import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { PersonalDataService } from 'app/services/personal-data.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
      mobile_menu_visible: any = 0;
    private toggleButton: any;
    private sidebarVisible: boolean;
    public usuarioData: String;
    
    id: any = [];
    user: any;
   nombres : any;
    public userName: string;

  
    constructor(private personaldataService: PersonalDataService, private authService: AuthService, location: Location,  private element: ElementRef, private router: Router) {
      this.location = location;
          this.sidebarVisible = false;
      
    }

    ngOnInit(){
        this.userName = this.authService.getUserName();
        this.getUserbyid(this.nombres);
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
      this.router.events.subscribe((event) => {
        this.sidebarClose();
         var $layer: any = document.getElementsByClassName('close-layer')[0];
         if ($layer) {
           $layer.remove();
           this.mobile_menu_visible = 0;
         }
     });
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);

        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };


    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }

      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      return 'Tutorias';
    }
   

    getUserbyid(id: string) {
        this.personaldataService.getPidmByUsuario(id).subscribe(
            data => {
                if (data) {
                    this.usuarioData = data;
                    // this.id = this.usuarioData[0].id;
                    // this.user = this.usuarioData[0].id;
                    this.nombres = data.nombreCompleto
                    id=this.user;
                    if (Object.keys(data).length === 0) {
                    }
                }
            },
            err => {
                // console.log(err);
            }
        );
    }
    // getUserbyid(nombres: string){
    // this.personaldataService.findDataUser(environment.servicioUserldap, this.userName).subscribe(
    //     data => {
    //         if(data)
    //         {
    //             this.nombres = data.nombreCompleto
    //             console.log('nombre',this.nombres)
    //         }
    //     }
    // )}
    logout() {
        localStorage.removeItem('param');
        this.authService.logout();
    }




}
