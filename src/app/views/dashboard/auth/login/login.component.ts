import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, FormControl, UntypedFormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UBIGEO_PATH, LOGIN_API_PATH } from 'src/app/shared/constantes/app.constantes';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Subject, Subscription } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import * as Ladda from 'ladda';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {
  // @ViewChild('submitBtn')
  // submitBtn!: ElementRef<any>;
  public errorMessage = '';
  submit = false;
  hide = true;
  value3 = '';
  testarray: any = [];
  valuex: any = '';

  // public corps$!: Subscription;

  form: UntypedFormGroup = this.fb.group({
    user_email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  // private btnloading!: Ladda.LaddaButton;
  // private destroy$ = new Subject();

  constructor(
    private fb: UntypedFormBuilder,
    private http: HttpClient
  ) { }


  ngOnInit(): void {
    console.log('Login...');
  }
  ngAfterViewInit(): void {
    //this.btnloading = Ladda.create(this.submitBtn.nativeElement);
    if (1) { }
  }
  onSubmit(): void {
    if (this.form.valid) {
      this.errorMessage = '';
      //this.submit = true;
      //this.btnloading!.start();

      this.http.post(LOGIN_API_PATH, this.form.value)
        .pipe(
          finalize(() => { }),
          //takeUntil(this.destroy$)
        )
        .subscribe((err: any) => {
          const message = String(err?.message).replace(/\(#([0-9]+)\)/, err?.help ? `<b><a href="${err.help}">(#$1)</a></b>` : '<b>(#$1)</b>');
          this.errorMessage = message;
          this.submit = false;
        }
        );
    }
  }
  ngOnDestroy(): void {
    this.errorMessage = '';
    this.submit = false;

    if (1) { }
  }
}
