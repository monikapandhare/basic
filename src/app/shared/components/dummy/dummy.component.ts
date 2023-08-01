import { Component, OnInit } from "@angular/core";

@Component({
    selector : "app-dummy",
    template  :`
        <P>This is comonent with only one file means template and css in ts file</P>
    `,
    styles  :
        [`
            p{
                padding : .625rem;
                background-color: blue;
                text-align : center;
                font-size : 2rem;
                color:#fff;
                margin-top:1rem;
            }
            `
        ]
})

export class DumyComponent implements OnInit{
    ngOnInit(): void {
        
    }
    
}