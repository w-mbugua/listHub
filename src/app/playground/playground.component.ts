import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.css']
})
export class PlayGroundComponent implements OnInit{
    
    constructor(){}

    ngOnInit(){}

    pageTitle: string = "PlayGround"
}