import { Component, OnInit, Inject } from '@angular/core';
import { RestService } from 'app/service/rest.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmarComponent } from './confirmar/confirmar.component';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-confirmacion-asistencia',
  templateUrl: './confirmacion-asistencia.component.html',
  styleUrls: ['./confirmacion-asistencia.component.scss']
})


export class ConfirmacionAsistenciaComponent implements OnInit {

  constructor(private restService: RestService, public toast: ToastrService, public dialog: MatDialog) { }

  codA1: any = {
    id: ""}
  codA: any
  spidem = 357192 ;
  codigoAs: any;
  codigoP: any;
  tema: any;

  ngOnInit() {
    this.listarFormuConfirma();
  }

  listConf(codigoAs: number, codigo, tema) {
    this.codigoAs = codigoAs;
    this.codigoP = codigo;
    this.tema = tema;
  }

    listarFormuConfirma() {
      this.restService.findDataById("confirmarAsistencia/", this.spidem).subscribe(
        data => {
          this.codA = data
          console.log(this.codA)
        }
      )
    }

   
    openDialog(planificacion:any): void {
      this.restService.getData('buscaIdAsistente/'+planificacion.codigo_UZTPLANIF+planificacion.).subscribe(
        (data:{})=>{
          const dialogRef = this.dialog.open(ConfirmarComponent, {
            width: '1000px',
            height: '500PX',
            data: {asistencia: data,info: planificacion},
          });
          dialogRef.afterClosed().subscribe(result => {
            if(result != undefined){
               console.log("se creo")
            }
            console.log('The dialog was closed');

          });
        }
      )
      //
     
      //


    }
  
  }

  
  