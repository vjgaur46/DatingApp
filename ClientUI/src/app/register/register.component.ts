import { Component, inject, input, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private accountService= inject(AccountService)
  private toastr=inject(ToastrService);
  cancelRegister =output<boolean>();  //output operator
  model:any={};
  register()
  {
    this.accountService.register(this.model).subscribe({
      next: response => {
        this.toastr.success('Registration successfully done!')
        this.cancel();
      },
      error: error =>this.toastr.error(error.error)
    })
  }

  cancel()
  {
    this.cancelRegister.emit(false);
  }
}
