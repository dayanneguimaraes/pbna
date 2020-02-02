import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppInjectorService } from 'src/app/shared/utils/app-injector.service';

export class AgenciaCadastro {

    formAgencia: FormGroup;

    protected formBuilder: FormBuilder;

    constructor() {
        try {
            const injector = AppInjectorService.getInjector();
            this.formBuilder = injector.get(FormBuilder);
    
            this.formAgencia = this.criarForm();

        } catch (e) {
            console.log('Falha ao inicializar dependencias', e);
        }
    }

    criarForm(): FormGroup {
        return this.formBuilder.group({
            nome: [],
            apelido: new FormControl({value: ''})
        });
    }

    get nome(): string {
        return this.formAgencia.getRawValue().nome;
    }

    set nome(nome: string) {
       this.formAgencia.get('nome').setValue(nome);
    }

    get apelido(): string {
        return this.formAgencia.getRawValue().apelido;
    }

    set apelido(logradouro: string) {
        this.formAgencia.get('apelido').setValue(this.apelido);
    }

    get form(): any {
        return this.formAgencia.controls;
    }

}
