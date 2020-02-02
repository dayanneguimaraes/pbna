import { Component, OnInit } from '@angular/core';
import { ExtratoService } from './extrato.service';

@Component({
    selector: 'app-extrato',
    templateUrl: './extrato.component.html',
    styleUrls: ['./extrato.component.scss'],
    providers: [ExtratoService]
})
export class ExtratoComponent implements OnInit {

    extrato: any = {};

    constructor(private extratoService: ExtratoService) { }

    ngOnInit() {
    }

    pesquisar(): void {
        this.extratoService.obterExtrato().subscribe((response: any) => {
            this.extrato = response.data;
        });
    }

    imprimir(): void {

    }
    
}
