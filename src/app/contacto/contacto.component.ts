import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  contactoForm!: FormGroup;
  name!: string;


  constructor(
    private readonly fb: FormBuilder) { }
 
    ngOnInit(): void{
      this.contactoForm = this.initForm();
    }


    onSubmit(): void{
      console.log('Form ->', this.contactoForm.value);
    }
  
    initForm(): FormGroup{
      return this.fb.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required]],
        asunto: ['', [Validators.required]],
        comment: ['', [Validators.required, Validators.minLength(50)]]
      })
  
    }
}
