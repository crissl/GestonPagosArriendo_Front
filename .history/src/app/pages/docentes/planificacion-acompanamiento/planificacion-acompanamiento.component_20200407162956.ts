import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PersonalDataService } from 'app/services/personal-data.service';
import { RestService } from 'app/service/rest.service'
import { formatDate } from "@angular/common";
import { MatRadioButton, MatRadioChange } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { TutoriaConstants } from 'app/constants/constants';
import { Campus } from 'app/models/campus.model';

import { FormGroup } from '@angular/forms';

const format = 'dd/MM/yyyy';
const myDate = Date.now();
const locale = 'en-US';
const formattedDate = formatDate(myDate, format, locale);

@Component({
  selector: 'app-planificacion-acompanamiento',
  templateUrl: './planificacion-acompanamiento.component.html',
  styleUrls: ['./planificacion-acompanamiento.component.scss']
})
export class PlanificacionAcompanamientoComponent implements OnInit {
  @Input() datos: boolean;
  @Output() propagar = new EventEmitter<string>();
  titleDocente = TutoriaConstants.DATOSDOCENTE;
  titleTutoria = TutoriaConstants.DATOSTUTORIA;
  titleRegistro = TutoriaConstants.DATOSREGISTRO;
  aula: boolean = true
  constructor(private service: PersonalDataService, private restService: RestService, public toast: ToastrService) { }
  datosGuardar: any;
  ncr: any;
  codigos: any;
  spidem = 357192;
  id: any
  tema: any = {
    tema: ""
  }
  codigoCa: any;
  campus: any;
  campusSelected: any;
  cedula = "1725412306";


  ngOnInit() {
    this.listarCampus();

  }

  public observaciones: any = {
    observacion: "",
    fecha: Date.now(),
  }

  guardar() {
    this.datosGuardar = {
      codigoFormularios: "5",
      interacion: "0",
      fechaFormulario: formattedDate,
      tipoPersona: "ESTUDIANTE",
      tipoTutoria: "PLANIFICACION ACOMPANAMIENTO",
      spridenPidm: this.id,
      tema: this.tema.tema,
      observacion: this.observaciones.observacion,
      estado: "A"
    }
    this.guardarTutorias();
  }
  

  guardarTutorias() {

    this.restService.addData(this.datosGuardar, "segu").subscribe(
      data => {

        console.log("se guardo");
      }
    )
  }
  
  guardarAcompanamiento(nrc: number, codigo, asignatura, campus, periodo, nivel) {
    this.nrc = nrc;
    this.codigo = codigo;
    this.asignatura = asignatura;
    this.campus = campus;
    this.periodo = periodo;
    this.nivel = nivel; 
  }


  listCamp(codigoCa: number, campus) {
    this.codigoCa = codigoCa;
    this.campus = campus;

  }
  listarCampus() {
    this.restService.get("campus").subscribe(
      datos => {
        if (datos) {
          console.log('datos', datos)
          this.codigos = datos;
          this.propagar.emit(this.campus);
          console.log(" se listo " + this.codigos)
        }
      }
    )
  }
  // listarCamp(){
  //   this.restService.findData1('campus').subscribe(
  //     data => {
  //      this.codigos[0]=data;
  //      console.log("se listo" + this.codigos);  
  //      console.log("se listo" + this.codigos.codigo);  

  //     }
  //   )
  // }


  expressType: string;
  typeExpress: string[] = ['AULA', 'LUGAR'];

  radioOptions: FormGroup;
}







