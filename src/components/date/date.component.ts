import { Component } from "@angular/core";

@Component({
    selector: 'date-component',
    templateUrl: './date.component.html'
})
export class DateComponent {
    private theDate: string;

    agInit(params: any): void {
        this.theDate = params.value;
        if(!this.theDate){
            this.theDate = "???";
            return;
        }
        if (this.theDate.startsWith("/Date(")) {
            this.theDate = new Date(parseInt(this.theDate.substr(6))).toLocaleDateString();
        }
    }
}
