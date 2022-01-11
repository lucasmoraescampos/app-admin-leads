import { Component, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild(IonSegment) segment: IonSegment;

  public swiper: Swiper;

  public swiperOptions: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0
  };

  public doughnutChartLabels: string[] = ['Redes Sociais', 'Site e Adwords', 'Lead Fone'];

  public doughnutChartData: number[] = [350, 450, 100];

  public doughnutChartType: any = 'doughnut';

  public options = {
    responsive: true,
    legend: { position: 'right' }
  }

  public doughnutChartColors: any[] = [{
    backgroundColor: ['#f1c40f', '#2ecc71', '#e74c3c']
  }];

  constructor() { }

  ngOnInit(): void {
  }

  public onSwiper(swiper: Swiper) {
    this.swiper = swiper;
  }

  public onSlideChange() {
    this.segment.value = String(this.swiper.activeIndex);
  }

  public segmentChanged(event: any) {
    this.swiper.slideTo(event.detail.value);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
