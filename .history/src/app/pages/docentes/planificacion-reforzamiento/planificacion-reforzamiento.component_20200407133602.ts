import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService} from 'app/service/rest.service';
import { TutoriaConstants } from 'app/constants/constants';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { formatDate } from "@angular/common";

const format = 'dd/MM/yyyy';
const myDate = Date.now();
const locale = 'en-US';
const formattedDate = formatDate(myDate, format, locale);


@Component({
  selector: 'app-planificacion-reforzamiento',
  templateUrl: './planificacion-reforzamiento.component.html',
  styleUrls: ['./planificacion-reforzamiento.component.scss']
})
export class PlanificacionReforzamientoComponent implements OnInit {
  titleDocente= TutoriaConstants.DATOSDOCENTE;
  titleTutoria= TutoriaConstants.DATOSTUTORIA;
  titleRegistro= TutoriaConstants.DATOSREGISTRO;
  constructor(private service: PersonalDataService, private restService: RestService ) { }
  options: any = {
    toastLife: 3000,
    dismiss: "auto",
    showCloseButton: true
  };
  nrc1: any = {
    id: ""
  }

  datosGuardar: any;
  ncr: any;
  nrcs: any
  spidem = 334571;
  cedula = "1725412306";
  
  ngOnInit() {
    this.listarNrc();

   }
   id:any
   procesaPropagar(data) {
     this.id = data[0].pidm
     //console.log(data[0].pidm)
   }
  tema: any = {
    tema: ""
  }
  nrc: any;
  codigo: any;
  asignatura: any;
  campus: any;
  periodo: any;
  inicio: any;
  fin: any;

  guardar(nrc: number, codigo, asignatura, campus, periodo, inicio, fin) {
    this.nrc = nrc;
    this.codigo = codigo;
    this.asignatura = asignatura;
    this.campus = campus;
    this.periodo = periodo;
    this.inicio = inicio;
    this.fin = fin;
  }
   
   
  listarNrc() {
    this.restService.findDataById("planificaionReforzamiento/", this.spidem).subscribe(
      data => {
        this.nrcs = data
        //console.log(this.nrcs)
      }
    )
  }
  ActualizarTutoria() {

    this.datosGuardar = {
      codigoFormularios: "2",
      interacion: "0",
      fechaFormulario: formattedDate,
      tipoPersona: "ESTUDIANTE",
      tipoTutoria: "REFORZAMIENTO",
      spridenPidm: this.id,
      tema: this.tema.tema,
      observacion: this.observaciones.observacion,
      estado: "A",
      nrc: this.nrc,
      periodo: this.periodo,
      nivel: this.nivel,
      campCode: this.campus,
      asignatura: this.asignatura,
      codAsignatura: this.codigo
    }
    this.restService.UpData(this.datosGuardar,"segu").subscribe(
      data => {

        if(data){
          this.toast.success(data.mensaje, "El Formulario", this.options);
          this.tema = [];
          this.observaciones.observacion= "";
          this.nrcs = []
        }else{

          this.toast.error("No se creo");
        }
        
      }
    )
  }
   expressType: string;
   typeExpress: string[] = [ 'Si', 'No'];
   radioOptions: FormGroup;

   expressType2: string;
   typeExpress2: string[] = [ 'AULA', 'LUGAR'];
   radioOptions2: FormGroup;


}
