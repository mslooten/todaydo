import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RoughSVG } from 'roughjs/bin/svg';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements AfterViewInit {
  @ViewChild('svg')
  svg!: ElementRef;

  @ViewChild('wrapper')
  wrapper!: ElementRef;

  private seed = Math.random() * 100;

  ngAfterViewInit(): void {
    const x = this.wrapper.nativeElement.clientWidth;
    const y = this.wrapper.nativeElement.clientHeight;
    console.log(x, y);
    this.draw(x, y);
  }

  private draw(x: number, y: number) {
    console.log(x, y);

    const canvas = this.svg.nativeElement as SVGSVGElement;
    let rc = new RoughSVG(canvas);
    const rect = rc.rectangle(10, 10, x + 32, y + 32, {
      roughness: 2,
      bowing: 1,
      strokeWidth: 1.2,
      seed: this.seed,
      fill: '#e0e0ff',
    });
    canvas.replaceChildren(rect);
    canvas.setAttribute('width', `${x + 32}`);
    canvas.setAttribute('height', `${y + 32}`);
  }
}
