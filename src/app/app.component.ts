import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    w3_open() {
        document.getElementById('main').style.marginLeft = '25%';
        document.getElementById('mySidebar').style.width = '25%';
        document.getElementById('mySidebar').style.display = 'block';
        document.getElementById('openNav').style.display = 'none';
    }

    w3_close() {
        document.getElementById('main').style.marginLeft = '0%';
        document.getElementById('mySidebar').style.display = 'none';
        document.getElementById('openNav').style.display = 'inline-block';
    }
}
