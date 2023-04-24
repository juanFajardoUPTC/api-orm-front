import { Component, OnInit } from '@angular/core';
import { ServicioEstudiantesService } from 'src/app/services/servicio-estudiantes.service';
import { Router } from '@angular/router';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { Estudiante } from '../estudiante.model';


@Component({
  selector: 'app-tabla-estudiantes',
  templateUrl: './tabla-estudiantes.component.html',
  styleUrls: ['./tabla-estudiantes.component.scss']
})


export class TablaEstudiantesComponent implements OnInit {
  res: any = [];
  students: any[] = [];
  paginaActual = 1
  itemsPerPage = 5
  totalPaginas = 1
  ordenamiento = 'asc'
  columna = 'codigo'
  busqueda = ''
  fmRcurso: FormGroup;
  selected_student:any;
  model = new Estudiante(2023, "", "", "", "", "", "");
  model1:any;

  imagenSeleccionada = false
  files: File[] = [];
  fileSelected:any;

  
  constructor(
    private servicioEstudiantes: ServicioEstudiantesService,
     private router: Router,
     private formBuilder: FormBuilder
  
     ) {
      this.fmRcurso = this.formBuilder.group({
        codigo:['',[Validators.required,Validators.minLength(5)]],
        nombre: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
        apellido:['',[Validators.required, Validators.pattern('^[A-Za-z]+$')]],
        genero:['',[Validators.required]],
        numero_documento:['',[Validators.required]],
        tipo_documento:['',[Validators.required]],
        estado:['',[Validators.required]],
      })
      }
  

  ngOnInit(): void {
    this.servicioEstudiantes.getRequest(this.columna, this.ordenamiento, this.busqueda).subscribe(data => {
      console.log('Data', data);
      if(data['estudiantes'])
      this.res = data['estudiantes']
      else
      this.res = data

      for (const iterator of this.res) {
      
        if(iterator.path)
        this.servicioEstudiantes.getImg({
          "object_name": iterator.path,
          "expiration": 3600,
          "method": "GET"
        }).subscribe(res=>{
          console.log('RESPUESTA',res);
    
        let aux = JSON.parse(res['body'])
        console.log('AUX',aux['event_s']);
    
          iterator.pathPresigned = aux['event_s']
    
        })
      }
      this.contarPaginas()

    }, error => {
      console.log('ERROR', error);
    });

  }
  cambiarPaginacion(key: string, event: any) {

    if (key == 'mostrar')
      this.itemsPerPage = Number(event)

    if (key == 'columna')
      this.columna = event

    if (key == 'ordenamiento') {
      this.ordenamiento = event
      if (this.ordenamiento == 'Ascendente')
        this.ordenamiento = 'asc'
        else
        this.ordenamiento = 'desc'

    }

    if (key == 'busqueda')
      this.busqueda = event



    this.servicioEstudiantes.getRequest(this.columna, this.ordenamiento, this.busqueda).subscribe(data => {
      console.log('Data', data);
      if(data['estudiantes'])
      this.res = data['estudiantes']
      else
      this.res = data
      this.contarPaginas()

    }, error => {
      console.log('ERROR', error);
    });

    this.contarPaginas()
  }

  llenarLista() {

  }
  contarPaginas() {
    this.totalPaginas = 0
    this.paginaActual = 1
    for (let index = 0, c = 0; index < this.res.length; index++, c++) {
      const element = this.res[index];
      if (this.res.length <= this.itemsPerPage) {
        this.totalPaginas = 1
        break
      }
      else
        if (c == this.itemsPerPage) {
          this.totalPaginas++
          c = 0
        }

      if (index == this.res.length - 1) {
        this.totalPaginas++
      }

    }
  }


  selectStudent(student: any) {
    this.selected_student = student;
    this.fmRcurso.setValue({
      codigo: this.selected_student.codigo,
      nombre: this.selected_student.nombre,
      apellido: this.selected_student.apellido,
      genero: this.selected_student.genero,
      numero_documento: this.selected_student.numero_documento,
      tipo_documento: this.selected_student.tipo_documento,
      estado: this.selected_student.estado,
      //path:this.selected_student.path,
    });
  }

  disable_state(student: any){
    const student_disable_state = { codigo: student.codigo,estado: student ='I'};


    //this.servicioEstudiantes.patchRequest(student_disable_state ).


    this.servicioEstudiantes.patchRequest(student_disable_state ).subscribe(
      (      respuesta: any) => {
        // Manejar la respuesta exitosa aquí
        console.log(respuesta);
      },
      error => {
        // Manejar el error aquí
        console.error("error al hinabilitar" ,error );
      }
    );
  }
  

  updateStudent() {
   this.servicioEstudiantes.putRequest(this.model1) .subscribe(
      (      respuesta: any) => {
        // Manejar la respuesta exitosa aquí
        console.log(respuesta);
      },
      error => {
        // Manejar el error aquí
        console.error(error);
      }
    );
    console.log(this.model1);
  }

  goTomod() {
    this.router.navigate(['/estudiantes/modificar-estudiante']);
  }


  // putImagenes(path:string){
    
      
  //     this.servicioEstudiantes.getImg({
  //       "object_name": path,
  //       "expiration": 3600,
  //       "method": "PUT"
  //     }).subscribe(res=>{
  //       console.log('RESPUESTA',res);
  
  //     let aux = JSON.parse(res['body'])
  //     console.log('AUX',aux['event_s']);
  
  //       iterator.pathPresigned = aux['event_s']
  
  //     })
    
  // }


  onSubmit(){
   console.log("se carga de datos")
   this.putImagen()
    this.model1 = new Estudiante(
      this.fmRcurso.value.codigo, 
      this.fmRcurso.value.nombre, 
      this.fmRcurso.value.apellido, 
      this.fmRcurso.value.tipo_documento, 
      this.fmRcurso.value.numero_documento, 
      this.fmRcurso.value.estado, 
      this.fmRcurso.value.genero,
      this.getStringDate()+'/' + this.fmRcurso.value.codigo);
      this.updateStudent();
      
     

  }


  onSelect(event: any) {
    const file = event.addedFiles[0];
    this.fileSelected = file;

    if (this.files.length > 0) {
      this.files.splice(0, 1);
    }
    this.files.push(file);
    this.imagenSeleccionada = true;
  }
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


  putImagen(){


    this.servicioEstudiantes.getImg({
      "object_name": this.getStringDate()+'/' + this.fmRcurso.value.codigo,
      "expiration": 3600,
      "method": "PUT",
    }).subscribe(res=>{
      let body = JSON.parse(res['body']);
      let url = body['event_s']
      console.log('URL PUT',url);
      console.log(this.getStringDate()+'/' + this.fmRcurso.value.codigo);
      console.log(this.fileSelected);
      
      

this.servicioEstudiantes.UploadPresigned(url,this.fileSelected).subscribe(
  (resPresigned: any) => {
    console.log(resPresigned);
    alert('La imagen fue subida con exito')
   // this.router.navigate(['/home'])
  }
);

    })

  }

  getStringDate(){
    var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

if (month.length < 2) 
    month = '0' + month;
if (day.length < 2) 
    day = '0' + day;

return [year, month, day].join('-');
  }

}
