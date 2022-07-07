import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm:FormGroup;
  users: Array<User> = [];

  constructor(private fb: FormBuilder, private userSerice:UserService) {
    this.userForm = this.fb.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: 0,
      profissao: ''
    })
   }


  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userSerice.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  createUser(): void {
    this.userForm.get('id')?.patchValue(this.users.length + 1);
    this.userSerice.postUser(this.userForm.value).subscribe(result =>
      console.log(`Usuário ${result.nome} ${result.sobrenome} foi cadastrado com sucesso !`))
  }
}
