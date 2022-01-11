import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public appPages = [
    { title: 'Início', url: '/home', icon: 'home-outline' },
    { title: 'Clientes', url: '/customers', icon: 'people-outline' },
    { title: 'Produtos', url: '/products', icon: 'cube-outline' },
    { title: 'Pedidos', url: '/orders', icon: 'receipt-outline' }
  ];

  constructor() {}

  ngOnInit() {

    if (Capacitor.isNativePlatform()) {
      StatusBar.setBackgroundColor({ color: '#FAFAFA' });
      StatusBar.setStyle({ style: Style.Light });
    }
    
  }

}
